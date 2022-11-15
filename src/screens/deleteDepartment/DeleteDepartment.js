import React from 'react';
import './DeleteDepartment.css';

import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DeleteDepartment extends React.Component {

  state = {
    code: 0
  }

  delete = () => {
    axios.delete(`http://localhost:8080/api/department/${this.state.code}`,
    ).then(response => 
      {
        console.log(response);
      }
    ).catch(error => 
      {
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
                <h3 className="card-header text-center">Exclusão do Departamento</h3>
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

                        <br />

                        <button onClick={this.delete} type="button" className="btn btn-outline-danger">
                            <i className="pi pi-save"></i> Deletar
                        </button>
                        <button onClick={this.cancel} type="button" className="btn btn-outline-info">
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

export default withRouter(DeleteDepartment);