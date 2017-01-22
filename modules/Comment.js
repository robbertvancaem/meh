import React from 'react';
import {Form, TextInput} from 'react-easy-form';
import './Comment.css';

class Comment extends React.Component {

  render() {
    return (
      <div className="Comment">
        <Form onSubmit={(data) => console.log(data)}>

          <TextInput name="author" placeholder="Your name" required/>
          <TextInput  name="comment" placeholder="Your comment" required />

          <button type="submit">Comment</button>
        </Form>
      </div>
    );
  }
}

export default Comment;
