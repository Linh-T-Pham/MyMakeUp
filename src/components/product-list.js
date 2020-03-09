import React from 'react';

function ProductList(props) {

    const productClicked = product => evt => {
        props.productClicked(product);

    };
    
    return (
        <div>
            { props.products.map( product => {
                return (
                    <h3 key={product.id} onClick={productClicked(product)}>
                        {product.title}
                    </h3>
                )
            })}
        </div>
    )
}

export default ProductList;