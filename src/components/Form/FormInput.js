import React from 'react';
import '../../css/form.css';

function FormInput( props ) {
  return (
    <div className="formInput">
        {/* <label> Username </label> */}
        <input name={props.name} placeholder= "Username" />
    </div>
  )
}

export default FormInput;