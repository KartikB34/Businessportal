import React from "react";
import Header from "./header/Header";
import Navbar from "./Navbar/Navbar";
import { Switch,Route, useRouteMatch } from "react-router-dom";

import DashHome from "./dashhome/DashHome";
import Addjob from "./addjob/Addjob";
import YourInternships from "./yourinternships/YourInternships";
import YourJobs from "./yourjobs/YourJobs";

const Dashboard = () => {

  let {path} = useRouteMatch();

  return (
    <div>
      <Header />
      <div className="w-full min-h-[90vh] flex flex-row">
        <Navbar className="" />
        <div className="w-[100%]">

          <Switch>
            <Route exact path={`${path}`}>
              <div>
                <DashHome />
              </div>
            </Route>

            <Route exact path={`${path}/addjob`}>
                <Addjob />
            </Route>

            <Route exact path={`${path}/yourjobs`}>
              <YourJobs />
            </Route>

            <Route exact path={`${path}/yourinternships`}>
              <YourInternships />
            </Route>

          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
