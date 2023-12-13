import { useState, useEffect, useRef } from "react";
import useRequest from "../hooks/UseRequest";
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard/SingleCard";
import { DEFAULT_IMAGE } from "../constants/ImgConstant";
import { setSearch } from "../store/SearchSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const apiSearch = useSelector((state) => state.search.search);
  const apiData = useRequest(apiSearch);
  const searchRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleCardClick = (id) => {
    setSelectedFilm(id);
  };

  const handelSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <Grid
        container
        pb={10}
        pt={10}
        sx={{ display: "flex", justifyContent: "center"}}
      >
        <input
          type="text"
          value={apiSearch}
          onChange={handelSearch}
          ref={searchRef}
          style={{
            color: "black",
            backgroundColor: "rgba(209,208,207,6)",
            height: "30px",
            border: "none",
          }}
        />
      </Grid>

      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {apiData.map(({ show }, index) => (
          <Grid item xs={3} key={index}>
            <SingleCard
              makeClick={handleCardClick}
              id={show.id}
              name={show.name}
              time={show.premiered}
              image={show.image ? show.image.medium : DEFAULT_IMAGE}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
