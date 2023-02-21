import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.css'

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
      };
    
      inputChange = e => {
        const {name, value} = e.currentTarget
    
        this.setState ({
         [name]: value, });
      };
    
      formSubmit = e => {
        e.preventDefault();
        const newContact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
          };
    
          this.props.onSubmit(newContact);
          this.setState({ name: '', number: '' });
      };
    
      reset = () => {
        this.setState ({name: '', number: ''})
      }

    render () {
        return (
            <form onSubmit={this.formSubmit}>
                <label>
                    Name
                    <input 
                    className='input_name'
                    value={this.state.name}
                    onChange={this.inputChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>

                <label>
                    Number
                    <input
                    className='input_number'
                    value={this.state.number}
                    onChange={this.inputChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </label>

                <button 
                    className='button'
                    type='submit'>
                    Add contact
                </button>
            </form>
       )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;