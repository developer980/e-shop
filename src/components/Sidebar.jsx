import React from "react";
import "../components/sidebar.css";
import { connect } from "react-redux";
import store from "../redux/store";
import { sorting } from "../redux/reducers1/sort";
import { sortElems } from "../redux/actions1/sort";

function Sidebar(props){
    const{price} = props;
        return(
        <div className="w-25 bg-light text-secondary sidebar mb-3">
            <p className="h2 font-weight-normal">
                Sort by price
            </p>
            <div className="form-check mt-4 ml-3">
                <input className="form-check-input" value="50" type="radio" name="option" onClick = {(event)=> {change(event, price, props)}}/>
                <label className="form-check-label h5">
                    50-100
                </label>
            </div>
            <div className="form-check mt-4 ml-3">
                <input className="form-check-input" value="100" type="radio" name="option" onClick = {(event)=> {change(event, price, props)}}/>
                <label className="form-check-label h5">
                    100-150
                </label>
            </div>
            
            <div className="form-check mt-4 ml-3">
                <input className="form-check-input" value="150" type="radio" name="option" onClick = {(event)=> {change(event, price, props)}}/>
                <label className="form-check-label h5">
                    150-200
                </label>
            </div>
            <div className="form-check mt-4 ml-3">
                <input className="form-check-input" value="200" type="radio" name="option" onClick = {(event)=> {change(event, price, props)}}/>
                <label className="form-check-label h5">
                    200-250
                </label>
            </div>
            <div className="form-check mt-4 ml-3">
                <input className="form-check-input" value="0" type="radio" name="option" onClick = {(event)=> {change(event, price, props)}}/>
                <label className="form-check-label h5">
                    Clear filters
                </label>
            </div>
        </div>
    )
}

function change(event, price, props){
    price = parseInt(event.target.value);
    console.log(price + "-" + (price+50));
    props.sortElems(price);
}

function mapDispatchToProps(dispatch){
    return{
        sortElems: (payload)=> dispatch(sortElems(payload))
    }
}

export default connect(null, mapDispatchToProps)(Sidebar);