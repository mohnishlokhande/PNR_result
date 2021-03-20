import React, { Component } from 'react';
import ProImg from '../img/moh.png';
import {Link} from 'react-router-dom';
import '../home/Home.css';

export default class Profile extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="colClass">
                    <div className="rowClass">
                        <div className="profileCard">
                            <img src={ProImg} alt="name" className="profileImg" />
                            <div className="proCardCol">
                                <h3>Nitish Kumar</h3>
                                <p>nitish1238bokaro@gmail.com</p>
                                <Link to="/profile"><p className="profileClass"><b>Edit Profile &nbsp;&nbsp;<span className="fa fa-long-arrow-right"></span></b></p></Link>
                            </div>
                        </div>
                        <div className="orderCard">
                            <div className="orderCardRow">
                                <img src={ProImg} alt="name" style={{width:"179px", height:"126px" ,borderRadius:"16pt" 
                                    }} />
                                <div className="lucky">
                                    <p style={{textAlign:"justify", fontSize:"22px"}}><b>Jone Jone</b></p>
                                    <p style={{textAlign:"justify", fontSize:"18px"}}><b>Balasore</b></p>
                                </div>
                                <p className="idOrder"><b>Order ID 554622</b></p>
                            </div>
                            <div className="orderCardCol">
                                <b style={{textAlign:"justify", marginTop:"8px"}}>Items</b>
                                <b style={{textAlign:"justify"}}>Jone Jone</b>
                            </div>
                            <br/>
                            <div className="btnRow">
                                <button type="button" className="btn-sta"><b>Track Status</b></button>
                                <button type="button" className="btn-sta"><b>Cancel Order</b></button>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="col-sm-12 col-md-3 menuCard">
                            <Link to="/home" className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-shopping-bag fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Your Orders</b></p>
                                </div>
                                <div className="iconArrow">
                                    <span className="fa fa-arrow-right arrow"></span>
                                </div>
                            </Link>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <Link to="/home" className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-map fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Complaints & Refunds</b></p>
                                </div>
                                <div className="iconArrow">
                                    <span className="fa fa-arrow-right arrow"></span>
                                </div>
                            </Link>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <Link to="/home" className="menuItem">
                                <div className="rowItem">
                                    <span className="fas fa-money fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>RailFeast Wallet</b></p>
                                </div>
                                <div className="iconArrow">
                                    <span className="fa fa-arrow-right arrow"></span>
                                </div>                        
                            </Link>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <Link to="/home" className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-share-alt fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Refer & Earn</b></p>
                                </div>
                                <div className="iconArrow">
                                    <span className="fa fa-arrow-right arrow"></span>
                                </div>                           
                            </Link>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <Link to="/home" className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-bell fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Notifications</b></p>
                                </div>
                                <div className="iconArrow">
                                    <span className="fa fa-arrow-right arrow"></span>
                                </div>                            
                            </Link>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <Link to="/home" className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-headphones fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Help & Support</b></p>
                                </div>
                                <div className="iconArrow">
                                    <span className="fa fa-arrow-right arrow"></span>
                                </div>                           
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
