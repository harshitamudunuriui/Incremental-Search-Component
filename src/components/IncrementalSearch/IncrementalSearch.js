import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import pickBy from 'lodash/pickBy';
import TextField from '@material-ui/core/TextField';
import { SearchResults } from '../SearchResults';
import { withStyles } from '@material-ui/core/styles';
import { getFilteredDataHelper } from '../../helpers/getFilteredDataHelper';
import { formattedDataHelper } from '../../helpers/formattedDataHelper';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  incrementalSearch: {
    width: 980,
    margin: '0 auto',
    border: '1px solid grey',
    padding: '20px',
    backgroundColor: 'white',
  },
  textCenter: {
    textAlign: 'center',
  }
});

/**
 * This component is used to search by using name phone latitude and Id
 *
 * @returns {*} a React Class Component
 */
class IncrementalSearchComponent extends React.Component {

  state = {
    id: '',
    phone: '',
    lat: '',
    name: '',
    data: [],
  };

  async componentDidMount() {
    const response = await this.getData();
    this.setState({
      data: formattedDataHelper(response.data),
    });
    console.log(response.data);
  }

  getData = async () => {
    try {
      return await axios.get('/data');
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = prop => (event) => {
    this.setState({
      [prop]: event.target.value,
    });
  };

  render() {
    const { id, name, lat, phone, data } = this.state;
    const { classes } = this.props;
    const filteredData = getFilteredDataHelper(
      data,
      pickBy({ name, id, phone, lat }, undefined),
    );

    return (
      <div className={classes.incrementalSearch}>
        <h2 className={classes.textCenter}>Incremental Search</h2>
        <form className={classes.container}>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Id"
            className={classes.textField}
            value={id}
            onChange={this.handleChange('id')}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Phone"
            className={classes.textField}
            value={phone}
            onChange={this.handleChange('phone')}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Latitude"
            className={classes.textField}
            value={lat}
            onChange={this.handleChange('lat')}
            margin="normal"
          />
        </form>
        <SearchResults
          filteredData={filteredData}
        />
      </div>
    );
  }
}

IncrementalSearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const IncrementalSearch =  withStyles(styles)(IncrementalSearchComponent);
