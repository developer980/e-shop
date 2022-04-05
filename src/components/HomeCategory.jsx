import React from "react";
import {Link} from "react-router-dom";
import "../components/home_category.css";

function HomeCategory(props){
    const{route, description, image, name} = props;
    return(
        <div className="col-12 col-md-6 mb-3 p-div">
            <Link to={`/category/${route}`}>
                <div className="w-100 ">
                    <img src={image} alt="" className="w-100" />
                    <div className="cover">
                        <div className="category">
                            <p className="my-1 text h3">{name}</p>
                            <p className="m-0 text h6">{description}</p>
                        </div>
                    </div>   
                </div>
                
            </Link>
        </div>
    )
}

export default HomeCategory;