import { useEffect, useState } from "react";
import CardData from "./CardData";


const Products = () => {
  const [products,setProducts]=useState([]);
useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])  
  return (
    <section className="relative mt-2 md:mt-3 lg:mt-6" id="products">
      <div className="mb-3">
        <h1 className="text-center text-xl  md:text-3xl lg:text-5xl font-medium">
          Our Products:
        </h1>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-2 mx-5 max-h-fit	 ">
         {
          products.map(product=>(
            <CardData key={product.id} product={product}></CardData>
          ))
         }
      </div>
    </section>
  );
};

export default Products;

