
import React from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';

class ProductList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const{products, sortedPrice} = this.props;
        console.log(sortedPrice);
        return (
            <div>
                <div className="row my-4 d-flex flex-row justify-content-around">
                    {
                    sortedPrice ? 
                    products.filter((product) => (product.price >= sortedPrice && product.price <= (sortedPrice + 50))).map((product) => {
                        return (
                        <ProductItem
                            {...product}
                            key={product.id}
                        />)
                    })
                    : 
                    products.map((product) => {
                        return (
                        <ProductItem
                            {...product}
                            key={product.id}
                        />)
                    })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        sortedPrice: state.sort.price,
    }
}

export default connect(mapStateToProps, null)(ProductList);