import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage/HomePage'
import UploadPage from './containers/UploadPage/UploadPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import WatchPage from './containers/WatchPage/WatchPage';
import SmallSidebar from './components/SmallSidebar/SmallSidebar'
import Header from './components/Header/Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Header />
        <div className='below-navigation'>
        <SmallSidebar/>
        <div style={ {width : "95%",}}>
          <Switch>
            <Route exact path='/' >
              <HomePage />

            </Route>
            <Route exact path='/watch/:id' >
              <WatchPage />

            </Route>
            <Route exact path='/Upload' >
              <UploadPage />

            </Route>
          </Switch>
          </div>
          </div>
        </Router>
        
        </div>
       
     
    );
  }
}

export default App;
