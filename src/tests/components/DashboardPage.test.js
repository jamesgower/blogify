import React from 'react';
import { shallow } from 'enzyme';
import BlogDashboardPage from '../../components/BlogDashboardPage';

test('should render BlogDashboardPage correctly', () => {
  const wrapper = shallow(<BlogDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
