import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import Album from "./HomePage";
import { DrawerComp } from "./Drawer";

const Navbar = () => {
  const [value,setValue]=useState(0)
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down("md"))
  
  return (
    <div>
      <AppBar sx={{background:"#1976d2"}}>
        <Toolbar>
         <ShoppingCartIcon/>
         {
          isMatch?(
            <>
            <DrawerComp/>
            </>
          ):<>
          <Tabs textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
          <Tab label="Home"/>
          <Tab label="Products"/>
          <Tab label="Contact us"/>
          <Tab label="About us"/>
         </Tabs>
         <Button sx={{marginLeft:"auto",color:"white" ,backgroundColor:"#1976d20a"}} variant="contained">Login</Button>
         <Button sx={{marginLeft:"10px"}} variant="contained">Signup</Button>
          </>
         }
         
         
        </Toolbar>
        
      </AppBar>
     
    </div>
  );
};

export default Navbar;
