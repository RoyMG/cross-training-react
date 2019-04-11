import React from 'react'
import { categories } from '../utils/categories';


const FilterBy = () => {
  return (
    <div>
      <p>
        {categories.map((category, i) => (
          <span key={i}>
            <button>{category}</button>
          </span>
        ))}
      </p>
    </div>
  )
}

export default FilterBy