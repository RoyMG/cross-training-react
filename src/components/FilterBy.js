import React, { PureComponent } from 'react';
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { categories } from '../utils/categories'; // this are the unchaged/static categories we'll use for this project...

class FilterBy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // You should make a function to handle which filter is seletced

  render() {
    return (
      <Grid container className="btns-container">
        <ToggleButtonGroup>
          {/* ...and we'll dynamically render them */}
          {categories.map((category, i) => (
            <ToggleButton
              value={category}
              key={i}
              onClick={() => {}}
              className="category-button"
            >
              {category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
    );
  }
}

export default FilterBy;
