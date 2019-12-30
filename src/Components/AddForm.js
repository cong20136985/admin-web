import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhsua: true
        }
    }
    // hienthiNut = () => {
    //     if (this.state.trangThaiChinhsua === true) {
    //         return <div onClick={() => this.setTrangthai()} className="btn btn-block btn-outline-secondary" >Dong lai</div>
    //     } else {
    //         return <div onClick={() => this.setTrangthai()} className="btn btn-block btn-outline-info">Them moi</div>
    //     }
    // }
    setTrangthai = () => {
        this.setState({
            trangThaiChinhsua: !this.state.trangThaiChinhsua
        });
    }

    showFormAdd = () => {
        if (this.props.trangThaiChinhsua === true) {

            return  <div className="col"><div className="card border-info mb-3">
                <div className="card-header text-center">Them moi</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <label>Ten</label>
                        <input type="text" className="form-control" placeholder="Nhap ten" />
                        <label>Dia chi</label>
                        <input type="text" className="form-control" placeholder="Nhap dia chi" />
                        <label>Chon quyen</label>
                        <div className="form-group">
                            <select className="form-control form-control-sm" >
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary" >Them moi</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                
        }
    }

    render() {
        //console.log(this.props.trangthai);
        return (
           
                <div>

                    {this.showFormAdd()}


                </div>

        );
    }
}

export default AddForm;