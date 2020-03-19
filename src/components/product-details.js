import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');

class ProductDetails extends Component {
    state = {
        highlighted: -1
    }

    highlightRate = high => evt => {
        this.setState({highlighted:high});
    }
    rateClicked = stars => evt => {
        fetch(`${process.env.REACT_APP_API_URL}/api/products/${this.props.product.id}/rate_product/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.props.token}`
        },
        body: JSON.stringify({stars : stars + 1})
        }).then( resp => resp.json())
        .then( res => this.getDetails())
        .catch( error => console.log(error))
    }

    getDetails = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/products/${this.props.product.id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.props.token}`
        }
        }).then( resp => resp.json())
        .then( res => this.props.updateProduct(res))
        .catch( error => console.log(error))
    }

    render() {
        const pro = this.props.product;
        return (
            <React.Fragment>
                { this.props.product ? (
                    <div>
                        <h3>{pro.title}</h3>
                        <FontAwesome name='heart' className={pro.avg_rating > 0 ? 'red': ''}/>
                        <FontAwesome name='heart' className={pro.avg_rating > 1 ? 'red': ''}/>
                        <FontAwesome name='heart' className={pro.avg_rating > 2 ? 'red': ''}/>
                        <FontAwesome name='heart' className={pro.avg_rating > 3 ? 'red': ''}/>
                        <FontAwesome name='heart' className={pro.avg_rating > 4 ? 'red': ''}/>
                        ({pro.nums_of_ratings})
                        <p>{pro.brand}</p>
                        <p>{pro.description}</p>

                        <div className='rate-container'>
                            <h2>Rate the product!</h2>
                            { [...Array(5)].map((element, index) => {
                                return <FontAwesome key={index} name='heart' className={this.state.highlighted > index - 1 ? 'orange': ''}
                                    onMouseEnter={this.highlightRate(index)} onMouseLeave={this.highlightRate(-1)} onClick={this.rateClicked(index)}/>

                        })}
                        </div>
                    </div>
                ) : null }
            </React.Fragment>
        )
    }
}

export default ProductDetails;