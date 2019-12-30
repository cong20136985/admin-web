import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddForm from './AddForm';
import DataUser from './data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai: true,
      data: DataUser,
      trangThaiChinhsua: true
    }
  }
  
  thongbao = () =>{alert("done!");}
  reverse = () => {
    this.setState({trangThaiChinhsua : !this.state.trangThaiChinhsua}
      
    )
  }
  render() {
    //console.log(this.state.data);
    //alert("hello "+ this.state.data[1].name);
    return (
      <div >
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketnoi={()=>this.reverse()} />
              <Table dulieu = {this.state.data}/>
              <AddForm trangthai={this.state.trangthai} trangThaiChinhsua = {this.state.trangThaiChinhsua}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
