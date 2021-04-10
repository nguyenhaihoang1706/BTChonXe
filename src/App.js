import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Register from "./Pages/Register/Register";
import UseStateDemo from "./Pages/Hook/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./Pages/Hook/UseEffectDemo/UseEffectDemo";
import BTChonXe from "./Components/BTChonXe/BTChonXe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BTChonXe/>

        {/* <Header />
        <Switch>
          <Route path="/home" component={Home} />

          <Route
            path="/login"
            render={(propsRouter) => {
              return (
                <div className="container">
                  <h1>Login</h1>
                  <Login {...propsRouter} />
                </div>
              );
            }}
          />
          
          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={Register} />
          <Route path="/demousestate" exact component={UseStateDemo} />
          <Route path="/demouseeffect" exact component={UseEffectDemo} />
          
          
          <Route path="/" exact component={Home} />
        </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
