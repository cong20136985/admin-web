import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-3">Quan ly nguoi dung</h1>
                        <p className="lead">voi du lieu json</p>
                        <hr className="my-2" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;