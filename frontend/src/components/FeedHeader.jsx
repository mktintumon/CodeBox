import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FeedHeader() {
  //const [toggle , setToggle] = useState(false);
  const navigateTo = useNavigate()
  return (
    <div
      style={{
        border: "1px solid gray",
        height: "3.5rem",
        width: "30rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin:"auto",
        marginTop:"0.5rem",
        alignItems: "center",
      }}
    >
        
      <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" />
      <h3 style={{marginLeft:"-4rem"}}>Start Your Post...</h3>
      <Stack direction="row" spacing={3}>
        <Button variant="contained" style={{backgroundColor:"black" }} onClick={()=>navigateTo("/create")}>
          Create
        </Button>

        {/* <Button variant="outlined" color="success">
          Upload
        </Button> */}
      </Stack>

      
    </div>
  );
}

export default FeedHeader;
