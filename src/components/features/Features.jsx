import React from 'react'
import json from '../../content/features.json'
import Feature from './Feature'
const Features = () => {
  return (
    <div>
      {
        json.map((data) => (
          <Feature
          key={data.id}
          title={data.title}
          {...data}
          />
        ))
      }
    </div>
  )
}

export default Features