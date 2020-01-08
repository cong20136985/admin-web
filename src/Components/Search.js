import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state= {
            textSearch:''
        }
    }
    
    isChange = (event) =>{
        console.log(event.target.value);
        this.setState({
            textSearch:event.target.value
        });
        this.props.chacon(event.target.value);
    }
    
    
    render() {
        //console.log(this.state.text);
        return (
            <div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" onChange={(event)=>this.isChange(event)}  aria-describedby="helpId" placeholder="Nhap tu khoa" style={{ width: '600px' }} />
                            <div className="btn btn-info" onClick={(dl)=>this.props.chacon(this.state.textSearch)} style={{ width: '100px' }}>Tim</div>
                            <div className="container">
                                <div className="btn btn-info" onClick={()=>this.props.ketnoi()} style={{ width: '150px' }}>Them NSD</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    <hr />
                </div>
            </div>

        );
    }
}

export default Search;