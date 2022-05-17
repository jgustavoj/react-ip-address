const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      content: {
        ip: "170.55.65.194",
        location: {
          country: "US",
          region: "Texas",
          city: "Houston",
          lat: 29.76328,
          lng: -95.36327,
          postalCode: "77001",
          timezone: "-05:00",
          geonameId: 4699066,
        },
        domains: [
          "device-1da1b728-cb95-49ac-8bd0-9b8047cbb3e8.remotewd.com",
          "device-54592deb-4e25-44a4-9636-810df7d0fcd1.remotewd.com",
          "device-cba49067-6bb4-434e-b109-710749363e1d.remotewd.com",
        ],
        as: {
          asn: 33132,
          name: "FIBERNET-DIRECT",
          route: "170.55.0.0/16",
          domain: "http://www.fiber.crowncastle.com",
          type: "NSP",
        },
        isp: "Fibernet Direct",
      },
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        //   // fetching data from the backend
        //   // fetch(process.env.BACKEND_URL + "/api/hello")
        //   fetch(
        //     "https://geo.ipify.org/api/v2/country?apiKey="
        //     // process.env.GEO_APIKEY
        //   )
        //     .then((resp) => resp.json())
        //     // .then((data) => console.log("data:", data))
        //     .then((data) => setStore({ content: data }))
        //     .catch((error) =>
        //       console.log("Error loading message from backend", error)
        //     );
      },
    },
  };
};

export default getState;
