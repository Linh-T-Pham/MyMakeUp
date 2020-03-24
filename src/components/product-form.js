import React, { Component } from 'react';

class ProductForm extends Component {
    
    state = {
      editedProduct: this.props.product 
    }

    cancelClicked = () => {
        this.props.cancelForm();
    }
    inputChanged = event => {
        let product = this.state.editedProduct;
        product[event.target.name] = event.target.value;
        this.setState({editedProduct: product});
    }
    saveClicked = () => {
        console.log(this.state.editedProduct);
        fetch(`${process.env.REACT_APP_API_URL}/api/products/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.props.token}`
            },
            body: JSON.stringify(this.state.editedProduct)
            }).then( resp => resp.json())
            .then( res => this.props.newProduct(res))
            .catch( error => console.log(error))
    }

    updateClicked = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/products/${this.props.product.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.props.token}`
            },
            body: JSON.stringify(this.state.editedProduct)
            }).then( resp => resp.json())
            .then( res => this.props.editedProduct(res))
            .catch( error => console.log(error))
    }
  
    render() {

        const isDisabled = this.state.editedProduct.title.length === 0 ||
                            this.state.editedProduct.description === 0 || 
                            this.state.editedProduct.description === 0;

        return (
            <React.Fragment>
                <span> Product Title</span><br/>
                <input type="text" name = "title" value={this.props.product.title} onChange={this.inputChanged}/><br/>
                <span>Brand Name</span><br/>
                <textarea name = "brand" value = {this.props.product.brand} onChange={this.inputChanged}/><br/>
                <span>Description</span><br/>
                <textarea name = "description" value = {this.props.product.description} onChange={this.inputChanged}/><br/>
                <span>Comments(Optional)</span>
                <textarea name ="comments" value = {this.props.product.comments} onChange={this.inputChanged}/><br/>
                { this.props.product.id ? <button disabled = {isDisabled} onClick={this.updateClicked}>Update</button>:
                    <button disabled = {isDisabled} onClick={this.saveClicked}>Save</button>}

                <button onClick={this.cancelClicked}>Cancel</button>
            </React.Fragment>
        )
    }
}

export default ProductForm;