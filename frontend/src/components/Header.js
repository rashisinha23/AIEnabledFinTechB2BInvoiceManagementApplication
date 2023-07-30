import React from 'react'
import { Box } from '@mui/material'
import hrc from '../utils/hrclogo (1).jpg'
import Group from '../utils/Group.png'
const Header = () => {
  return (
    <Box sx={{flexDirection:'row'}}>
      <div>

      <img src={hrc} />
      </div>
      <div style={{position:'absolute',top:'18px'}}>
      <img src={Group} style={{marginLeft:'20px'}}/>

      </div>
      <div style={{textAlign:'left',fontWeight:'500',color:'red'}}>
           Invoice List
      </div>
    </Box>
  )
}

export default Header