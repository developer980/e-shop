import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import HomeCategory from '../components/HomeCategory';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = Object.keys(products);
        this.setState({categories});
    }

    render() {
        const {user, signOut} = this.props;

        return(
            <Layout
            user={user}
            signOut = {signOut}
            >
                <div className="container-fluid container-min-max-width d-flex flex-column align-items-center">
                    <div className="row">
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
                                route={category}
                                name={products[category].name}
                                description={products[category].description}
                                image={products[category].image}
                            />
                        )}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;