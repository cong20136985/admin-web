import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import AddForm from './AddForm';
import DataUser from './data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai: true,
      data: DataUser,
      trangThaiChinhsua: true,
      searchText:''
    }
  }
  
  thongbao = () =>{alert("done!");}
  reverse = () => {
    this.setState({trangThaiChinhsua : !this.state.trangThaiChinhsua}
      
    )
  }

  getText = (dl) =>{
    this.setState({
      searchText:dl
    })
  }

  getUserUpdate = (user) =>{
    console.log(user);
    
  }

  getDataNewUser = (name,diachi,quyen) =>{
      var item ={};
      item.id =uuidv1();
      item.name = name;
      item.diachi = diachi;
      item.quyen = quyen;

      var items = this.state.data;
      items.push(item);
      this.setState({
        data:items
      })
  }


  render() {

    const {data, searchText} = this.state;
    let ketqua;
    if(searchText !== ''){
      // data.forEach((item) => {
      //   if(item.name.indexOf(searchText)!=-1){
      //     ketqua.push(item);
      //   }
      // });
      ketqua = data.filter((item)=>item.name.indexOf(searchText) !== -1)
    } else{
      ketqua = data;
    }
    



    //console.log(this.state.data);
    //alert("hello "+ this.state.data[1].name);
    return (
      <div >
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketnoi={()=>this.reverse()} 
              chacon={(dl)=>this.getText(dl)} />
              <Table edit={(user)=>this.getUserUpdate(user)} dulieu={ketqua}/>
              <AddForm add = {(name,diachi,quyen)=>this.getDataNewUser(name,diachi,quyen)} trangthai={this.state.trangthai} trangThaiChinhsua={this.state.trangThaiChinhsua}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
