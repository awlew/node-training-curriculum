import React from 'react';


const BlogPage = React.createClass({
  render() {
    return (
      <div>
        <h1 className='Title' style={{textAlign : 'center'}}>
          Blog
        </h1>
        <h4>
          September 25, 2015
        </h4>
        <h6>
          The largest issues had to do with me forgetting to import "react-bootstrap" on components
          (Grid, image, etc). I failed to get the grid to work with columns, but the rows worked
          without issues. On the skills page I could not figure out how to get the hrefed list
          item to be within the other bullet pointed list items withuot breaking format.
        </h6>

        <h4>
          October 12, 2015
        </h4>
        <h6>
          The deploy process involved the use of Heroku which hosts applications. This was done
          through the terminal by using "heroku login" and "heroku create", which runs
          authentication and creates a newly hosted application respectively. There was another file
          "Procfile", which contains the command "node index.js webpack" that was then added to the
          root, which tells heroku to run node through index.js and its webpack. This was all then
          pushed to Heroku via "git push Heroku [branchname]: master", and the link was acquired
          through "heroku open". I had no issues except for a package.json file that had merge
          conflicts, which were resolved later.
        </h6>
      </div>
    );
  },
});


export default BlogPage;
