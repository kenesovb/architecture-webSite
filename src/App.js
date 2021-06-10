import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Reviews } from "./pages/Reviews";
import { Services } from "./pages/Services";
function App() {
  return (
    <FirebaseState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about"} exact component={About} />
            <Route path={"/reviews"} exact component={Reviews} />
            <Route path={"/contacts"} exact component={Contacts} />
            <Route path={"/projects"} exact component={Projects} />
            <Route path={"/services"} exact component={Services} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
