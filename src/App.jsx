import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [apiData, setApiData] = useState();

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchApiData() {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const API_URL = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY;

      const date = (new Date()).toDateString();
      const localKey = `API_DATA-${date}`;
      if (localStorage.getItem(localKey)) {
        const data = JSON.parse(localStorage.getItem(localKey));
        setApiData(data);
        console.log('Fetched data from cache today.\n',data);
        return;
      }

      localStorage.clear();

      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        localStorage.setItem(localKey,JSON.stringify(data));
        setApiData(data);
        console.log("Fetched data from online today.");
      } catch (error) {
        console.log(error);
      }
    }
    fetchApiData();
  }, []);

  return (
    <>
      {apiData ? (
        <Main apiData={apiData} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <Sidebar apiData={apiData} handleToggleModal={handleToggleModal} />
      )}
      {apiData && (
        <Footer apiData={apiData} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}
