import React from 'react';
function ProductList(props){
    
    return (
        <React.Fragment>
        { props.products.map( product => {
            return <h3>{product}</h3>
        })}
        </React.Fragment>
    )
}

export default ProductList;