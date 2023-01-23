import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function RecipeReviewCard({event, handleModalOpen}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <Card sx={{ width: 345 }}>
     
      
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {event.title}
          
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {event.address}

          
          
        </Typography>
        <Typography variant="p" color="text.secondary">
          {event.date} &nbsp;|&nbsp;{event.time}


          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        

        <a href={event.exactLocation}>
        <PlaceIcon />

        </a>
        

        <Menu exactLocation={event.exactLocation} />
       
      </CardActions>
      
    </Card>
  );
}