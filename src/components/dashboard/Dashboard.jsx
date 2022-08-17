import React from "react";
import Header from "./header/Header";
import Navbar from "./Navbar/Navbar";
import { Switch,Route, useParams } from "react-router-dom";

import DashHome from "./dashhome/DashHome";
import Addjob from "./addjob/Addjob";
import YourInternships from "./yourinternships/YourInternships";
import YourJobs from "./yourjobs/YourJobs";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-[90vh] flex flex-row">
        <Navbar className="" />
        <div className="w-[100%]">
          {/* Left part */}
          {/* Right part */}
          <Switch>
            <Route exact path="/signin">
              <div>
                <YourJobs />
              </div>
            </Route>

            <Route exact path="/signin/addjob">
                <Addjob />
            </Route>

            <Route exact path="/yourjob">
              <YourInternships />
              <DashHome />
            </Route>

          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
