import React from 'react';
import { Route } from 'react-router';

// Layouts
import ContainerLayout from 'client/layouts/container';

// Pages
import Home from 'client/pages/home';
import Blog from 'client/pages/blog';
import ContactInfo from 'client/pages/contact';
import Skills from 'client/pages/skills';
import TopSecret from 'client/pages/topsecret';
import ReactSkills from 'client/pages/reactskills'

export default (
  <Route handler={ContainerLayout}>
    <Route name='home' path='/' handler={Home} />
    <Route name='blog' path='/blog' handler={Blog} />
    <Route name='contact' path='/contact' handler={ContactInfo} />
    <Route name='skills' path='/skills' handler={Skills} />
    <Route name='topsecret' path='/topsecret' handler={TopSecret} />
    <Route name='reactskills' path='/reactskills' handler={ReactSkills} />
  </Route>
);
