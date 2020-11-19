import App from './App';
import { shallow } from 'enzyme'

describe('<App /> component', () => {
  it ('renders normally', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1)
  })
})
