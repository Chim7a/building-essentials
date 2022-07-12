import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ViewProductBtn = () => {
  return (
    <div>
       <Link style={{textDecoration:"none"}} to="/products">
         <Button variant="outlined" style={{borderColor:"white", color:"#daa520", width:"auto", marginTop:"10px", fontWeight:"bolder" }} >View Product</Button>
       </Link>
    </div>
  )
}

export default ViewProductBtn;