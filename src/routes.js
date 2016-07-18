import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/steps/LoginPage';
import WizardPage from './components/steps/WizardPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage}/>
        <Route path="login" component={LoginPage} />
        <Route path="step/:step" component={WizardPage} />
    </Route>
);
