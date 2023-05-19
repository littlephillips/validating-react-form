import React from 'react';
import '../../css/form.css';

function FormInput( props ) {
  const { label, onChange, id, ...inputProps} = props;



  return (
    <div className="formInput">
        <label> {label} </label>
        <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default FormInput;