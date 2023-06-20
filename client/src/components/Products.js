import Card from 'react-bootstrap/Card';
import UpdateModal from "./UpdateModal"
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
function Products(props) {
    const handelDelete=(id)=>{
       axios.delete('http://192.168.2.181:5500/api/deleteProduct/'+id)
       .then((res)=>{
        console.log(res)
       })
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.product_Image} />
      <Card.Body>
        <Card.Title>{props.product.product_Name}</Card.Title>
        <Card.Text>
        <h1>{props.product.Promo_price}</h1>
        <h2>{props.product.Orginal_price} </h2>
        <h3>{props.product.product_Material} </h3>
        </Card.Text>
      </Card.Body>
      <UpdateModal id={props.product.id} product={props.product} />
      <Button variant="danger" onClick={()=>handelDelete(props.product.id)}>delete</Button>{' '}
    </Card>
  );
}

export default Products;