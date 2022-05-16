const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      content: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        // fetch(process.env.BACKEND_URL + "/api/hello")
        fetch(
          "https://geo.ipify.org/api/v2/country?apiKey="
          // process.env.GEO_APIKEY
        )
          .then((resp) => resp.json())
          // .then((data) => console.log("data:", data))
          .then((data) => setStore({ content: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
    },
  };
};

export default getState;
