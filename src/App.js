import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'
import apiService from './app/apiService'

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get('https://reqres.in/api/users/3')
        const res = await apiService.post('/api/register', {
          "email": "eve.holt@reqres.in",
          "password": "pistol"
        })
        console.log(res)

      } catch (error) {
        console.log(`Error: ${error}`)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
