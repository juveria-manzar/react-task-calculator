import React from 'react';

let DisplayRow = (props) => {
  return (
    <div>
      <input type="text" readOnly value={props.value}/>
    </div>
  )
}
export default DisplayRow;