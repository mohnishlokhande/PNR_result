import React, { Component } from 'react';
import './Home.css';
import Profile from '../img/index.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="colClass">
                    <div className="rowClass">
                        <div className="col-sm-12 col-md-3 profileCard">
                            <img src={Profile} alt="name" style={{width:"180px",borderRadius:"16rem",margin:"10px"}} />
                            <h3>Nitish Kumar</h3>
                            <p>nitish1238bokaro@gmail.com</p>
                            <p>Edit Profile </p>
                        </div>
                        <div className="col-sm-0 col-md-8 orderCard">
                            <div className="orderCardRow">
                                <img src={Profile} alt="name" style={{width:"179px", height:"126px" ,borderRadius:"16pt" 
                                    }} />
                                <div className="lucky">
                                    <p style={{textAlign:"justify", fontSize:"22px"}}><b>Lucky Arcade</b></p>
                                    <p style={{textAlign:"justify", fontSize:"18px"}}><b>Balasore</b></p>
                                </div>
                                <p className="idOrder"><b>Order ID 354622</b></p>
                            </div>
                            <div className="orderCardCol">
                                <b style={{textAlign:"justify", marginTop:"8px"}}>Items</b>
                                <b style={{textAlign:"justify"}}>Lucky Arcade</b>
                            </div>
                            <br/>
                            <div className="btnRow">
                                <button type="button" className="btn-sta"><b>Track Status</b></button>
                                <button type="button" className="btn-sta"><b>Cancel Order</b></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12 col-md-3 menuCard">
                            <div className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-shopping-bag fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Your Orders</b></p>
                                </div>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </div>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <div className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-map fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Complaints & Refunds</b></p>
                                </div>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </div>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <div className="menuItem">
                                <div className="rowItem">
                                    <span className="fas fa-money fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>RailFeast Wallet</b></p>
                                </div>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </div>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <div className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-share-alt fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Refer & Earn</b></p>
                                </div>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </div>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <div className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-bell fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Notifications</b></p>
                                </div>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </div>

                            <hr style={{color:"black",width:"100%",marginTop:"0",marginBottom:"1.5rem"}} />
                            <div className="menuItem">
                                <div className="rowItem">
                                    <span className="fa fa-headphones fa-lg"></span>&nbsp;&nbsp;
                                    <p><b>Help & Support</b></p>
                                </div>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
