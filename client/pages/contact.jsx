import React from 'react';
import * as ReactBS from 'react-bootstrap';

const ContactPage = React.createClass({

  getInitialState: function() {
      return {firstnameval: '' , lastnameval: '', emailval: '', phoneval: '', option: true,
        submitlbl: 'Fill out the form above, and I will contact you shortly.'
      };
    },
    handleChange: function(key, event) {
      this.setState({[key]: event.currentTarget.value});
    },
    handleOption: function(key, event) {
      this.setState({[key]: event.target.value});
      if(event.target.value == "Email")
      {
        this.setState({option: true});
      }
      else {
        this.setState({option: false});
      }
    },

    handleClick: function(event) {
        this.setState({submitlbl: 'Thank you ' + this.state.firstnameval + ' ' + this.state.lastnameval +
          ' for submitting, I will contact you shortly at ' + (this.state.option ?  this.state.emailval : this.state.phoneval) + '.'});
      },

  render() {
    var firstnameval = this.state.firstnameval;
    var lastnameval = this.state.lastnameval;
    var emailval = this.state.emailval;
    var phoneval = this.state.phoneval;
    var submitlbl = this.state.submitlbl;
    var option = this.state.option;
    return (


      <div>
        <h2 className='Contact' style={{textAlign: 'center'}}>
          Contact Information
        </h2>
        <h4>Name: Adam Wayne Lew</h4>
        <h4>Email: adamwlew@gmail.com</h4>
        <h4>Cell: (310)-357-1091 </h4>
        <a href="https://github.com/awlew">Github Page</a>
        <h3>Contact Me</h3>
        <ReactBS.Grid>
          <ReactBS.Row className='fnamerow'>
            <ReactBS.Col xs={6} md={3}>
                <h4>Your First Name</h4>
            </ReactBS.Col>
            <ReactBS.Col xs={6} md={3}>
              <input type="text" value={firstnameval} placeholder = "Enter your first name"  onChange={this.handleChange.bind(null, 'firstnameval')} />
            </ReactBS.Col>
          </ReactBS.Row>
          <ReactBS.Row className='lnamerow'>
            <ReactBS.Col xs={6} md={3}>
                <h4>Your Last Name</h4>
            </ReactBS.Col>
            <ReactBS.Col xs={6} md={3}>
              <input type="text" value={lastnameval} placeholder = "Enter your last name"  onChange={this.handleChange.bind(null, 'lastnameval')} />
            </ReactBS.Col>
          </ReactBS.Row>
          <ReactBS.Row className='emailrow'>
            <ReactBS.Col xs={6} md={3}>
                <h4>Your Email</h4>
            </ReactBS.Col>
            <ReactBS.Col xs={6} md={3}>
              <input type="text" value={emailval} placeholder = "address@email"  onChange={this.handleChange.bind(null, 'emailval')} />
            </ReactBS.Col>
          </ReactBS.Row>
          <ReactBS.Row className='phonerow'>
            <ReactBS.Col xs={6} md={3}>
                <h4>Your Phone Number</h4>
            </ReactBS.Col>
            <ReactBS.Col xs={6} md={3}>
              <input type="text" value={phoneval} placeholder = "(XXX)-XXX-XXXX"  onChange={this.handleChange.bind(null, 'phoneval')} />
            </ReactBS.Col>
          </ReactBS.Row>

          <ReactBS.Row className='prefcon'>
            <ReactBS.Col xs={6} md={3}>
                <h4>Preferred Contact Method</h4>
            </ReactBS.Col>
            <ReactBS.Col xs={6} md={3}>
              <select value={this.state.value} onChange={this.handleOption.bind(null, this.value)}>
                <option value = "Email">Email</option>
                <option value = "Phone">Phone</option>
              </select>
            </ReactBS.Col>
          </ReactBS.Row>

        </ReactBS.Grid>

        <ReactBS.Button bsStyle="primary" bsSize="small" active onClick={this.handleClick}>Submit</ReactBS.Button>

        <h4>{submitlbl}</h4>

      </div>
    );
  },
});


export default ContactPage;
