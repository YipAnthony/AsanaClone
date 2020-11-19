import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  const [ userAssignedTeams, setUserAssignedTeams ] = useState([{name: "Team 1", tasks: []},
  {name: "Team 2", tasks: []},
  {name: "Team 3", tasks: []}])

  return (
    <div className="App">
      <Sidebar assignedTeams={userAssignedTeams} />
    </div>
  );
}

export default App;
