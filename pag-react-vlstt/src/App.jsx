
import Navbar from "./components/Navbar/Navbar";



function App() {

  const darBienvenida = () => alert("Bienvenidos a nuestra tienda");
  return (

    <>

    <div className="App">
     <Navbar  nombreTienda="VLST" subtitulo= "Store" darBienvenida= {darBienvenida} />
    
    
    </div>


    </>
  );
};

export default App;












