import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "@mui/material";

export default function Navbar() {
  const userName = localStorage.getItem("username");
  const key = "userId";
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(key) !== null
  );
  const navigateTo = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    setIsLoggedIn(false);

    navigateTo("/login");
  };

  return (
    <Box sx={{ flexGrow: 4 }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "black" }}>
          <Avatar src="/codebox.png" alt="logo" />
          &nbsp;&nbsp;
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => navigateTo("/")}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            CodeBOX
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                fontSize: "1.2rem",
                marginRight: "2rem",
              }}
            >
              <AccountCircleIcon />
              <p>{userName?.substring(1, userName.length - 1)}</p>
            </div>
          )}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            ></IconButton>

            {isLoggedIn ? (
              <Button
                size="small"
                style={{
                  backgroundColor: "whitesmoke",
                  color: "black",
                  width: "6rem",
                  height: "2.4rem",
                  fontWeight: "700",
                  marginTop: "0.2rem",
                  marginRight: "2.5rem",
                }}
                onClick={handleSignOut}
              >
                SIGN OUT
              </Button>
            ) : (
              <Button
                size="small"
                style={{
                  backgroundColor: "whitesmoke",
                  color: "black",
                  width: "5rem",
                  height: "2.4rem",
                  fontWeight: "700",
                  marginTop: "0.2rem",
                  marginRight: "2.5rem",
                }}
                onClick={() => navigateTo(isLoggedIn ? "/home" : "/login")}
              >
                LOGIN
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
