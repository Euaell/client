import React, {Component} from "react";

export default class AddContacts extends Component {
    submitContact(event){
        event.preventDefault();

        let contact ={
            firstName: this.refs.first_name.value,
            lastName: this.refs.last_name.value,
            email: this.refs.email.value
        }

        fetch("http://localhost:8080/api/contacts",{
            method: "POST",
            header:{
                "content-type": "application/json"
            },
            body: JSON.stringify(contact),
        })
            .then(response => response.json());
        window.location.reload();
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input ref="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input ref="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>


                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}