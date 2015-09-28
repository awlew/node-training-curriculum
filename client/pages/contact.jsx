import React from 'react';
import * as ReactBS from 'react-bootstrap';

const ContactPage = React.createClass({
  render() {
    return (
      <div>
        <h2 className='hello-world'>
          ContactPage
        </h2>
        <h4>Name: Adam Wayne Lew</h4>
        <h4>Email: adamwlew@gmail.com</h4>
        <h4>Cell: (310)-357-1091 </h4>
        <a href="https://github.com/awlew">Github Page</a>
      </div>
    );
  },
});


export default ContactPage;
