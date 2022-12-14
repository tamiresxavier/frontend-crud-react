import React from 'react';
import NavBarItem from './NavBarItem'

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavBarItem href="/" label="Home" />
                        <NavBarItem href="/login" label="Login"/>
                        <NavBarItem href="/createDepartment" label="Create Department"/>
                        <NavBarItem href="/updateDepartment/:code" label="Update Department"/>
                        <NavBarItem href="/deleteDepartment" label="Delete Department"/>
                        <NavBarItem href="/viewDepartments" label="Departments"/>
                        <NavBarItem href="/createEmployee" label="Create Employee"/>
                        <NavBarItem href="/updateEmployee/:id" label="Update Employee"/>
                        <NavBarItem href="/deleteEmployee" label="Delete Employee"/>
                        <NavBarItem href="/viewEmployees" label="Employees"/>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;