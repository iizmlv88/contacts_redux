import { useSelector, useDispatch } from 'react-redux';


import './ContactItem.css';
import { deleteContact, editContact, clearStatus } from '../../redux/actions';



import { Link } from 'react-router-dom';

const ContactItem = () => {
  const contacts = useSelector((state) => state.contacts);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleStatusChange = (id, newStatus) => {
    if (newStatus === 'Unspecified') {
    dispatch(clearStatus(id));
  } else {
    dispatch(editContact(id, { status: newStatus }));
  }
  };

  const filteredContacts = searchTerm
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : contacts;
  const handleClearStatus = (id) => {
  dispatch(clearStatus(id));
};





  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h4 className="text-end text-primary m-3">Name</h4>
          </div>
          <div className="col-4">
            <h4 className="text-center text-primary m-3">Phone</h4>
          </div>
          <div className="col-4">
            <h4 className="text-primary m-3">Email</h4>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      {filteredContacts &&
        filteredContacts.map((contact) => (
          <div className="row p-4" key={contact.id}>
            <div className="col-2">
              <img
                className="rounded-circle"
                src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
                alt="avatar"
              />
            </div>
            <div className="col-10 row">
              <div className="col-3">
                <h3>{contact.name}</h3>
                {/* <p>{contact.status}</p> */}
                <div className="input-group">
                  <select
                    className="form-select form-select-sm"
                    aria-label="Status"
                    onChange={(e) =>
                      handleStatusChange(contact.id, e.target.value)
                    }
                    value={contact.status}
                  >
                    <option value="Work">Work</option>
                    <option value="Family">Family</option>
                    <option value="Private">Private</option>
                    <option value="Friends">Friends</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <p>{contact.phone}</p>
              </div>
              <div className="col-3">
                <p>{contact.email}</p>
              </div>
              <div className="col-3">
                <Link to={`/update-contact/${contact.id}`}>
              <button>edit</button>
                </Link>
              <button onClick={() => handleDeleteContact(contact.id)}>delete</button>
              <button onClick={() => handleClearStatus(contact.id)}>Clear Status</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContactItem;
