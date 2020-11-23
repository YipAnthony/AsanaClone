import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Homepage from './components/homepage/Homepage'
import NavbarUtils from './components/navbarUtils/NavbarUtils'

function App() {

  const [ userAssignedTeams, setUserAssignedTeams ] = useState(
    [
      {name: "Team 1", tasks: []},
      {name: "Team 2", tasks: []},
      {name: "Team 3", tasks: []}
    ]
  )

  const [ userInfo, setUserInfo ] = useState(
    {
      firstName: "Anthony",
      lastName: "Yip",
    }
  )

  const [ toggleSidebar, setToggleSidebar ] = useState(true)
  const [ sidebarSelection, setSidebarSelection ] = useState("Home")

  return (
    <div className="App">
      <Sidebar 
        assignedTeams={userAssignedTeams}
        sidebarSelection={sidebarSelection}
        setSidebarSelection={setSidebarSelection}
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className={toggleSidebar ? "mainContents": "mainContents mainContentsClosed"}>
        <div className="mainNavbar">
          <div>
            {sidebarSelection === "Home" ? 
              <Homepage 
                toggleSidebar={toggleSidebar}
              /> 
              : null 
            }
          </div>
          <div className="navbarUtilsCSS">
            <NavbarUtils 
              userInfo={userInfo}
              toggleSidebar={toggleSidebar}
            />
          </div>
        </div>

        <div className="bottomContents">

        </div>
      </div>
      
    </div>
  );
}

export default App;
