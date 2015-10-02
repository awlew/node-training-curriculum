import React from 'react';
import * as ReactBS from 'react-bootstrap';

const HomePage = React.createClass({

  getInitialState() {
   return {
     isHero: false
   };
 },

 handleClick: function(event) {
     this.setState({isHero: !this.state.isHero});
   },

  render() {
    let isHero = this.state.isHero;
    var heroorname = this.state.isHero ? "Slam Fu" : "Adam Wayne Lew";
    var adamtitle = this.state.isHero ? '"The Obsidian Meteor"' : '"Software Developer"';
    var adampiclbl = this.state.isHero ? "http://www.cropmyimage.net/images/162f5cdb-fc92-4723-bb18-87a1d34e543b/dragoon__final_fantasy_xiv__by_fredjully-d656b31.jpg" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/093/2fd/20b6703.jpg";
    return (

      <div>

        <h1 style={{textAlign: 'center'}}>Home</h1>
        <ReactBS.Grid>
        <ReactBS.Row className='row1'>
          <ReactBS.Col xs={6} md={3}><img
          src={adampiclbl} width='200' height='200' />

          </ReactBS.Col>
    <ReactBS.Col xs={6} md={3} xsoffset={100}><h2> <p style={{textAlign: 'center'}}>{heroorname}</p> <p style={{textAlign: 'center'}}>{adamtitle}</p></h2></ReactBS.Col>
          </ReactBS.Row>

          <ReactBS.Row className='Row2'>
            <h4>Top 6 Skills</h4>
            <ReactBS.ListGroup>
              <ReactBS.ListGroupItem>Service and Object Oriented Programming(CSS, JS, C/C++, Java)</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Web Forms and Applications development</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Embedded Systems Programming</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Hardware Synthesis</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Assembly Level Programming (MIPS and 64000 ARCH)</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Tutoring (Computer Engineering/Science and Mathematics)</ReactBS.ListGroupItem>
              </ReactBS.ListGroup>
          </ReactBS.Row>
          <ReactBS.Row className='Row3'>
            <h4>Dream Jobs</h4>
            <ReactBS.ListGroup>
            <ReactBS.ListGroupItem>Riot Games / Overkill Software Web/Game Developer </ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Kawai Electronic Instrument (Embedded Board) Engineer/Developer</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem>Roland Synthesizer (Embedded Board) Engineer/Developer</ReactBS.ListGroupItem>
            </ReactBS.ListGroup>
          </ReactBS.Row>

            <ReactBS.Row className='Row4'>
              <h4>Reason to Learn Development of Software</h4>
              <ReactBS.ListGroup>
              <ReactBS.ListGroupItem>Be as swift as a coursing river.</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Create a force of a great typhoon.</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>Have the strength of a raging fire.</ReactBS.ListGroupItem>
              <ReactBS.ListGroupItem>I am mysterious as the dark side of the moon.</ReactBS.ListGroupItem>
              </ReactBS.ListGroup>
          </ReactBS.Row>
          <ReactBS.Row>
            <ReactBS.Button bsStyle="primary" bsSize="large" active onClick={this.handleClick}>{this.state.isHero ? "Day Job" : "Night Job"}</ReactBS.Button>
          </ReactBS.Row>
        </ReactBS.Grid>

      </div>
    );
  },
});


export default HomePage;
