import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../graphql/queries";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

    if(loading) return (<p>Loading Products...</p>);
    if(error) return (<p>Error loading products: {error.message}</p>);

    return(
        <div className="product-list">
            {data.getAllProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;