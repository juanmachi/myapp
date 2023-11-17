import React from 'react';

function Articulo(props){
  return(
    <div>
      <img src={require(`../images/${props.imagen}`)} alt='imagen producto'></img>
      <p>Nombre: {props.nombre}</p>
      <p>Descripción: {props.descripcion}</p>
      <p>Precio: {props.precio}</p>
      <p>sku: {props.sku}</p>
      <p>Cantidad disponible: {props.cantidad}</p>
    </div>
  );
    
}
export default Articulo