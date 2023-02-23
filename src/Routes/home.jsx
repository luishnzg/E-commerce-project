import React from "react"
import FrontImages from '../components/front-page-images';
import SedanRojo from '../asset/images/sedanRojo.jpg';
import dino from '../asset/images/dinotoy.jpg';
import Sofa from '../asset/images/sofa.jpg';

function Home () {
return (
    <div className='cajaGrupo'>
    <FrontImages 
    image={SedanRojo}
    altImg='Sedan'
    titulo='Autos'
    descripcion='Los mejores precios en autos cero kilometros de alta y media gama'/>
        <FrontImages 
    image={Sofa}
    altImg='Sofa'
    titulo='Muebles'
    descripcion='Muebles antiguos, nuevos y para ser armados por uno mismo.'/>
        <FrontImages 
    image={dino}
    altImg='dino'
    titulo='Juguetes'
    descripcion='Encuentra aquí los mejores precios para niños/as de cualquier edad.'/>
    </div>
)
}

export {Home}