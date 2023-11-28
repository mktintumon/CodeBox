import * as React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function Notification() {
  return (
    <Card sx={{ maxWidth: 250, height: 450 , position: "fixed", top: 90, right: 20}}>
      
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <h3 style={{textAlign:"center"}}>TRENDING 🔥</h3>
        <hr />
        <ListItem alignItems="flex-start">
          
          <ListItemText
            primary="Hackathon this weekend??"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#f55e56"
                >
                 Mohit 
                </Typography>
                {" — Be ready for the super exciting competition and lots of rewards..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
          <ListItemText
            primary="Placement Drive"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#f55e56"
                >
                  All India Drive
                </Typography>
                {" — Don't forget to register yourself for the coding round and install the MS teams ..."}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          
          <ListItemText
            primary="Coding Contest-32 LIVE"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#f55e56"
                >
                  Arun Singh
                </Typography>
                {" — The blaze of coding round is scheduled this week.Gear up to boost your ratings..."}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}
