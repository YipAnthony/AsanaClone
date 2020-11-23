import { shallow, mount } from 'enzyme'

import Homepage from './Homepage'

describe("<Homepage /> component", () => {

    it ("renders normally", () => {
        const wrapper = mount(<Homepage />)
        expect(wrapper.length).toBe(1)
    })
})