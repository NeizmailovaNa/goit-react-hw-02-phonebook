import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.css'

class ContactList extends React.Component {
  render() {
    return (
      <>
        <div>
          {this.props.filteredContacts.map(contact => {
            return (
              <ul key={contact.id}>
                <li>
                  {contact.name}: {contact.number}
                </li>
                <button
                  type="button"
                  onClick={() => this.props.deleteItem(contact.id)}
                >
                  Delete
                </button>
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}

ContactList.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;