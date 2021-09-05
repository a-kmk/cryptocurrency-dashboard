// state manager of the app
import React from "react";
import _ from "lodash";

const cc = require("cryptocompare");
cc.setApiKey(
  "8bdf8c1a889850bfeb355df39c99fcdf0b9a1c55d25d54ed96dea14952b26835"
);
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "settings", //change to dashboard
      ...this.savedSettings(),
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins
    };
  }

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) });
  };

  isInFavorites = (key) => _.includes(this.state.favorites, key);

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
    console.log(coinList);
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });

    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        favorites: this.state.favorites
      })
    );
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites } = cryptoDashData;
    return { favorites };
    return {};
  }
  setPage = (page) => this.setState({ page });
  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
