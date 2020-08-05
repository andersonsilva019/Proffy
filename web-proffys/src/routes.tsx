import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, TeacherForm, TeacherList } from './pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/give-classes" exact component={TeacherForm} />
        <Route path="/study" component={TeacherList} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };