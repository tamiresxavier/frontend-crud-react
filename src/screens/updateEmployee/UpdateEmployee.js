import React from 'react';
import './UpdateEmployee.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UpdateEmployee extends React.Component {

  state = {
    id: 0,
    name: "",
    lastName: "",
    office: "",
    departmentCode: 0
  }

  update = () => {
    axios.put('http://localhost:8080/api/employee/${this.state.id}',
      {
        name: this.state.name,
        lastName: this.state.lastName,
        office: this.state.office,
        departmentCode: this.state.departmentCode
      }
    ).then(response => {
      console.log(response);
    }
    ).catch(error => {
      console.log(error.response);
    }
    );

    console.log('request finished');
  }

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    return (

      <div className="container">
        <div className='row'>
          <div className='col-md-12' style={this.styles.colMd12}>
            <div className="bs-docs-section">

              <div className="card text-white bg-info mb-3" style={this.styles.cardText}>
                <h3 className="card-header text-center">Atualização de Funcionário</h3>
                <div className="card-body">

                  <div className='row'>
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputName">Nome:</label>
                          <input type="text" className="form-control" placeholder="Digite o nome do funcionário:" id="inputName" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />

                          <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputLastName">Sobrenome:</label>
                          <input type="text" className="form-control" placeholder="Digite o sobrenome do funcionário:" id="inputLastName" value={this.state.lastName} onChange={(e) => { this.setState({ lastName: e.target.value }) }} />
                          </div>

                          <div className="form-group">
                          <label className="col-form-label mt-4" htmlFor="inputOffice">Cargo:</label>
                          <input type="text" className="form-control" placeholder="Digite o cargo do funcionário:" id="inputOffice" value={this.state.office} onChange={(e) => { this.setState({ office: e.target.value }) }} />
                          </div>

                          <div className="form-group">
                            <label className="col-form-label mt-4" htmlFor="inputDepartmentCode">Código do Departamento:</label>
                            <input type="text" className="form-control" placeholder="Digite o código do departamento" code="inputDepartmentCode" value={this.state.DepartmentCode} onChange={(e) => { this.setState({ DepartmentCode: e.target.value }) }} />
                          </div>

                          <br />

                          <button onClick={this.update} type="button" className="btn btn-success">
                            <i className="pi pi-save"></i> Atualizar
                          </button>
                          <button onClick={this.cancel} type="button" className="btn btn-danger">
                            <i className="pi pi-times"></i> Cancelar
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  styles = {
    colMd12: {
      position: 'relative'
    },
    cardText: {
      outerWidth: '20rem',
      margin: '50px 0 0 0'
    }
  }
}

export default withRouter(UpdateEmployee);