import React from 'react';
import * as ReactBS from 'react-bootstrap';

const SkillsPage = React.createClass({
  getInitialState() {
    return {
      showmodal : false,
      yoURL : '',
    };
  },

  alertClicked(hewrl) {
    this.setState({yoURL : hewrl, showmodal : true});
  },

  close() {
    this.setState({showmodal : false});
  },

  render() {
    const showmodal = this.state.showmodal;
    const yoURL = this.state.yoURL;
    return (
      <div>
        <h2 className='hello-world' style={{textAlign : 'center'}}>
          Skills
        </h2>
        <ReactBS.ListGroup>
          <ReactBS.ListGroupItem
            onClick={this.alertClicked.bind(null,
              'https://react-bootstrap.github.io/components.html')}>
            React</ReactBS.ListGroupItem>
          <ReactBS.ListGroupItem onClick={this.alertClicked.bind(null, 'https://lodash.com/')}>
            lodash</ReactBS.ListGroupItem>
          <ReactBS.ListGroupItem onClick={this.alertClicked.bind(null, 'https://www.heroku.com/')}>
            Heroku</ReactBS.ListGroupItem>

          <ReactBS.Modal show={showmodal} onHide={this.close}>
            <ReactBS.Modal.Header>
              <ReactBS.Modal.Title>ALERT</ReactBS.Modal.Title>
            </ReactBS.Modal.Header>

            <ReactBS.Modal.Body>
              'WARNING: Navigating outside of site!'
            </ReactBS.Modal.Body>

            <ReactBS.Modal.Footer>
              <ReactBS.Button onClick={this.close}>Close</ReactBS.Button>
              <ReactBS.Button bsStyle="primary" href={yoURL}>Go to page</ReactBS.Button>
            </ReactBS.Modal.Footer>
          </ReactBS.Modal>

            <ReactBS.ListGroupItem>Service and Object Oriented Programming(CSS, JS, C/C++, Java)
            </ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Web Forms and Applications development</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Embedded Systems Programming</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Hardware Synthesis</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Assembly Level Programming (MIPS and 64000 ARCH)
            </ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Tutoring (Computer Engineering/Science and Mathematics)
            </ReactBS.ListGroupItem>
          </ReactBS.ListGroup>
      </div>
    );
  },
});


export default SkillsPage;
