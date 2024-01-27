import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Problem2 = () => {
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [usContacts, setUSContacts] = useState([]);
  const [showOnlyEven, setShowOnlyEven] = useState(false);

  useEffect(() => {
    fetchContacts();
    fetchUSContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://contact.mediusware.com/api/contacts/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      setContacts(data.results);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const fetchUSContacts = async () => {
    try {
      const response = await fetch(
        "https://contact.mediusware.com/api/country-contacts/US/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch US contacts");
      }
      const data = await response.json();
      setUSContacts(data.results);
    } catch (error) {
      console.error("Error fetching US contacts:", error);
    }
  };

  const filteredContacts = showOnlyEven
    ? contacts.filter((_, index) => index % 2 === 0)
    : contacts;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-primary"
            onClick={() => setModalAOpen(true)}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-warning"
            onClick={() => setModalBOpen(true)}
          >
            US Contacts
          </button>
        </div>
        <Modal isOpen={modalAOpen} closeModal={() => setModalAOpen(false)}>
          <h2>All Contacts</h2>
          {filteredContacts.map((contact) => (
            <div key={contact.id}>{contact.name}</div>
          ))}
        </Modal>
        <Modal isOpen={modalBOpen} closeModal={() => setModalBOpen(false)}>
          <h2>US Contacts</h2>
          {usContacts.map((contact) => (
            <div key={contact.id}>{contact.name}</div>
          ))}
        </Modal>
      </div>
      <div className="row justify-content-start mt-3">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            checked={showOnlyEven}
            onChange={() => setShowOnlyEven(!showOnlyEven)}
          />
          Only Even
        </label>
      </div>
    </div>
  );
};

export default Problem2;
