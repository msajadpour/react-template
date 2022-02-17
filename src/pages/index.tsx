import React from "react";

//packages
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
//styles
import Tasks from "./tasks/tasks";
import Header from "./../layouts/header/header";
import Dashbord from "./dashbord/dashbord";
import Categories from "./../pages/categories/categories";

const PagesRouter = () => {
    return (
        <>
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                        <div className="row">
                            <Switch>
                                <Route exact path="/">
                                    <Dashbord />
                                </Route>
                                <Route path="/tasks">
                                    <Tasks />
                                </Route>
                                <Route path="/categories">
                                    <Categories />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
};

export default PagesRouter;
