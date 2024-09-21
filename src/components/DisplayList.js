import React from 'react'

function DisplayList() {
  const items = ['item1','item1','item1','item1','item1'];
  
    return (
    <div>
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default DisplayList