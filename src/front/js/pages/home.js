import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/_home.scss";
import { InputField } from "../component/InputField";
import { LeafMap } from "../component/Map";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid jumbo">
        <h1 className="display-5 px-3">IP Address Tracker</h1>
        <InputField style={{ paddingTop: "1.5rem" }} />
      </div>
      <LeafMap />
    </>
  );
};
