import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButtom from "./ConfirmButton";
import Page from "../Shared/Page";

export default function () {
  return (
    <Page name="settings">
      <WelcomeMessage /> <ConfirmButtom />
    </Page>
  );
}
