import React, { useState, useEffect } from 'react';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true);
            fetch("https://fakestoreapi.com/products").then(response => {
                setLoading(false);
                console.log('response ,,,');
                console.log(response);
                response.json().then(data => {
                    setData(data);
                    console.log('data ,,,');
                    console.log(data);
                })
            })
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
            <div className='justify-center text-white flex-column'>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md hover:bg-gray-800 btn btn-outline-dark">ALL</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md hover:bg-gray-800 btn btn-outline-dark ">Men's Clothing</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md btn btn-outline-dark hover:bg-gray-800">Women's Clothing</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md btn btn-outline-dark hover:bg-gray-800">Jewelery</button>
                <button className="h-10 px-4 py-2 m-4 bg-orange-300 rounded-md btn btn-outline-dark hover:bg-gray-800">Electronics</button>
                <div className="container text-center">
                    <div className='row'>
                        {filter.map((product) => {
                            return (
                                <div className='col-md-3'>
                                    <div class="card">
                                        <img src={product.image} class="card-img-top" alt={product.title} />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">{product.price}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );



}
