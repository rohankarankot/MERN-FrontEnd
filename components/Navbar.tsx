import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { DrawerComp } from "./Drawer";
const PAGES=["Products","Services","About us","Contacts us"]
const Navbar = () => {
  const [value,setValue]=useState(0)
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down("md"))
  
  return (
    <div>
      <AppBar sx={{background:"#6d7bab"}}>
        <Toolbar>
         <ShoppingCartIcon/>
         {
          isMatch?(
            <DrawerComp/>
          ):
          (<>
          <Tabs textColor="inherit" sx={{marginLeft:"auto"}} value={value} onChange={(e,value)=>setValue(value)} indicatorColor="primary">
           {PAGES.map((page,index)=>(
              <Tab label={page} key={index}/>
           ))}
         </Tabs>
         <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
         <Button sx={{marginLeft:"10px"}} variant="contained">Signup</Button>
          </>)
         }
         
         
        </Toolbar>
        
      </AppBar>
     
    </div>
  );
};

export default Navbar;
