import React from 'react'
import './NavbarUtils.css'
import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));

export default function NavbarUtils({ userInfo, toggleSidebar }) {
    const classes = useStyles();
    const { firstName, lastName } = userInfo

    const userInitials = firstName[0] + lastName[0]

    return (
        <div className="navbarUtils">
            <TextField 
                id="outlined-basic" 
                size="small" 
                label="search"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }} 
                />
            <AddCircleIcon className="centerIcon clickable" style={{marginLeft: "10px", marginRight: "10px"}} fontSize="large"/>
            <Avatar className={classes.small + " clickable"}>{userInitials}</Avatar>
        </div>
    )
}
