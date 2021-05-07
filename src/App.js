import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ContactUs from "./pages/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/signin" component={SignIn}/>
      <Route component={SignIn} />
    </Switch>
  );
}

export default App;
