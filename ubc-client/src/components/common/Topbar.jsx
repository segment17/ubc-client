import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Session from "./Session";

function Topbar(props) {
  const logout = () => {
    Session.deleteUser();
    window.location = "/login";
  }

  return (
    <AppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
				<Button color="inherit" onClick={() => (window.location = "/")}>
        	<Typography variant="h6">Unlimited Boxing Championship</Typography>
				</Button>
        <div>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => Session.getUser()?.isAdmin ? logout() : window.location = "/login"}
          >
            {Session.getUser()?.isAdmin ? "Log  out" : "Log in"}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Topbar;
