import { React, useState, useEffect } from 'react'
import axios from 'axios'
import List from './components/List'

const baseUrl = 'https://restcountries.eu'




const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [show,setShow]=useState({});


  useEffect(() => {
    axios.get(`${baseUrl}/rest/v2/all`)
      .then((res) => {
        // console.log('c0', res)
        setCountries(res.data);
        console.log(res.data)
        // console.log('c', res);
        setLoaded(true)
      })
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  }

  const handleShow = (e)=>{
    e.preventDefault();
    
  }

  const countryToShow=
    countries.filter(country=>country.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  // console.log(countryToShow,'a')
  return (
    <div>
      <div>find countries: <input onChange={handleChange} /> </div>
      {loaded ? <List list={countryToShow} show={show} setShow={setShow} /> : <div></div>}

    </div>
  )
}

export default App
