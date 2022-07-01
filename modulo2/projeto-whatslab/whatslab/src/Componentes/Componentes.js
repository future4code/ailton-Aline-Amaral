import React, { Component } from 'react'

export class Nomes extends Component {
    state = {
        nome: [],
        nomeDoUsuario:''
    }

    adicionaNome = () => {
        const arrayNome = [...this.state.nome]
        arrayNome.push(this.state.nomeDoUsuario)
        this.setState({ nome: arrayNome })
    }

    insereNomeUsuario = (event) => {
        this.setState({ nomeDoUsuario: event.target.value })
    }

render() {
        const listaNome = this.state.nome.map((umNome, index) => {
        return (
        <li key={index}>{umNome}</li>
        )
    })
    return (
        <input value={this.state.nomeDoUsuario} onChange={this.adicionaNome} className="digitarNome"/>
    )
}
}


export class Textos extends Component {
    state = {
        texto: ['texto'],
        textoDigitado: ''
    }

    adicionaTexto = () => {
        const arrayTexto = [...this.state.texto] //cria novo array
        arrayTexto.push(this.state.textoDigitado)
        this.setState({ texto: arrayTexto, textoDigitado: '' }) //reset automático no input
    }

    insereTextoUsuario = (event) => {
        this.setState({ textoDigitado: event.target.value })
    }

render() {
    console.log(this.state.textoDigitado)
    const listaTexto = this.state.texto.map((umTexto, index) => {
        return (
        <li key={index}>{umTexto}</li>
        )
    })
    return (
        <input className='digitarTexto'/>
    )
}
}