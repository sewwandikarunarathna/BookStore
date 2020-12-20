
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Book from './Book';
import Home from './Home' ;
import Booklist from './Booklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Router>
      <Switch>
      <Route exact path='/'><Home /></Route>
        <Route exact path='/booklist'><Booklist /></Route>
        <Route exact path='/viewdetails'><Book /></Route>
      </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
