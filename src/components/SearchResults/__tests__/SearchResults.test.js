import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { SearchResults } from '../SearchResults';

describe('SearchResults', () => {
  it('should render component', () => {
    const mockProps = {
      classes: {},
      filteredData: [],
    };
    const Wrapper = shallow(
      <SearchResults {...mockProps}/>,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
