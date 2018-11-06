import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug: 'IP7',
                name: 'Iphone 7',
                price: 700
            },
            {
                id: 2,
                slug: 'IP8',
                name: 'Iphone 8',
                price: 900
            },
            {
                id: 3,
                slug: 'IPX',
                name: 'Iphone X',
                price: 1100
            }
        ]

        var { match } = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li 
                        className="list-group-item"
                    >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })

        var { location } = this.props;
        console.log(location)

        return (
            <div className="container">
                Products
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route 
                        path="/products/:slug"
                        component={Product}
                    />
                </div>
            </div>
        );
    }
}

export default Products;
