import React, { useState } from "react";
import AddContacts from "./Components/AddContacts/AddContacts";
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  function handleNewContact(newContact) {
    let newArray = [...contacts];
    newArray.push(newContact);
    setContacts(newArray);
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  return (
    <div>
      <AddContacts handleNewContact={handleNewContact} />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
