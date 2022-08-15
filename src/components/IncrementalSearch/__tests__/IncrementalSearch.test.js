import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { IncrementalSearch } from '../IncrementalSearch';

describe('IncrementalSearch', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <IncrementalSearch />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
