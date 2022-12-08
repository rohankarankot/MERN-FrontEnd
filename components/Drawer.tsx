import React, { useState } from 'react'
import {Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText,List} from '@mui/material'
const PAGES=["Products","Services","About us","Contacts us","Login","Logout"]
import MenuIcon from '@mui/icons-material/Menu';
export const DrawerComp = () => {
    const [drawer,setDrawer]=useState(false)

  return (
    <>
    <Drawer open={drawer} onClose={()=>setDrawer(false)}>
      <List>
        
          {PAGES.map((page,index)=>(
            <ListItemButton>
            <ListItemIcon>
            
              <ListItemText  key={index}>{page}</ListItemText>
              </ListItemIcon>
        </ListItemButton>
           ))}
        
      </List>
    </Drawer>
    
    <IconButton sx={{color:"white",marginLeft:"auto"}} onClick={()=>setDrawer(!drawer)}>
        <MenuIcon/>
    </IconButton>
    </>
  )
}
