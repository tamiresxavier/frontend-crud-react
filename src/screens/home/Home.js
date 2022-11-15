import React from 'react';

import { withRouter } from 'react-router-dom';

class Home extends React.Component {

    getLoggedUser = () => {
        var value = localStorage.getItem('loggedUser');
        var user = JSON.parse(value);

        return user;
    }

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-12' style={this.styles.colMd12}>
                        <div className="bs-docs-section">

                            <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                                <h1 className="card-header text-center">Bem Vindo(a)</h1>
                                <h4 className="card-header text-center">Projeto desenvolvido por Tamires Xavier para a Disciplina de Desenvolvimento de Aplicações Corporativas ministrada pelo Professor Elenilson Vieira, no 5° Período do Curso de Análise e Desenvolvimento de Sistemas do IFPB - Campus Monteiro</h4>
                                <h5 className="card-header text-center">Projeto Frontend utilizando React e Bootswatch</h5>
                                <h6 className="card-header text-center">Usuário logado: {this.getLoggedUser().name}</h6>
                                <div className="card-body">
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
        cardBorder: {
            outerWidth: '20rem',
            margin: '50px 0 0 0'
        }
    }
}

export default withRouter(Home);