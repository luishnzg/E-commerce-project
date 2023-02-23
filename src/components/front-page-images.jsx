import React from "react";
import '../asset/styles/caja.css'
function FrontImages (props) {
   
return (
    <div className='cajaFront'>
        <div>
        <img className="cajaFrontImg" src={props.image} alt={props.altImg}/>
        </div>
        
        <div>
        <h2 className="cajaFrontTitulo">{props.titulo}</h2>
        <p className="cajaFrontParrafo">{props.descripcion}</p>
        </div>
       
    </div>
)
} 

export default FrontImages