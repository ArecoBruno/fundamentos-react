import "./Contador.css";
import React, { Component } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <Botoes incrementar={this.inc} decrementar={this.dec} />
            </div>
        );
    }
}

export default Contador