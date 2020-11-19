import './Sidebar.css'

import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import CheckIcon from '@material-ui/icons/CheckCircle'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import ToggleIcon from '@material-ui/icons/MenuOpen';


export default function Sidebar(props) {

    const { assignedTeams } = props

    return (
        <div className="sidebar">
            <span className="sidebarRow d-flex">
                <Typography className="sidebarLogo" variant="subtitle1">Asana-clone</Typography>
                <Button 
                    className="sidebarToggleIcon sidebarButtons" 
                    color="primary" 
                >{<ToggleIcon />}</Button>
            </span>

            <Button className="sidebarHomeButton sidebarButtons" color="primary" startIcon={<HomeIcon />}>Home</Button>
            <Button className="sidebarMyTasksButton sidebarButtons" color="primary" startIcon={<CheckIcon />}>My Tasks</Button>
            
            <Divider light />

            <Typography variant="caption">Teams</Typography>
            
            {assignedTeams.length > 0 && (
                <> 
                    {assignedTeams.map(team => {
                            return <Button key={team['name']}> {team['name']} </Button>
                    })}
                </>
            )}
            

        </div>
    )
}

Sidebar.prototype = {
    assignedTeams: PropTypes.array
}