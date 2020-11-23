import React from 'react'
import './Homepage.css'

import Typography from '@material-ui/core/Typography'


export default function Homepage({ toggleSidebar }) {
    return (
        <div>
            <div className={toggleSidebar ? "homepageNavbar": "homepageNavbar sidebarClosed"}>
                <Typography variant="h5">Home</Typography>
            </div>

            <div className="homepageContentContainer">

            </div>
        </div>
    )
}
