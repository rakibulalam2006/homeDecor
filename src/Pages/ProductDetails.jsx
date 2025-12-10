import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { updatedLest } from "../utils/localStorage";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { products } = useProducts();
  //  console.log(products)
  const product = products.find((p) => String(p.id) === id);
  // console.log(product);

  //   if (loading) return <p>loading...</p>
  const { name, image, category, price, description } = product || {};

  // const handleAddToWishlist = () => {
  //   const existingList = JSON.parse(localStorage.getItem("wishlist"));
  //   // console.log(existingList);
  //   // localStorage.setItem('wishlist',JSON.stringify(product))

  //   let updatedLest = [];

  //   if (existingList) {
  //     const isDuplicate = existingList.some((p) => p.id === product.id);
  //     if (isDuplicate) return alert("Already have wishlist");
  //     updatedLest = [...existingList, product];
  //   } else {
  //     updatedLest.push(product);
  //   }
  //   localStorage.setItem("wishlist", JSON.stringify(updatedLest));
  // };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="ml-5 space-y-3">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-600 font-semibold">Category : {category}</p>
          <p className="font-semibold">Price: ${price}</p>
          <p>Description: {description}</p>
          <div className="card-actions justify-end ">
            <button onClick={() =>updatedLest(product)} className="btn btn-primary ">
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
