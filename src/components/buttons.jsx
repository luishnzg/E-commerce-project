import React, { useEffect, useState } from "react";
import { useFetch } from "../services/hooks";
import { categories } from "../services/urlConst";
import { Link, Navigate, useParams } from "react-router-dom";
import "../asset/styles/dropdownButton.css"

function CategoryButton () {   
const data = useFetch(categories);

return (
    <div className="dropdown">
    <button type="button" className="dropBtn">Categories</button>
        <div className="dropdown-content">
             {data?.map((item) =>
              {
                return <Link to = {`/category/${item}`}><div>{item}</div></Link> 
              
              })}
        </div> 
    </div>
)
}
export {CategoryButton}