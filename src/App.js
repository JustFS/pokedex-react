import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} /> */}
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
