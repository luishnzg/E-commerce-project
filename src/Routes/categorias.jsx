import React, { useEffect, useState } from "react";
import '../asset/styles/caja.css';
import { Link } from "react-router-dom";
import { fetchURL } from "../services/hooks";
import { categories } from "../services/urlConst";
import { useFetch } from "../services/hooks";

/*
function Categorias() {
    
   const data = useFetch(categories);
    const categoryItem = data?.map((item) => 
    { return <div className="cajaFront" key={item.id}>
                <div>
                        <img className="cajaFrontImg" src={item.imgSrc} alt="no disponible" />
                </div>
                <div>
                    <div>
                        <h4>{item.name}</h4>
                        <small>{item.productCount} articulos</small>
                    </div>
                    <p>{item.description}</p>
                </div> 
            </div> })
    //porque debo agregar el ?, funciona con eso y con el && antes de fetching colocando fetching && fetching.map
    return (
        <div>
            <div>
                <h2>Categorias</h2>
                <p>Verás aquí todas las categorías del sitio.</p>
            </div>
            <div className="">{categoryItem}</div>
        </div>


    )
}
export { Categorias }*/