import React from 'react';
import './ViewEmployees.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

import EmployeesTable from '../../components/EmployeesTable'

class ViewEmployees extends React.Component {

    state = {
        name: '',
        lastName: '',
        office : '',
        departmentCode: 0,
        id: '',
        employees: []
    }

    delete = (employeeId) => {
        axios.delete(`http://localhost:8080/api/employeeId/${employeeId}`,
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    edit = (employeeId) => {
        this.props.history.push(`/updateEmployee/${employeeId}`);
    }

    find = () => {
        var params = '?';

        if (this.state.id !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}id=${this.state.id}`;
        }

        if (this.state.name !=='') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}name=${this.state.name}`;
        }

        if (this.state.lastName !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}lastName=${this.state.lastName}`;
        }

        if (this.state.office !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}office=${this.state.office}`;
        }

        if (this.state.departmentCode !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}departmentCode=${this.state.departmentCode}`;
        }

        axios.get(`http://localhost:8080/api/employee/${params}`)
            .then(response => {
                const employees = response.data;
                this.setState({ employees });
                console.log(employees);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }

    findAll = () => {

        axios.get(`http://localhost:8080/api/employee/all`)
            .then(response => {
                const employees = response.data;
                this.setState({ employees });
                console.log(employees);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-12' style={this.styles.colMd12}>
                        <div className="bs-docs-section">

                            <br />
                            <br />
                            <div className="card border-success mb-3" style={this.styles.cardText}>
                                <h3 className="card-header text-center">Consulta de Funcionários</h3>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label className="col-form-label mt-4" htmlFor="inputId">Id:</label>
                                        <input type="text" className="form-control" placeholder="Digite o Id do Funcionário" id="inputId" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />

                                        <div className="form-group">
                                            <label className="col-form-label mt-4" htmlFor="inputName">Nome:</label>
                                            <input type="text" className="form-control" placeholder="Digite o Nome do Funcionário" id="inputName" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />

                                            <div className="form-group">
                                                <label className="col-form-label mt-4" htmlFor="inputLastName">Sobrenome:</label>
                                                <input type="text" className="form-control" placeholder="Digite o Sobrenome do Funcionário" id="inputLastName" value={this.state.lastName} onChange={(e) => { this.setState({ lastName: e.target.value }) }} />

                                                <div className="form-group">
                                                    <label className="col-form-label mt-4" htmlFor="inputDepartmentCode">Código do Departamento:</label>
                                                    <input type="text" className="form-control" placeholder="Digite o Código do Departamento" id="inputDepartmentCode" value={this.state.departmentCode} onChange={(e) => { this.setState({ departmentCode: e.target.value }) }} />

                                                    <div className="form-group">
                                                        <label className="col-form-label mt-4" htmlFor="inputOffice">Cargo:</label>
                                                        <input type="text" className="form-control" placeholder="Digite o Cargo do Funcionário" id="inputOffice" value={this.state.office} onChange={(e) => { this.setState({ office: e.target.value }) }} />

                                                        <br />
                                                        <div className="btn-group-vertical">
                                                            <button onClick={this.find} type="button" className="btn btn-success">
                                                                <i className="pi pi-search"></i> Filtrar
                                                            </button>
                                                            <br />
                                                            <button onClick={this.findAll} type="button" className="btn btn-primary">
                                                                <i className="pi pi-search"></i> Buscar Tudo
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div className='row'>
                                                <div className='col-lg-12' >
                                                    <div className='bs-component'>
                                                        <EmployeesTable employees={this.state.employees}
                                                            delete={this.delete}
                                                            edit={this.edit} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                    </div >
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    styles = {
        colMd12: {
            position: 'relative'
        },
        cardBorder: {
            outerWidth: '20rem',
            margin: '50px 0 0 0'
        }
    }
}

export default withRouter(ViewEmployees);