import React from 'react';

function ProductList(props){
    
    return (
        <div>
        { props.products.map( product => {
            return <h3 key={product.id}>{product.title}</h3>
        })}
        </div>
    )
}

export default ProductList;