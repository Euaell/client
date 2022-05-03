import React, {Component} from "react";
import SingleContact from "./SingleContact";
import AddContacts from "./AddContacts"

export default class Contacts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    // == useEffect with []
    componentDidMount() {
        fetch("http://localhost:8080/api/contacts")
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddContacts />
                </div>
                <div className="row">
                    {this.state.contacts.map((item) => (
                        <div className="col s12 m6" key={item.id}>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title"> {item.firstName} {item.lastName}</span>
                                </div>
                                <div className="card-action">
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        </div>
                        // <div className="row">
                        //
                        // </div>
                    ))}
                </div>
            </div>
        )
    }
}