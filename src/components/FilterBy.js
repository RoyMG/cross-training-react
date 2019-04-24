import React, { PureComponent } from 'react'
import { categories } from '../utils/categories';
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'



class FilterBy extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      highLight: 'All'
    }
  }

  componentDidUpdate() {
    this.props.handleFilter(this.state.highLight)
  }

  handleHighLight = (category) => {
    this.setState({
      highLight: category
    })
  }


  render() {
    return (
      <Grid container className='btns-container'>
        <ToggleButtonGroup value={this.state.highLight} >
          {categories.map((category, i) => (
            <ToggleButton value={category} key={i} onClick={() => this.handleHighLight(category)} className='category-button'>
              {category}
            </ToggleButton>
            ))}
        </ToggleButtonGroup>
      </Grid>
    )
  }
}

export default FilterBy