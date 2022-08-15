import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 300,
    margin: '20px auto',
  },
  formLabel: {
    margin: '20px 0',
    display: 'inline-block',
  },
  textCenter: {
    textAlign: 'center',
  }
};

export const SearchResultsComponent = ({ classes, filteredData }) => (
  <div className={classes.textCenter}>
      {
        !filteredData.length &&
        <FormLabel
          className={classes.formLabel} error>
          There are no matches
        </FormLabel>
      }
    {
      filteredData.length === 1 &&
          <Card className={classes.card} key={filteredData.id}>
            <CardContent>
              <Typography component="p" >
                Id: {get(filteredData, '[0].id')}
              </Typography>
              <Typography variant="h5" component="h2">
                Name: {get(filteredData, '[0].name')}
              </Typography>
              <Typography component="p">
                Phone: {get(filteredData, '[0].phone')}
              </Typography>
              <Typography component="p">
                Latitude: {get(filteredData, '[0].lat')}
              </Typography>
            </CardContent>
          </Card>
    }
    {
      filteredData.length > 1 &&
        <FormLabel
          className={classes.formLabel}>
          {filteredData.length} Matches Found, Please Narrow Your Search Criteria
        </FormLabel>
    }
  </div>
);

SearchResultsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  filteredData: PropTypes.array,
};

SearchResultsComponent.defaultProps = {
  filteredData: [],
};

export const SearchResults = withStyles(styles)(SearchResultsComponent);
