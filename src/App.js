
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './containers/About';
import Home from './containers/Home';
import Careers from './containers/Careers';
import ContactUs from './containers/ContactUs';
import Investors from './containers/Investors';
import Studio from './containers/Studio';

class App extends Component {

    render() {

		return (
            <div>
                {/* <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={ContactUs}/>
                    <Route path='/careers' component={Careers}/>
                    <Route path='/investors' component={Investors}/>
                    <Route path='/studio' component={Studio}/>
                </Switch>  */}


                    {/* <Route exact path='/' render={() => (
                        <h3>Home</h3>
                        )}
                    /> */}
                    <Route path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={ContactUs}/>
                    <Route path='/careers' component={Careers}/>
                    <Route path='/investors/:investor' component={Investors}/>
                    <Route path='/studio' component={Studio}/>
            </div>
		);
    }
}

export default App;
