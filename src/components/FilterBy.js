import React, { PureComponent } from 'react'
import { categories } from '../utils/categories';
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'


const style = {
  height: '100%',
  padding: `1px 1px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin: `2px 0`,
}

class FilterBy extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      highLight: 'All'
    }
  }

  componentDidUpdate(prevProps) {
    this.props.handleFilter(this.state.highLight)
  }

  handleHighLight = (category) => {
    this.setState({
      highLight: category
    })
  }


  render() {
    return (
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <div style={style}>
              <ToggleButtonGroup value={this.state.highLight}>
                {categories.map((category, i) => (
                  <ToggleButton value={category} key={i} onClick={() => this.handleHighLight(category)}>
                    {category}
                  </ToggleButton>
                  // <button>{category}</button>
                  ))}
              </ToggleButtonGroup>
            </div>
          </Grid>
        </Grid>
    )
  }
}

export default FilterBy