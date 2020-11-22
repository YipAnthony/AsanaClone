import Sidebar from './Sidebar';
import { shallow, mount } from 'enzyme'

import PropTypes from 'prop-types'

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

    it ("selects Home button on initial render", () => {
        expect(wrapper.find('.homeSelected').at(0).is('span')).toEqual(true);
    })

    it ("highlights My Tasks when selected", () => {
        wrapper.find('.sidebarMyTasksButton').at(0).simulate('click')
        expect(wrapper.find(".myTasksSelected").at(0).hasClass('sidebarSelected')).toEqual(true)
    })

    it ("expands/closes sidebar when clicking toggle icon", () => {
        wrapper.find('.sidebarToggleIcon').at(0).simulate('click')
        expect(wrapper.find('.sidebar').children().length).toBe(1)
    })
})