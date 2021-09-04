import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import './index.css'

const Message = ({ message, showError }) => (
  <div className={showError ? 'error' : 'message'}>{message}</div>
)

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => personService.getAll()
    .then(response => {
      setPersons(response)
    }), []);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessge] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);


  const addPerson = (e) => {
    e.preventDefault();
    setShowError(false);
    const nameArray = persons.map(person => person.name);
    const indexOfName = nameArray.indexOf(newName);
    const newPerson = { name: newName, number: newNumber };
    if (indexOfName === -1) {
      personService.create(newPerson)
        .then(person => {
          setPersons(persons.concat(person));
          setShowMessge(true);
          setMessage(`Add ${newName}`);
          setTimeout(() => setShowMessge(false), 1000)
        });
    } else if (persons[indexOfName].number !== newNumber) {
      const res = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      setError(`Information of ${newName} has already been removed from server`)
      if (res) {
        const id = persons[indexOfName].id;
        personService.update(persons[indexOfName].id, newPerson)
          .then(response => { setPersons(persons.map(person => person.id === response.id ? response : person)) })
          .catch(() => {
            setShowError(true);
            setPersons(persons.filter(p => p.id !== id))
          })
      }
    } else {
      alert(`${newName} is already added to phonebook`);

    }
    setNewName('');
    setNewNumber('');

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

  const handleDelete = (id) => {
    personService.del(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id));
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {showMessage ? <Message message={message} showMessage={showError} /> : <></>}
      {showError ? <Message message={error} showError={showError} /> : <></>}
      <Filter handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personToShow={personToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App