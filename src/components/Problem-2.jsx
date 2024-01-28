import React, { useState } from "react";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);
  const [showOnlyEven, setShowOnlyEven] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

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

  const handleShowAllContacts = () => {
    fetchContacts();
  };

  const handleShowUSContacts = () => {
    fetchContacts();
  };
  const usContact = contacts.filter(
    (contact) => contact.country.name === "United States"
  );
  const filteredContacts = showOnlyEven
    ? contacts.filter((_, index) => index % 2 !== 0)
    : contacts;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="row justify-content-center mt-5">
          {/* Button to trigger modal */}
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={() => `${handleShowAllContacts()} ${setModalOpen1(true)} `}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Show All Contacts
          </button>

          {/* Modal */}
          {modalOpen1 && (
            <div
              className="modal fade show px-2"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content px-3">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      All Contacts
                    </h5>
                    <button
                      type="button"
                      className="close"
                      onClick={() => setModalOpen1(false)}
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {filteredContacts.map((contact) => (
                      <div key={contact.id}>
                        <h4>{contact.id}</h4>
                        <h4>{contact.country.name}</h4>
                        <h5>{contact.phone}</h5>
                        <p>{contact.next}</p>
                      </div>
                    ))}
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
                  <div className="modal-footer">
                    <button
                      className="btn btn-lg btn-warning"
                      onClick={() =>
                        `${handleShowUSContacts()} ? ${setModalOpen2(true)} `
                      }
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Show US Contacts
                    </button>

                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      onClick={() =>
                        `${handleShowAllContacts()} ${setModalOpen1(true)} `
                      }
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Show All Contacts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* End of modal */}
        </div>
        <div className="row justify-content-center mt-5">
          {/* Button to trigger modal */}

          <button
            className="btn btn-lg btn-warning"
            onClick={() => `${handleShowUSContacts()} ${setModalOpen2(true)} `}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Show US Contacts
          </button>
          {/* Modal */}
          {modalOpen2 && (
            <div
              className="modal fade show "
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content px-3">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      US Contacts
                    </h5>
                    <button
                      type="button"
                      className="close"
                      onClick={() => setModalOpen2(false)}
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div>
                    {usContact.map((contact) => (
                      <div key={contact.id}>
                        <h5>{contact.id}</h5>
                        <h5>{contact.country.name}</h5>
                        <h5>{contact.phone}</h5>
                      </div>
                    ))}
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-lg btn-warning"
                      onClick={() =>
                        `${handleShowUSContacts()} ${setModalOpen2(true)} `
                      }
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Show US Contacts
                    </button>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      onClick={() =>
                        `${handleShowAllContacts()} ${setModalOpen1(true)} `
                      }
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Show All Contacts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* End of modal */}
        </div>
      </div>
    </div>
  );
};

export default Problem2;
