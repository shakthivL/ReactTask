import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';  
import { ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
    export default function Sidebar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" style={{textAlign:'center'}}>
                        React Task
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem key={1} disablePadding>
                <ListItemButton>
                 <NavLink to='/contact' > <ListItemText primary={"Contact"} /></NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem key={4} disablePadding>
                <ListItemButton>
                 <NavLink to='/contactList' > <ListItemText primary={"ContactList"} /></NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem key={2} disablePadding>
                <ListItemButton>
                <NavLink to='/charts' >  <ListItemText primary={"Charts and Maps"} /></NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem key={3} disablePadding>
                <ListItemButton>
                    <NavLink to='/' ><ListItemText primary={"Sidebar"} /></NavLink>
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      </Drawer>
        </Box>
    );

}