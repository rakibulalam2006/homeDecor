import React, { useEffect, useState } from "react";
import { data } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { loadWishlist } from "../utils/localStorage";

const WishList = () => {
  const [wishlist, setWishlist] = useState(() =>loadWishlist());
  const [sortOrder, setSortOrder] = useState("none");

  // useEffect(() => {
  //   const savedList = JSON.parse(localStorage.getItem("wishlist"));
  //   if (savedList) setWishlist(savedList);
  // }, []);

  if(!wishlist.length) return <p className="text-center text-3xl font-bold">No Data Available</p>

  const sortedItem = () => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  };

  const handleRemove = (id) => {
    // const existingList = JSON.parse(localStorage.getItem("wishlist"));
    // let updatedList = existingList.filter((p) => p.id !== id);
    // for ui instant value
    // setWishlist(prev => prev.filter(p => p.id !== id))
    // setWishlist(updatedList);
    // localStorage.setItem("wishlist", JSON.stringify(updatedList));

    // remove from localstorage
    setWishlist(prev =>prev.filter(p => p.id !== id))
  };

  // generate chart data
  const totalsByCategory = {}
  wishlist.forEach(product =>{
    const category = product.category

    totalsByCategory[category] = 
    (totalsByCategory[category] || 0) + product.price
  })
  const chartData = Object.keys(totalsByCategory).map(category =>({
    category,
    total:totalsByCategory[category],
  }))
  console.log(chartData)
  return (
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) Products found
          </span>
        </h1>
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by price</option>
          <option value="price-asc">Low-&gt;High</option>
          <option value="price-desc">High-&gt;Low</option>
        </select>
      </div>
      <div className="space-y-3">
        {sortedItem().map((p) => (
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img className="max-w-32" src={p.image} alt={p.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>{p.description}</p>
              <p className="font-bold">Price: ${p.price}</p>
              <div className="card-actions justify-end">
                <button onClick={() => handleRemove(p.id)} className="btn">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* chart */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Wishlist Summery</h3>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
            data={chartData}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WishList;
