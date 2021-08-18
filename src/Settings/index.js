import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButtom from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function () {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButtom />
      <CoinGrid />
    </Page>
  );
}
