import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

const Navbar = () => {
  const [value,setValue]=useState(0)
  return (
    <div>
      <AppBar sx={{background:"#6d7bab"}}>
        <Toolbar>
         <ShoppingCartIcon/>
         <Tabs textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="primary">
          <Tab label="Home"/>
          <Tab label="Products"/>
          <Tab label="Contact us"/>
          <Tab label="About us"/>
         </Tabs>
         <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
         <Button sx={{marginLeft:"10px"}} variant="contained">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
