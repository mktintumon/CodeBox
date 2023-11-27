import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Profile() {
  return (
    <Card sx={{ maxWidth: 250, height: 400 ,position: "fixed", top: 90, left: 20}} >
      <CardMedia
      position="fixed"
        sx={{ height: 150 }}
        image="https://images.unsplash.com/photo-1473830394358-91588751b241?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Profile
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"justify"}}>
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
