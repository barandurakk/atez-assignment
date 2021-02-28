import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

//components
import landing from "./pages/landing";
import panel from "./pages/panel";
import Header from "./components/Header"

//body styles
import "./scss/_globalStyles.scss";

//create history
export const history = createBrowserHistory({
  basename:"/atez-odev"
});

const App = () => {

  return (
    <Router  history={history} >
      <Header/>
        <Switch>
          <Route exact path="/" component={landing}/>
          <Route exact path="/panel" component={panel} />
        </Switch>
    </Router>
  );
}

export default App;
