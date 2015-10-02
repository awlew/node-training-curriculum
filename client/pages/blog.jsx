import React from 'react';
import * as ReactBS from 'react-bootstrap';


const BlogPage = React.createClass({
  render() {
    return (
      <div>
        <h1 className='Title' style={{textAlign: 'center'}}>
          Blog
        </h1>
        <h4>
          September 25, 2015
        </h4>
        <h6>
          The largest issues had to do with me forgetting to import "react-bootstrap" on components (Grid, image, etc).
          I failed to get the grid to work with columns, but the rows worked without issues.
          On the skills page I could not figure out how to get the hrefed list item to be within the other bullet pointed list items withuot breaking format.
        </h6>
      </div>
    );
  },
});


export default BlogPage;
