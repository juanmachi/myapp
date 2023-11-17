import React from 'react';
import '../style/style.css'

function Articulo(props){
  return(

    <div className='articulo-general'>
      <img className='imagen-articulo' src={require(`../images/${props.imagen}`)} alt='imagen producto'></img>
      <p>Nombre: {props.nombre}</p>
      <p>Descripción: {props.descripcion}</p>
      <p>Precio: {props.precio}</p>
      <p>sku: {props.sku}</p>
      <p>Cantidad disponible: {props.cantidad}</p>
    </div>

  );
    
}
export default Articulo