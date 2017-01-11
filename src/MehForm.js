import React from 'react';
import {Form, TextInput} from 'react-easy-form';
import {addMeh} from './Feed';
import './MehForm.css';

class MehForm extends React.Component {

  render() {
    return (
      <div className="MehForm">
      <h2>What's your Meh of today?</h2>
        <Form onSubmit={(data) => addMeh(data)}>

          <TextInput name="author" placeholder="Your name" required/>
          <TextInput  name="title" placeholder="Title" required />

          <TextInput  name="message" placeholder="Your meh message" required />
          
          <button type="submit">Mehhh</button>
        </Form>
      </div>
    );
  }
}

export default MehForm;