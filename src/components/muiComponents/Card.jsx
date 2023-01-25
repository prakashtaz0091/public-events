import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import { useMediaQuery } from 'react-responsive'

import Menu from "./Menu"



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ event, handleModalOpen }) {
  const [expanded, setExpanded] = React.useState(false);

  const isSmall = useMediaQuery({ query: '(max-width: 390px)' })



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card  sx={{ width: isSmall ? 285 : 345, backgroundColor: "rgba(0, 255, 255, 0.329)", backdropFilter: "blur(10px)" }} >


      <CardContent>
        <Typography variant="h5" color="white">
          {event.title}

        </Typography>
        <hr />
        <Typography variant="h6" color="white">
          {event.district} , {event.municipality} <br /> {event.localAddress}

        </Typography>

        <Typography variant="p" color="white">
          {event.date} &nbsp;|&nbsp;{event.time}


        </Typography>
      </CardContent>
      <CardActions disableSpacing
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }} >

        <div style={{
          display: "flex", alignItems: "center"
        }}>
          <a href={event.exactLocation} style={{ color: "white" }} >
            <PlaceIcon />
          </a>
          <Menu exactLocation={event.exactLocation} />
        </div>
        <strong
          style={{
            backgroundColor: event.missed ? "red" : "greenyellow",
            margin: "5px",
            borderRadius: "5px",
            padding: "5px"
          }}>
          {event.missed ? "Expired" : "Let's Go"}
        </strong>

      </CardActions>

    </Card>
  );
}