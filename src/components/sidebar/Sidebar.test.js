import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme'

import PropTypes from 'prop-types'

// Sidebar.propTypes = {
//   assignedTeams: PropTypes.array.isRequired
// }

describe("<Sidebar /> component", () => {
    
    const assignedTeams = [
        {name: "Team 1", tasks: []},
        {name: "Team 2", tasks: []},
        {name: "Team 3", tasks: []}
    ]

    const wrapper = mount(<Sidebar assignedTeams={assignedTeams}/>)

    it ("contains a Home and My Tasks button", () => {
        expect(wrapper.exists('.sidebarHomeButton')).toEqual(true);
        expect(wrapper.exists('.sidebarMyTasksButton')).toEqual(true);
    })

    it ("has menu toggle icon", () => {
        expect(wrapper.exists('.sidebarToggleIcon')).toEqual(true);
    })
  
    it ("renders user's assigned teams from top-level state", () => {
        expect(wrapper.text()).toContain("Team 1")
        expect(wrapper.text()).toContain("Team 2")
        expect(wrapper.text()).toContain("Team 3")
    })
})