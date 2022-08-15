import { getFilteredDataHelper } from '../getFilteredDataHelper';
import { DATA } from '../../../constants/DATA';

describe('getFilteredDataHelper', () => {
  it('should filter the data based on filter', () => {
    const mockFilter = {
      name: 'll'
    };
    const expected = getFilteredDataHelper(DATA, mockFilter);
    const result = [
      {
        address: {
          city: "Wisokyburgh",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618"
          },
          street: "Victor Plains",
          suite: "Suite 879",
          zipcode: "90566-7771"
        },
        company: {
          bs: "synergize scalable supply-chains",
          catchPhrase: "Proactive didactic contingency",
          name: "Deckow-Crist"
        },
        email: "Shanna@melissa.tv",
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        username: "Antonette",
        website: "anastasia.net"
      }
    ];
    expect(expected).toEqual(result);
  });
});
