import { useState, useEffect, useRef } from "react";
import useRequest from "../hooks/UseRequest";
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard/SingleCard";
import { DEFAULT_IMAGE } from "../constants/ImgConstant";

function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [search, setSearch] = useState("");
  const apiData = useRequest(search);
  const searchRef = useRef("");
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleCardClick = (id) => {
    setSelectedFilm(id);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handelSearch}
        ref={searchRef}
      />

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
