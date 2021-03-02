import React from 'react'
import {filterProducts,sortProducts} from '../actions/productActions'
import {  connect } from "react-redux";

 const Filter = (props) => {
    return (
        <div className="filter">
            <div className="filter-result">{props.count}{" "}Products</div>
            <div className="filter-sort">
                Order 
                <select value={props.sort} onChange={(e) => {props.sortProducts(props.filteredProducts,e.target.value)}}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter
                <select value={props.size} onChange={e => props.filterProducts(props.filteredProducts,e.target.value)}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>

            
        </div>
    )
}

export default connect((state) => {
    console.log("state in filter",state);
    return{
    size:state.products.size,
    sort:state.products.sort,
    products:state.products.items,
    filteredProducts:state.products.filteredItems
}
},{filterProducts,sortProducts})(Filter);