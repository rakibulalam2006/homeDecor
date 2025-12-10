import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { name, image, price, category,id } = product;


  return (
    <div>
      <div className="card bg-base-100 max-w-[350px] shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="max-h-48 overflow-hidden">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category:{category}</p>
          <p>Price: $ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${id}`} className="btn">View details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
