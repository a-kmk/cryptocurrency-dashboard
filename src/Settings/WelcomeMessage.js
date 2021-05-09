import React from "react";
import { AppContext } from "../App/AppProvider";

export default function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to CryptoDash, please select your favourite coins to begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
