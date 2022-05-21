import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/_home.scss";
import "../../styles/_ip-address-card.scss";
import { InputField } from "../component/InputField";
import { LeafMap } from "../component/LeafMap";
import { IpAddressCard } from "../component/IpAddressCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");

  // console.log("values", store.content);

  function handleChange(e) {
    setInput(e.target.value);
  }

  console.log("SetInput", input);
  return (
    <>
      <div className="container-fluid">
        <div className="jumbo">
          <h1 className="display-5 px-3">IP Address Tracker</h1>
          <InputField
            style={{
              paddingTop: "1.5rem",
              paddingLeft: "48px",
              paddingRight: "42px",
            }}
            onChange={handleChange}
            onClick={() => actions.getIp(input)}
          />
        </div>
        <IpAddressCard
          ip={store.content.ip}
          city={store.content.location.city}
          region={store.content.location.region}
          postalCode={store.content.location.postalCode}
          timezone={store.content.location.timezone}
          isp={store.content.isp}
        />
        <LeafMap />
      </div>
    </>
  );
};
