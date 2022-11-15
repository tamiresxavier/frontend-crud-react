import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';

import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import CreateDepartment from "../screens/createDepartment/CreateDepartment";
import UpdateDepartment from "../screens/updateDepartment/UpdateDepartment";
import DeleteDepartment from "../screens/deleteDepartment/DeleteDepartment";
import ViewDepartments from "../screens/viewDepartments/ViewDepartments";
import CreateEmployee from "../screens/createEmployee/CreateEmployee";
import UpdateEmployee from "../screens/updateEmployee/UpdateEmployee";
import DeleteEmployee from "../screens/deleteEmployee/DeleteEmployee";
import ViewEmployees from "../screens/viewEmployees/ViewEmployees";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Route component = { Home } path ="/" exact />
            <Route component = { Login } path="/login" />
            <Route component = { CreateDepartment } path="/createDepartment" />
            <Route component = { UpdateDepartment } path="/updateDepartment/:code" />
            <Route component = { DeleteDepartment } path="/deleteDepartment" />
            <Route component = { ViewDepartments } path="/viewDepartments" />
            <Route component = { CreateEmployee } path="/createEmployee" />
            <Route component = { UpdateEmployee } path="/updateEmployee/:id" />
            <Route component = { DeleteEmployee } path="/deleteEmployee" />
            <Route component = { ViewEmployees } path="/viewEmployees" />
        </BrowserRouter>
    );
}

export default AppRoutes;