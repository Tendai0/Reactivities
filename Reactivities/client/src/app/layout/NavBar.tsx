import { Box, AppBar, Toolbar, Container, MenuItem, Typography } from '@mui/material'
import { Group  } from '@mui/icons-material'
import { NavLink } from 'react-router'
import MenuItemLink from './shared/components/MenuItemLink'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #2196f3 90%, #20c9f5 89%)' }}>
        <Container maxWidth="xl">
           <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <MenuItem component={NavLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit' }}>
                       <Group fontSize="large"/>
                       <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
                  </MenuItem>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <MenuItemLink to="/activities">
                    Activities
                  </MenuItemLink>      
                    <MenuItemLink  to="/createActivity" >
                    Create Activity
                  </MenuItemLink>   
                  <MenuItem >
                   User menu
                  </MenuItem>  
                </Box>
              
           </Toolbar>
        </Container>
        
      </AppBar>
    </Box>
  )
}
