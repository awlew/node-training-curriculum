import React from 'react';
import { RouteHandler, Link } from 'react-router';
import * as ReactBS from 'react-bootstrap';

import 'client/assets/sass/app.scss';


const ContainerLayout = React.createClass({
  render() {
    return (
      <div className='container'>
        <Link to={`/`}><ReactBS.Button bsStyle="primary" bsSize="large" active>Home</ReactBS.Button></Link>
        <Link to={`blog`}><ReactBS.Button bsStyle="primary" bsSize="large" active>Blog</ReactBS.Button></Link>
        <Link to={`skills`}><ReactBS.Button bsStyle="primary" bsSize="large" active>Skills</ReactBS.Button></Link>
        <Link to={`reactskills`}><ReactBS.Button bsStyle="primary" bsSize="large" active>React Skills</ReactBS.Button></Link>
        <Link to={`contact`}><ReactBS.Button bsStyle="primary" bsSize="large" active>Contact</ReactBS.Button></Link>
        <Link to={`topsecret`}><ReactBS.Button bsStyle="primary" bsSize="large" active>TOP SECRET</ReactBS.Button></Link>

    <RouteHandler {...this.props} />
      </div>
    );
  },
});

/*
*/


export default ContainerLayout;
