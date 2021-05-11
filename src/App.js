import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import About from './containers/About';
import Contact from './containers/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
