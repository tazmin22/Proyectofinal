import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productsData } from "../../json/productsData";
import { useParams } from "react-router-dom";


const itemDetailsContainer = () => {

  const {productId} = useParams ();

  // const productFiltered = productsData.filter((item) => item.id === productId);
  const productFiltered = productsData.filter((item) => item.id === parseInt(productId));
  
  return (
    <div>
        {

            productFiltered.map ((item) => {

            return (
              <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title> {item.name} </Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
    </Card>
            )
          }
          
          )
        }

    </div>
    
    
  );
};
export default itemDetailsContainer