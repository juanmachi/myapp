import './App.css';
import Articulo from './componentes/articulo.js';


function App() {
  return (
    <div className="App">
      <h1>E`COMMERCE</h1>

      <Articulo
        imagen='gift.svg'
        nombre='producto'
        descripcion='el producto es nuevo'
        precio='1000'
        sku='1234'
        cantidad='10'/>
        

    </div>
  );
}

export default App;
