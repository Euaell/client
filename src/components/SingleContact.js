import React from "react";
const SingleContact = ({item}) => {
        <div className="col s12 m6" key={item.id}>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">d
                    <span className="card-title"> {item.firstName} {item.lastName}</span>
                </div>
                <div className="card-action">
                    <p>{item.email}</p>
                </div>
            </div>
        </div>

}

export default SingleContact;