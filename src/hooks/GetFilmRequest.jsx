import { useState, useEffect } from "react";
import axios from "axios";

function GetFilmRequest(filmId) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function makeRequest() {
      try {
          const response = await axios.get(
            `https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}`
          );
          setApiData(response.data);
        }
        catch(error) {
                console.error(error);
        }
    }
    makeRequest();
  }, [filmId]);
  return apiData;
}
export default GetFilmRequest;
