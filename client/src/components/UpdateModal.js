import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Example({id,product}) {
  const [show, setShow] = useState(false);
 const [product_Name,setProductName]=useState(product.product_Name)
 const [product_Material,setProductMaterial]=useState(product.product_Material)
 const [product_Image,setProductImage]=useState(product.product_Image)
 const [category,setCategory]=useState(product.category)
 const [quantity,setQuantity]=useState(product.quantity)
 const [Promo_price,setPromoPrice]=useState(product.Promo_price)
 const [Orginal_price,setOrginalPrice]=useState(product.Orginal_price)

  const handleShow = () => setShow(true);
const UpdateProduct=()=>{
    axios.put("http://192.168.2.181:5500/api/updateProduct/"+id,{
        product_Name:product_Name,
        product_Material:product_Material,
        product_Image:product_Image,
        category:category,
        quantity:quantity,
        Promo_price:Promo_price,
        Orginal_price:Orginal_price,
    }).then((res)=>{
        if(res.data==="product updated"){
           window.location.reload() 
        }
    })
}
const handleClose = () =>{
    UpdateProduct()
    setShow(false)
  } 
  return (
    <>
  <Button variant="warning" style={{width:"70px"}}  onClick={handleShow}>Edit</Button>{' '}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Name</Form.Label>
        <Form.Control value={product_Name} type="text" placeholder="....." onChange={(e)=>setProductName(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Material</Form.Label>
        <Form.Control value={product_Material} type="text" placeholder="....." onChange={(e)=>setProductMaterial(e.target.value)}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Image</Form.Label>
        <Form.Control value={product_Image} type="text" placeholder="........" onChange={(e)=>setProductImage(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control value={category} type="text" placeholder="......" onChange={(e)=>setCategory(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>quantity</Form.Label>
        <Form.Control value={quantity} type="text" placeholder="........"onChange={(e)=>setQuantity(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Promo_price</Form.Label>
        <Form.Control value={Promo_price} type="text" placeholder="......"onChange={(e)=>setPromoPrice(e.target.value)} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Orginal_price</Form.Label>
        <Form.Control value={Orginal_price} type="text" placeholder="...." onChange={(e)=>setOrginalPrice(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;