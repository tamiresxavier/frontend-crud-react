import React from 'react';
import './UpdateDepartment.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UpdateDepartment extends React.Component {

  state = {
    code: 0,
    name: ''
  }

  update = () => {
    axios.put(`http://localhost:8080/api/department/${this.state.code}`,
      {
        name: this.state.name
      }
    ).then(response => {
      console.log(response);
    }
    ).catch(error => {
      console.log(error.response);
    }
    );
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

              <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                <h3 className="card-header text-center">Atualização de Departamento</h3>
                <div className="card-body">

                  <div className='row'>
                    <div className='col-lg-12' >
                      <div className='bs-component'>

                        <div className="form-group">
                          <label className="form-label mt-4">Id:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputCode" placeholder="Digite o código do departamento:" value={this.state.code} onChange={(e) => { this.setState({ code: e.target.value }) }} />
                            <label htmlFor="inputId">Digite o código do departamento</label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label mt-4">Nome:</label>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="inputName" placeholder="Digite o nome do departamento:" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <label htmlFor="inputName">Digite o nome do departamento</label>
                          </div>
                        </div>
                        <button onClick={this.update} type="button" className="btn btn-warning">
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
    );
  }

  styles = {
    colMd12: {
      position: 'relative',
    },
    cardBorder: {
      outerWidth: '20rem',
      margin: '50px 0 0 0'
    }
  }
}

export default withRouter(UpdateDepartment);