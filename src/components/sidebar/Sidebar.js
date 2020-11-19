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

export default function Sidebar(props) {

    const { assignedTeams } = props

    const [ sidebarSelection, setSidebarSelection ] = useState("Home")

    const handleClick = (e) => {
        const selection = e.target.innerHTML
        console.log(selection)
        setSidebarSelection(selection)
    }

    return (
        <div className="sidebar">
            <span className="sidebarRow d-flex">
                <Typography className="sidebarLogo" variant="h5"><strong>clonasana</strong></Typography>
                <Button 
                    className="sidebarToggleIcon sidebarButtons" 
                    color="primary" 
                >{<ToggleIcon />}</Button>
            </span>

            <span className={sidebarSelection === "Home" ? "sidebarSelected homeSelected": null} data-test="homeSelected">
                <Button className="sidebarHomeButton sidebarButtons" onClick={() => setSidebarSelection("Home")} color="primary" startIcon={<HomeIcon />}>Home</Button>
            </span>
            <span className={sidebarSelection === "My Tasks" ? "sidebarSelected myTasksSelected": null}>
                <Button className="sidebarMyTasksButton sidebarButtons" onClick={() => setSidebarSelection("My Tasks")} color="primary" startIcon={<CheckIcon />}>My Tasks</Button>
            </span>
            <Divider light />

            <Typography variant="caption">Teams</Typography>
            
            {assignedTeams.length > 0 && (
                <> 
                    {assignedTeams.map(team => {
                            const { name } = team
                            return (
                                <span key={name} className={sidebarSelection === name ? `sidebarSelected ${name}Selected`: null}>
                                    <Button  
                                        startIcon={<ArrowDropDownIcon />}
                                        className="sidebarButtons"
                                        onClick={() => setSidebarSelection(name)} 
                                    > 
                                        {name} 
                                    </Button>
                                </span>
                            )
                    })}
                </>
            )}
            <span className={sidebarSelection === "Add Team" ? "sidebarSelected": null}>
                <Button className=" sidebarButtons" color="primary" startIcon={<AddIcon />}>Add Team</Button>
            </span>

        </div>
    )
}

Sidebar.prototype = {
    assignedTeams: PropTypes.array
}