import get from 'lodash/get';
import omit from 'lodash/omit';

/**
 * This helper is used to format the data and will return the updated data
 *
 * @param {Object} data - data as a param
 * @returns {Object} - updated Data
 */
export const formattedDataHelper = (data) => {
  return data.map(item => {
    Object.assign(item, get(item, 'address.geo', ''));
    return omit(item, 'address.geo');
  });
};
