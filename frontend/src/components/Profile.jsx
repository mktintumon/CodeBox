import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Profile() {
  return (
    <Card
      sx={{ maxWidth: 250, height: 410, position: "fixed", top: 90, left: 20 }}
    >
      <CardMedia
        //position="fixed"
        sx={{ height: 150 }}
        image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="profile pic"
        style={{
          borderRadius: "50%",
          width: "10rem",
          margin: "auto",
          marginTop: "0.8rem",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Profile
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textAlign: "justify" }}
        >
          As a product development intern at CyRAACS, I am working on building
          and testing web applications that provide innovative solutions for
          cybersecurity challenges.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
}
