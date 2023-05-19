import React from 'react'
import FormInput from '../Form/FormInput';

import '../../css/App.css';


function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  };


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <FormInput name="username" placeholder="Username" />
      <FormInput name="email" placeholder="Email" />
      <FormInput name="fullname" placeholder="Full Name" />
      <FormInput name="role" placeholder="Role"/>
      
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App

