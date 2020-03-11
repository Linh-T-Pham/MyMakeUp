import React from 'react';
var FontAwesome = require('react-fontawesome');

function ProductList(props) {

    const productClicked = product => evt => {
        props.productClicked(product);

    };
    
    return (
        <div>
            { props.products.map( product => {
                return (
                    <div key={product.id}>
                    <h3 onClick={productClicked(product)}>
                        {product.title}
                    </h3>
                    <FontAwesome name='edit'/>
                    <FontAwesome name='trash'/>
                    </div>
                )   
            })}
        </div>
    )
}

export default ProductList;