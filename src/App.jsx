import React, { useState} from 'react'
import Form from './templates/Form'
import './App.css'
import Main from './templates/Main'

const App = () => {
  const [success, setSuccess] = useState(false)

  return (
    <div className='App'>
        {success ? 
          (<Main/>) 
        : 
          (<Form
            setSuccess={setSuccess}
          />)
        }
    </div>
  )
}

export default App