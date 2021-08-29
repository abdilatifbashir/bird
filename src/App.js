
import './App.css';
import Home from './components/Home';
import Join from './components/Join';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">

     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/join" component={Join} />
      
        
     </Switch>
      
    </div>
    </Router>
  );
}

export default App;
