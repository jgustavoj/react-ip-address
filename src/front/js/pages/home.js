import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/_home.scss";
import "../../styles/_ip-address-card.scss";
import { InputField } from "../component/InputField";
import { LeafMap } from "../component/LeafMap";
import { IpAddressCard } from "../component/IpAddressCard";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="jumbo">
          <h1 className="display-5 px-3">IP Address Tracker</h1>
          <InputField style={{ paddingTop: "1.5rem" }} />
        </div>
        <IpAddressCard />
        <LeafMap />
      </div>
    </>
  );
};

// {/* <div className="ip-address-card">
// </div> */}
