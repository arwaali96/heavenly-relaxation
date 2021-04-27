import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Quran from './components/Quran';
import Nature from './components/Nature';

function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/quran' component={Quran} />
        <Route exact path='/nature' component={Nature} />
      </div>
    </Router>

  );
}

export default App;
