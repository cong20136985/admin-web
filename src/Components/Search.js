import React, { Component } from 'react';

class Search extends Component {
    
    
    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhap tu khoa" style={{ width: '600px' }} />
                            <div className="btn btn-info" style={{ width: '100px' }}>Tim</div>
                            <div className="container">
                                <div className="btn btn-info" onClick={()=>this.props.ketnoi()} style={{ width: '150px' }}>Them NSD</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>

        );
    }
}

export default Search;