import React, { useState, useLayoutEffect } from "react";
import Loader from "./state/Loader";
import { Constants } from '../constants';
import useScript from "./hooks/useScript";
import ChartComponent from "./components/ChartComponent";
import AppHome from "./components/AppHome";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  //app loading state and child component state
  const [child, setChild] = useState(<Loader />);
  const scriptUrl = Constants.APP_INITIALIZATION.SCRIPT_URL;
  const isScriptLoaded = useScript(scriptUrl);
  let isInstalled;

  useLayoutEffect(() => {
    if (!isScriptLoaded) return;
    const initializeApp = async () => {
      try {
        const client = await app.initialized();
        setHome(client);
        client.events.on("app.activated", () => {
          setHome(client);
        });
      } catch (error) {
        console.error("error", error);
      }
    };
    initializeApp();
  }, [isScriptLoaded]);

  window.addEventListener("message", function (event) {
    if (event.data.type === "getLocalStorage") {
      const localStorageValue = localStorage.getItem(event.data.key);
      event.source.postMessage({ type: "localStorageValue", value: localStorageValue }, event.origin);
    }
  });

  const setHome = async (client) => {
    try {
      setChild(<Loader />);
      const { location, data: instanceData = {} } = await client.instance.context();
      const modalID = instanceData?.modalID || "";
      if (
        ["chat_conversation_sidebar","conversation_user_info"].includes(
          location
        )
      ) {
        client.instance.receive(({ data }) => {
          if (data?.refreshSidebar) {
            setHome(client);
          }
        });

        client.instance.resize({height: '568px'});
        isInstalled = true;
        if(["chat_conversation_sidebar","conversation_user_info"].includes(
          location
        )){

        setChild(
          isInstalled ? (
            <AppHome client={client} isFreshchat={true}/>
          ) : (
            <ChartComponent client={client} />
          )
        );
      }
      else{
        setChild(
          isInstalled ? (
            <AppHome client={client} isFreshchat={true}/>
          ) : (
            <ChartComponent client={client} />
          )
        );
      }

      } else if(["ticket_sidebar"].includes(location)) {
        client.instance.receive(({ data }) => {
          if (data?.refreshSidebar) {
            setHome(client);
          }
        });

        client.instance.resize({height: '610px'});
        isInstalled = true;

        setChild(
          isInstalled ? (
            <AppHome client={client} />
          ) : (
            <ChartComponent client={client} />
          )
        );
      }

      if (location === 'overlay' || location === 'modal') {
        if (modalID === "viewMoreModal") {
          setChild(<DetailsPage
              client={client}
              contact={instanceData.contact}
              chartType={instanceData.chartType}
              selectedData={instanceData.selectedData}
          />)
        }
      }

    } catch (error) {
      console.error("ERROR", error);
    }
  };
  return <div>{child}</div>;
};
export default App;