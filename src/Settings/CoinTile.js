import React from "react";
import { AppContext } from "../App/Approvider";
import { SelectableTile } from "../Shared/Tile";
export default function ({ coinKey }) {
  const TileCLass = SelectableTile;

  return <AppContext.Consumer></AppContext.Consumer>;
}
