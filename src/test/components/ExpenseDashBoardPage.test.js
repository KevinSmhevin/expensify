import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render Expense Dashboard page correctly', () => {
    const wrapper = shallow(<expenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();

});