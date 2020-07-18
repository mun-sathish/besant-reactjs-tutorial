import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to={"/page1"}>
                        <button>Goto Page1</button>
                    </Link>
                    <Link to={"/page2"}>
                        <button>Goto Page2</button>
                    </Link>
                    <Link to={"/page3"}>
                        <button>Goto Page3</button>
                    </Link>

                    <Switch>
                        <Route exact path="/" component={Page1} />
                        <Route path="/page1" component={Page1} />
                        <Route path="/page2" component={Page2} />
                        <Route path="/page3" component={Page3} />
                        <Route path="*" component={ErrorPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

class ErrorPage extends Component {
    render() {
        return <div>Error Page... Request Page not FOund</div>;
    }
}
