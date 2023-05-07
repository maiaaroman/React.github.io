import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from "./Contador"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Producto = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchPlatziAPI() {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error al hacer la solicitud', error);
      }
    }

    fetchPlatziAPI();
  }, []);
    return <>
  
      <div className='containerItemList'>
        {products.map((producto) => (
          <Card key={producto.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.images[0]}/>
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>${producto.price}</Card.Text>
            <Card.Text>
            {producto.description}
            </Card.Text>
            <Button className='button' variant="outline-primary" >Agregar</Button>
            <Button className='button' variant="outline-primary" >
              <Link to={`/Product/${producto.title}`} style={{textDecoration:"none"}} className="header-link link">Detalles</Link>
            </Button>
            <Contador/>
          </Card.Body>
        </Card>
        ))}
    
        

      </div>

    </>
  }
  
export default Producto;