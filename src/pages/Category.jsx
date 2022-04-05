import React, { Component } from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import products from '../utils/products.json';
import ProductList from '../components/ProductList';
//import Base_list_sideBar from '../components/Base_list_sideBar';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: []
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
    }

    render() {


        return (
            <Layout>
                <div className="w-100 container-fluid container-fluid d-flex flex-row">
                        <Sidebar></Sidebar>
                    <div className='ml-5 w-100'> 
                        <p className="display-1 mb-5">{ this.state.category.name }</p>
                        <ProductList products={this.state.items} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Category;