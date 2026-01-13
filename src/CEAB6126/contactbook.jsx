import React, { Component } from "react";

class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: "",

      editId: null,
      editFname: "",
      editLname: "",
      editPhone: "",
    };
  }

  handlefnameChange = (e) => this.setState({ fname: e.target.value });
  handlelnameChange = (e) => this.setState({ lname: e.target.value });
  handlephoneChange = (e) => this.setState({ phone: e.target.value });

  addContact = () => {
    const { fname, lname, phone } = this.state;
    if (!fname || !lname || !phone) return;

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      visible: false,
    };

    this.setState((prev) => ({
      contacts: [newContact, ...prev.contacts],
      fname: "",
      lname: "",
      phone: "",
    }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((c) => c.id !== id),
    }));
  };

  toggleView = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.map((c) =>
        c.id === id ? { ...c, visible: !c.visible } : c
      ),
    }));
  };

  startEdit = (contact) => {
    this.setState({
      editId: contact.id,
      editFname: contact.fname,
      editLname: contact.lname,
      editPhone: contact.phone,
    });
  };

  saveUpdate = () => {
    this.setState((prev) => ({
      contacts: prev.contacts.map((c) =>
        c.id === prev.editId
          ? {
              ...c,
              fname: prev.editFname,
              lname: prev.editLname,
              phone: prev.editPhone,
            }
          : c
      ),
      editId: null,
      editFname: "",
      editLname: "",
      editPhone: "",
    }));
  };

  render() {
    const {
      contacts,
      fname,
      lname,
      phone,
      editId,
      editFname,
      editLname,
      editPhone,
    } = this.state;

    return (
      <div>
        <h1>Contact Book</h1>

        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={this.handlefnameChange}
        />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={this.handlelnameChange}
        />
        <br />

        <input
          type="text"
          placeholder="Mobile Number"
          value={phone}
          onChange={this.handlephoneChange}
        />
        <br />

        <button onClick={this.addContact}>Add Contact</button>

        <ul>
          {contacts.map((c) => (
            <li key={c.id}>
              <strong>{c.fname}</strong>{" "}
              <button onClick={() => this.toggleView(c.id)}>View</button>
              <button onClick={() => this.startEdit(c)}>Update</button>
              <button onClick={() => this.deleteContact(c.id)}>Delete</button>
              {c.visible && (
                <div>
                  {c.lname} - {c.phone}
                </div>
              )}
              {editId === c.id && (
                <div style={{ marginTop: "10px" }}>
                  <input
                    type="text"
                    value={editFname}
                    placeholder="New First Name"
                    onChange={(e) =>
                      this.setState({ editFname: e.target.value })
                    }
                  />
                  <br />

                  <input
                    type="text"
                    value={editLname}
                    placeholder="New Last Name"
                    onChange={(e) =>
                      this.setState({ editLname: e.target.value })
                    }
                  />
                  <br />

                  <input
                    type="text"
                    value={editPhone}
                    placeholder="New Phone"
                    onChange={(e) =>
                      this.setState({ editPhone: e.target.value })
                    }
                  />
                  <br />

                  <button onClick={this.saveUpdate}>Save</button>
                  <button onClick={() => this.setState({ editId: null })}>
                    Cancel
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactBook;
