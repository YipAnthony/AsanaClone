import './Sidebar.css'

import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import CheckIcon from '@material-ui/icons/CheckCircle'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import ToggleIcon from '@material-ui/icons/MenuOpen';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#cbd4db'
      },
      secondary: {
          main: '#949da5'
      }
    }
  });

const sidebarMinimizedStyle = {
    width: "50px",

}

const sidebarButtonStyle = {
    // textAlign: 'left'
}

export default function Sidebar(props) {

    const { assignedTeams } = props

    const [ sidebarSelection, setSidebarSelection ] = useState("Home")
    const [ toggleSidebar, setToggleSidebar ] = useState(true)
    const [ toggleTeams, setToggleTeams ] = useState(true)

    const handleClick = (e) => {
        const selection = e.target.innerHTML
        console.log(selection)
        setSidebarSelection(selection)
    }

    const handleToggleIconClick = () => {
        setToggleSidebar(prev => !prev)
    }

    return (
        <MuiThemeProvider theme={theme}>
        <div className={`sidebar ${toggleSidebar ? null: "sidebarMinimized"}`}>
            <div className="sidebarRow d-flex">
                {toggleSidebar ? 
                <>
                <Typography className="sidebarLogo" variant="h5"><strong>clonasana</strong></Typography>
                <Button 
                    theme={theme}
                    className="sidebarToggleIcon sidebarButtons" 
                    color="primary" 
                    onClick={handleToggleIconClick}
                >{<ToggleIcon />}</Button>   
                </>  
                    : <Button 
                        className="sidebarToggleMinimized" 
                        theme={theme}
                        color="secondary" 
                        onClick={handleToggleIconClick}
                        >{<ViewHeadlineIcon />}</Button> 
                }
                
                
            </div>
            {toggleSidebar ? 
                <>
                    <span className={sidebarSelection === "Home" ? "sidebarSelected homeSelected sidebarSpan": "sidebarSpan"} onClick={() => setSidebarSelection("Home")} data-test="homeSelected">
                        <Button className="sidebarHomeButton sidebarButtons"  color="primary" startIcon={<HomeIcon />}>Home</Button>
                    </span>
                    <span className={sidebarSelection === "My Tasks" ? "sidebarSelected myTasksSelected sidebarSpan": "sidebarSpan"} onClick={() => setSidebarSelection("My Tasks")}>
                        <Button className="sidebarMyTasksButton sidebarButtons" onClick={() => setSidebarSelection("My Tasks")} color="primary" startIcon={<CheckIcon />}>My Tasks</Button>
                    </span>
                    <Divider light/>

                    <span className="teamsRow" onClick={() => setToggleTeams(prev => !prev)}>
                        <Typography variant="h6">Teams </Typography>
                        <ArrowDropDownIcon className="teamsIcon"/>
                    </span>
                    {toggleTeams ? 
                        <>
                            {assignedTeams.length > 0 && (
                            <> 
                                {assignedTeams.map(team => {
                                        const { name } = team
                                        return (
                                            <span key={name} className={sidebarSelection === name ? `sidebarSelected ${name}Selected sidebarSpan`: "sidebarSpan"} onClick={() => setSidebarSelection(name)} >
                                                <Button  
                                                    startIcon={<ArrowDropDownIcon />}
                                                    className="sidebarButtons"
                                                    color="primary"
                                                    onClick={() => setSidebarSelection(name)} 
                                                > 
                                                    {name} 
                                                </Button>
                                            </span>
                                        )
                                })}
                            </>
                            )}
                            <span className={sidebarSelection === "Add Team" ? "sidebarSelected sidebarSpan": "sidebarSpan"}>
                                <Button style={sidebarButtonStyle} className=" sidebarButtons" color="primary" startIcon={<AddIcon />}>Add Team</Button>
                            </span>
                        </>:null}    
                   
                    <Divider light/>
                </>:null}
           

        </div></MuiThemeProvider>
    )
}

Sidebar.prototype = {
    assignedTeams: PropTypes.array
}