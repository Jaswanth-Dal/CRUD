import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [Firstname, setFristName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [contactList, setcontactList] = useState([]);
  const addcontact = () => {

    Axios.post('http://localhost:3001/create', {
      Firstname: Firstname,
      Lastname: Lastname,
      Email: Email,
      Phone: Phone
    }).then(() => {
      console.log("success");
    });
  }

  const getContacts = () => {
    Axios.get('http://localhost:3001/contacts').then((response) => {
      setcontactList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="info">
        <label>FirstName:</label>
        <input type="text"
          onChange={(event) => {
            setFristName(event.target.value);
          }}></input>

        <label>LastName:</label>
        <input type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        ></input>

        <label>Email:</label>
        <input type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>

        <label>Phone:</label>
        <input type="number"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        ></input>

        <button onClick={addcontact}>Create contact</button>
      </div>
      <hr></hr>
      <button onClick={getContacts}>Contacts List</button>
      {contactList.map((val, key) => {
        return <div>{val.Firstname}{val.Lastname}{val.Email}{val.Phone}</div>
      })}
    </div>
  );
}
export default App.js;
