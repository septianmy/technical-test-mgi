import logo from './logo.svg';
import './App.css';
import { Detail, Home } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Router>
    
  );
}

export default App;
