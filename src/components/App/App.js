import React, { useState } from 'react'
import FormInput from '../Form/FormInput';

import '../../css/App.css';


function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password:"",
    confirmPassword:""
  });

  const inputs = [{
    id:1,
    name: "username",
    type: "text",
    placeholder:"Username",
    label: "Username"
  },
  {
    id:2,
    name: "email",
    type: "text",
    placeholder:"Email",
    label: "email"
  },
  {
    id:3,
    name: "birthday",
    type: "text",
    placeholder:"Birthday",
    label: "Birthday"
  },
{
    id:4,
    name: "password",
    type: "password",
    placeholder:"Password",
    label: "Password"
  },
  {
    id:5,
    name: "confirmPassword",
    type: "password",
    placeholder:"Confirm Password",
    label: "Confirm Password"
  }]


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }

  console.log(values);
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          {...input} 
          value={values[input.name]} 
          onChange={onChange}
          />
        ))}

      <button>Submit</button>
      </form>
    </div>
  )
}

export default App

