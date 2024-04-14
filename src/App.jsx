
import './styles/App.css'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from "./views/Home.jsx";
import initFontAwesome from "./utils/initFontAwesome";
import ExternalApi from "./views/ExternalApi.jsx";
initFontAwesome();
function App() {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">

        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>

      </div>
    </Router>
  );
}

export default App
