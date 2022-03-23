import styled from "styled-components";


export const ImgNav = styled.img`
width: 100vw;
background-color: hsl(180, 29%, 50%);
`

export const ContCartas = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
background-color:  hsl(180, 52%, 96%);

`

export const DivCarta = styled.div`
font-size: 1rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin: 3% auto;
width:70%;
height: fit-content;
box-shadow: 5px 5px 5px 5px hsl(180, 29%, 50%,0.5);
padding: 5px 15px;
border-radius: 15px;
@media (max-width: 600px) {
    width: 90%;
    font-size: 8px;
    
}
`

export const DivInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 60%;
gap: 5%;

`

export const DivNombre = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 5%;

`
export const Featured = styled.p`
background-color: black;
color: white;
border-radius: 30%;
padding:5px;

`

export const LetraGris = styled.p`
gap: 5%;
display: flex;
flex-direction: row;
color: grey;
font-size: smaller;
`

export const DivEtiquetas = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
width: 60%;
gap: 5%;

`

export const Nombre = styled.h3`
color: hsl(180, 29%, 50%);
`
export const Etiquetas = styled.p`
background-color: hsl(180, 31%, 95%);
padding: 5px;
color: hsl(180, 29%, 50%);
font-weight: 600;
`
