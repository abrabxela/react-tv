import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DEFAULT_IMAGE } from "../../constants/ImgConstant";
import { useParams } from "react-router-dom";
import SearchActor from "../../hooks/SearchActor";

export default function ActorItem() {
  const { filmId } = useParams();
  const detailsActor = SearchActor(filmId);
  console.log(detailsActor);
  return (
    <>
      <div style={{width: "100%"}}>
<Typography variant="h4" sx={{ marginTop: "50px", color:"white"}}>
        Starring
      </Typography>

      </div>
      
      
      {detailsActor.map((element, index) => {
        const { character } = { ...element };
        const { image, name } = { ...character };
  
        return (
          <Card key={index} sx={{ maxWidth: 345, marginTop: "30px", marginLeft:"50px", marginBottom:"50px" }}>
            <CardActionArea sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                height="100"
                image={image ? image.medium : DEFAULT_IMAGE}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
