import { useState, useEffect } from "react";
import axios from "axios";

function SearchActor(filmId) {
  const [apiActor, setApiActor] = useState([]);
  useEffect(() => {
    async function makeRequest() {
      try {
          const response = await axios.get(
            `https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}/cast`
          );
          setApiActor(response.data);
        }
        catch(error) {
                console.error(error);
        }
    }
    makeRequest();
  }, [filmId]);
  return apiActor;
}
export default SearchActor;