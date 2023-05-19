import { useRef } from 'react'
import FormInput from '../Form/FormInput';

import '../../css/App.css';


function App() {
  const usernameRef = useRef(); 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef)
  }


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <FormInput refer={usernameRef} placeholder="Username" />
      <FormInput placeholder="Email" />
      <FormInput placeholder="Full Name" />
      <FormInput placeholder="Role"/>
      
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App

