/**
 * This function is used to filter the entered the value based on the users and
 * filter
 *
 * @param {Array} users - all users
 * @param {Array} filter - filter object used to filter the values
 *
 */
export const getFilteredDataHelper = (users, filter) =>
  users.filter(item => {
  for (let key in filter) {
    if (item[key] === undefined) {
      return false;
    }

    if (
      !item[key]
      .toString()
      .toLowerCase()
      .includes(filter[key].toLowerCase())
    )
    {
      return false;
    }
  }

  return true;
});
