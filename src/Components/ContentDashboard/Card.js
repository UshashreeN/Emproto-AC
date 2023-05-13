import "./Card.css";
import React from "react";
import { IconButton, ListItem } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';

function Card(props) {
  const classes = "cards " + props.className;
  return (
      <div className={classes}>
        <ListItem sx={{
          justifyContent: "space-around",
          padding: 0,
        }}>
          <ListItem sx={{
            flexDirection: "column",
            alignItems: "flex-start",
            padding:0
          }} >
            <div className="number">{props.number}</div>
            <div className="total">{props.total}</div>
          </ListItem>
          
            <img src={props.image} alt="reading" />
        </ListItem>
        <div className="last-update">
          <IconButton>
            <CachedIcon sx={{
              color: "black",
              fontSize: "1.25rem",
            }} />
          </IconButton>
          Last Update
        </div>
      </div>
  );
}

export default Card;

