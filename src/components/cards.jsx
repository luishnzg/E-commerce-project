import React from "react";
import "../asset/styles/categoryCard.css"

function CategoryCards (props) {
return (
<div className="container" key={props.id}>
  <div className="images">
    <img src={props.imgSrc} alt="no disponible" />
  </div>
  <p className="pick">Stock: {props.productCount}</p>
  <div className="sizes">
   {props.rating}
  </div>
  <div className="product">
    <p>{props.category}</p>
    <h1>{props.name}</h1>
    <h2>{props.price}</h2>
    <p className="desc">{props.description}</p>
    <div className="buttons">
      <button className="add">Add to Cart</button>
      <button className="like"><span>♥</span></button>
    </div>
  </div>
</div>


//     <div className="cajaFront" key={props.id}>
//     <div>
//             <img className="cajaFrontImg" src={props.imgSrc} alt="no disponible" />
//     </div>
//     <div>
//         <div>
//             <h4>{props.name}</h4>
//             <small>Stock: {props.productCount}</small>
//         </div>
//         <p>{props.description}</p>
//         <span>USD - {props.price}</span>
//     </div> 
// </div>
)

}

export {CategoryCards}

