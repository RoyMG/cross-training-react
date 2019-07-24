import React, { PureComponent } from 'react';
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { categories } from '../utils/categories';

class FilterBy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      highLight: 'All',
    };
  }

  componentDidUpdate() {
    const { handleFilter } = this.props;
    const { highLight } = this.state;
    handleFilter(highLight);
  }

  handleHighLight = category => {
    this.setState({
      highLight: category,
    });
  };

  render() {
    const { highLight } = this.state;
    return (
      <Grid container className="btns-container">
        <ToggleButtonGroup value={highLight}>
          {categories.map((category, i) => (
            <ToggleButton
              value={category}
              key={i}
              onClick={() => this.handleHighLight(category)}
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
