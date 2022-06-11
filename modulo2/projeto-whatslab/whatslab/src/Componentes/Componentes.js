import React from "react";

export class CaixaTextoNome extends React.Component {
    state = {
        inputName: ""
    }

    recebeNome = (event) => {
        this.setState({
            inputName: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.inputName}</p>
                <input value={this.state.inputName} onChange={this.recebeNome} />
            </div>
        )
    }
}

export class CaixaTexto extends React.Component {
    state = {
        inputName: ""
    }

    recebeTexto = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.inputText}</p>
                <input value={this.state.inputText} onChange={this.recebeTexto} />
            </div>
        )
    }
}