import React, { useState, useEffect } from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            setLoading(false);
            let data = await response.json()
            setData(data);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }

    }


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div>
                <h1 className='text-center text-gray-800 text-7xl'>Latest products</h1>
                <hr />
            </div>
            <div>
                {loading ? "Loading" : <ShowProducts filter={data} />}
            </div>
        </div>

    )

}
export default Products;

const ShowProducts = ({ filter = [] }) => {
    return (
        <>
            <div className='flex justify-center text-white'>
                <button className="h-10 px-4 m-4 rounded-md py-2bg-orange-300 hover:bg-gray-800 btn btn-outline-dark">ALL</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md hover:bg-gray-800 btn btn-outline-dark ">Men's Clothing</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md btn btn-outline-dark hover:bg-gray-800">Women's Clothing</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md btn btn-outline-dark hover:bg-gray-800">Jewelery</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md btn btn-outline-dark hover:bg-gray-800">Electronics</button>

                {filter.map((product) => {
                    return (
                        <>
                            <div className="grid grid-cols-3">
                                <img src={product.image} />
                                <h5></h5>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );



}