import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();
  const [search,setSearch] = useState('')
  // console.log(search)

  const term = search.trim().toLocaleLowerCase()
  const searchedProducts = term?products.filter(product => product.name.toLocaleLowerCase().includes(term)):products
  console.log(searchedProducts)
  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          All Products {""}
          <span className="text-sm text-gray-500">
            ({products.length}) Products found
          </span>
        </h1>
        <label className="floating-label">
          <span>Search Product</span>
          <input onChange={(e)=>setSearch(e.target.value)}
          value={search}
            type="search"
            placeholder="Search Product"
            className="input input-md"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
