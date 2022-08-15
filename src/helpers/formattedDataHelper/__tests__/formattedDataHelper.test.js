import { formattedDataHelper } from '../formattedDataHelper';

describe('formattedDataHelper', () => {
  it('should return updated data', () => {
    const mockData = [
      {
        id: 1,
        address: {
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
      },
    ];
    const expected = formattedDataHelper(mockData);
    const result = [
      {
        address:{},
        id: 1,
        lat:"-37.3159",
        lng:"81.1496",
      }
    ];
    expect(expected).toEqual(result);
  });
});
