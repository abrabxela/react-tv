import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { DEFAULT_IMAGE } from '../../constants/ImgConstant';
import { useParams } from 'react-router-dom';
import GetFilmRequest from '../../hooks/GetFilmRequest';

export default function ActorItem() {
    const { filmId } = useParams();
    const { image } = GetFilmRequest(filmId);
    console.log(GetFilmRequest(filmId));

  return (
    <>
    <Typography variant="h4" sx={{marginTop:"50px"}} component="div">Starring</Typography>
    
    <Card sx={{ maxWidth: 345, marginTop:"30px" }}>
      <CardActionArea sx={{display:"flex"}}>
        <CardMedia
          component="img"
          height="80"
         image = {image ? image.medium : DEFAULT_IMAGE}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}