import React from 'react';
var FontAwesome = require('react-fontawesome');

function ProductList(props) {

    const productClicked = product => evt => {
        props.productClicked(product);

    };

    const editClicked = product => {
        props.editClicked(product);
    
    }

    const removeClicked = product => {
        fetch(`${process.env.REACT_APP_API_URL}/api/products/${product.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Token ${this.token}`
            }        
            }).then( resp => props.productDeleted(product))
            .catch( error => console.log(error))

    };

    const newProduct = () => {
        props.newProduct();
    };
    
    return (
        <div>
            { props.products.map( product => {
                return (
                    <div key={product.id} className="product-item">
                        <h3 onClick={productClicked(product)}>
                            {product.title}
                        </h3>
                        <FontAwesome name="edit" onClick={() => editClicked(product)}/>
                        <FontAwesome name="trash" onClick={() => removeClicked(product)}/>
                    </div>
                )   
            })}
            <button onClick={newProduct}>Add new</button>
        </div>
        )   
    }
export default ProductList;