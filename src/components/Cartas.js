import React, { Component } from 'react'
import { ContCartas} from '../styles/Estilos'
import Perfiles from './Perfiles';




export default class Cartas extends Component {

    constructor() {
        super();
        this.state = {
            infoCards: []
        }
    }

    async componentDidMount() {
        const url = 'https://perfilesreto1.herokuapp.com/InfoText';
        const resp = await fetch(url);
        const data = await resp.json();
        const InfoText = data;
        this.setState({ infoCards: InfoText })
        console.log(InfoText)
    }

    render() {
        return (
            <ContCartas>
                {
                    this.state.infoCards.map((elegida, index) => (
                        <Perfiles
                            key={index}
                            moCarta={elegida} />
                    ))
                }

            </ContCartas>
        )
    }
}
