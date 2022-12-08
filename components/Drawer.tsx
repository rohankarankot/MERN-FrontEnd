import React, { useState } from 'react'
import {IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
export const DrawerComp = () => {
  return (
    <>
    <IconButton sx={{color:"black",marginLeft:"auto"}} >
        <MenuIcon/>
    </IconButton>
    </>
  )
}
