import React from 'react';
import * as ReactBS from 'react-bootstrap';

const SkillsPage = React.createClass({
  render() {
    return (
      <div>
        <h2 style={{textAlign : 'center'}}> Lodash Skills </h2>
        <h3 style={{textAlign : 'left'}} className='hello-world'>
          lodash Functional Library
        </h3>
        <p><h6>The lodash library is used to manipulate or search through a collection;
          collection of characters(string) or a collection of data (array/objects/array of objects).
          lodash therefore increases the efficiency and trims the code density, which makes
          debugging and verification safer and more effective.</h6></p>

        <ReactBS.Panel header={<h4>_.find()</h4>}>
        <h6>This function searches an array, object, or string for a given object, string, or
          character, if it is found it returns the object that is found. Thus, on the top secret
          page, this allows me to look through my collection of tools and verify if a tool already
          exists in the array of objects.</h6>
        </ReactBS.Panel>

        <ReactBS.Panel header={<h4>_.map()</h4>}>
        <h6>This function takes a given key, and based on what type of data type it is,
          it will iterrate through the collection similar to a standardized for each loop
          iterration, but map differs from lodashes _.foreach because it gives an output.
          This is important because it allows us to create dynamic renders once we have iterrated
          through the entire collection. In my case, I used it to create dynamic React List Group
          Items based on a search, and also in general while listing through the Armory. </h6>
        </ReactBS.Panel>

      </div>
    );
  },
});


export default SkillsPage;
