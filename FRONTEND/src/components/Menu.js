import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TableRowsIcon from '@mui/icons-material/TableRows';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const Menu = () => {
  const location = useLocation();
  const path = location.pathname
  
  return (
    <List>
        <ListItem component={Link} to='/' button key={"1"} selected={'/' === path}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem component={Link} to='/about' button key={"2"} selected={'/about' === path}>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>

        <ListItem component={Link} to='/contact' button key={"3"} selected={'/contact' === path}>
          <ListItemIcon>
            <TableRowsIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>


      </List>
  )
}
