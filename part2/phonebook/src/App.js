import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(()=>axios
    .get('http://localhost:3021/persons')
    .then(response => {
      setPersons(response.data)
    }), []);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')


  const addPerson = (e) => {
    e.preventDefault();
    const nameArray = persons.map(person => person.name);
    if (nameArray.indexOf(newName) >= 0) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const personToShow = persons.filter(person =>
    person.name.indexOf(searchTerm) !== -1
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personToShow={personToShow} />
    </div>
  )
}

export default App