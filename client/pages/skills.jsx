import React from 'react';
import * as ReactBS from 'react-bootstrap';
import { RouteHandler, Link } from 'react-router';

function alertClicked() {
  alert('WARNING: Navigating outside of site!');
}

const SkillsPage = React.createClass({
  render() {
    return (
      <div>
        <h2 className='hello-world' style={{textAlign: 'center'}}>
          Skills
        </h2>
        <ReactBS.ListGroup>
          <ReactBS.ListGroupItem onClick={alertClicked} href="https://react-bootstrap.github.io/components.html#listgroup">React</ReactBS.ListGroupItem>
          <ReactBS.ListGroupItem onClick={alertClicked} href="https://lodash.com/">lodash</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Service and Object Oriented Programming(CSS, JS, C/C++, Java)</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Web Forms and Applications development</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Embedded Systems Programming</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Hardware Synthesis</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Assembly Level Programming (MIPS and 64000 ARCH)</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Tutoring (Computer Engineering/Science and Mathematics)</ReactBS.ListGroupItem>
          </ReactBS.ListGroup>
      </div>
    );
  },
});


export default SkillsPage;
