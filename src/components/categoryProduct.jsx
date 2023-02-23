import { useFetch } from "../services/hooks";
import { productsCategories } from "../services/urlConst";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { CategoryCards } from "./cards";
import { useEffect, useState } from "react";


function CatProduct () {
const {product} = useParams();
const data = useFetch(productsCategories + product)
return (
<div>
    <h1>{product}</h1>
    <div className='cajaGrupo'>
    {data?.map((item) => 
    { return <CategoryCards  
key = {item.id}
 id={item.id}
 imgSrc={item.image}
 name={item.title}
 price={item.price}
 description={item.description}
 productCount={item.rating.count}
/> 
})}
    </div>
   
</div>
)
}

export {CatProduct}