import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Hooks/useProducts';

const Home = () => {
//    const products = useLoaderData();

   const {products,loading,error} = useProducts();
//    console.log(data)
   const featuredProducts = products.slice(0,6)
//    console.log(featuredProducts)
//    console.log(products)
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-2xl lg:text-3xl font-semibold'>Featured Products</h1>
                <Link className='btn btn-outline' to='/products'>See All Products</Link>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
            {
               featuredProducts.map(product =>(
                <ProductCard key={product.id} product={product} />
               ))
            }
        </div>
        </div>
    );
};

export default Home;