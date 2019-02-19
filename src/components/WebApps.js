import React, { Component } from 'react';

class WebApps extends Component {
    render () {
        return(
             <div className = 'container'>
                    <div className="row">
                    <div className="col-md-4 col-sm-6 mt-4   ">
                            <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
                                <img className="card-img-top img-fluid" src={require ("../images/web apps.jpg")} alt="Card image cap"/>
                                <div className="card-body text-center">
                                    <h5 className ="card-title ">Card title</h5>
                                    <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
        )
    }   
}
export default WebApps;