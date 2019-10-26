import React from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";

import PatientForm from "./PatientForm";
import Patients from "./Patients";

export default function PatientContainer() {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <Link to={`${url}/addPatient`} className="btn btn-default m-1">
        Add patient
      </Link>
      <Link to={`${url}`} className="btn btn-info m-1">
        VIew patients
      </Link>
      <Switch>
        <Route path={`${path}`} exact component={Patients} />
        <Route path={`${path}/addPatient`} component={PatientForm} />
      </Switch>
    </div>
  );
}
