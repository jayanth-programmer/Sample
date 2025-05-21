import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegistrationPage} />
                <Route path="/" exact component={LoginPage} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;