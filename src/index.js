import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import About from './components/about';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


const routing = (
    <BrowserRouter>
      
        <CookiesProvider>
            <Switch>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/products" component={App} />
                    <Route exact path="/About" component={About} />
                </div>
            </Switch> 
        </CookiesProvider>
       
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
