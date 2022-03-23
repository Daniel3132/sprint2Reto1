import React, { Component } from 'react'
import { DivCarta, DivEtiquetas, DivInfo, DivNombre, Etiquetas, Featured, LetraGris, Nombre } from '../styles/Estilos'

export default class Perfiles extends Component {
    render() {

        const { nombre, tiempos, news, rol, nivel, lenguajes , imagen } = this.props.moCarta;

        return (
            <DivCarta>
                <DivInfo>
                    <img src={imagen} alt='' width={'90rem'}/>
                    <div>
                        <DivNombre>
                            <Nombre> {nombre}</Nombre>
                            {news.map((featured,index)=>
                    <Featured key={index}>{featured}</Featured>)}
                        </DivNombre>

                        <h3>{nivel} {rol} Developer </h3>

                        <LetraGris>
                        {tiempos.map((tiempo,index)=>
                    <span key={index}>{tiempo}</span>)}
                        </LetraGris>
                    </div>
                </DivInfo>
                <DivEtiquetas>
                    {lenguajes.map((lenguaje,index)=>
                    <Etiquetas key={index}>{lenguaje}</Etiquetas>)}
                </DivEtiquetas>
            </DivCarta>
        )
    }
}
