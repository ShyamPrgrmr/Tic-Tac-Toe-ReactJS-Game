import React from 'react';
import './App.css';
import Box from './component/Box';

  /*Data Holders start*/
  class DataHolder{
    boxData = [false,false,false,false,false,false,false,false,false,false];
    boxAttacher = [0,0,0,0,0,0,0,0,0];
  }

  /*Data Holders end*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.currentPlayer=1;
    let attacher=[];
    
    for(let i=1;i<=10;i++){
      attacher.push({loadImg:false,whichImg:'1'});
    }
    this.DataHolder = new DataHolder();
    this.boxHolder =new DataHolder();
    this.state = {
      attacher:attacher,
      data:this.DataHolder,
      boxAttacher:this.boxHolder.boxAttacher
    }
   
  }

  /*styling start*/
  containerStyle = {
    height:'100vh',
    width:'100vw',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'1fr 1fr 1fr',
    gridGap:'5px',
    backgroundColor:'#b6f2ef'
  }
  
  /*styling end*/

  /*Initial start*/

  boxLoad=()=>{
    return(
    <React.Fragment>
      <Box id={1} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={2} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={3} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={4} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={5} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={6} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={7} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={8} onclick={this.boxClick} data={this.state.attacher}></Box>
      <Box id={9} onclick={this.boxClick} data={this.state.attacher}></Box>
    </React.Fragment>
    );
  }

  /*Initial end*/
 
  /*onClick Handler function Start*/
  
  boxClick = (boxNumber)=>{

    if(!this.state.data.boxData[boxNumber]){
      if(this.currentPlayer===1){
        let attacher = this.state.attacher;
        attacher[boxNumber] = {loadImg:true,whichImg:1}

        let newBoxAttacher = this.state.boxAttacher
        newBoxAttacher[boxNumber]=1;
        this.setState({attacher:attacher,boxAttacher:newBoxAttacher},()=>{
          this.checkWinning(boxNumber,this.currentPlayer);
          this.currentPlayer++; 
        })
         
      }else{
        let attacher = this.state.attacher;
        attacher[boxNumber] = {loadImg:true,whichImg:2}
        let newBoxAttacher = this.state.boxAttacher
        newBoxAttacher[boxNumber]=2;
        this.setState({attacher:attacher,boxAttacher:newBoxAttacher},()=>{
          this.checkWinning(boxNumber,this.currentPlayer);
          this.currentPlayer--;
        })
      }
      let DataHolder = this.state.data;
      DataHolder.boxData[boxNumber]=boxNumber;
      this.setState({data:DataHolder});
    }
    
  }
  
  /*onClick Handler function End*/

  /*Controller Function start*/
  checkWinning=(boxNumber,player)=>{
    if(boxNumber===1){
      if(this.state.boxAttacher[2]===player && this.state.boxAttacher[3]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[4]===player && this.state.boxAttacher[7]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[5]===player && this.state.boxAttacher[9]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===2){
      if(this.state.boxAttacher[1]===player && this.state.boxAttacher[3]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[5]===player && this.state.boxAttacher[6]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===3){
      if(this.state.boxAttacher[1]===player && this.state.boxAttacher[2]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[5]===player && this.state.boxAttacher[7]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[6]===player && this.state.boxAttacher[9]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===4){
      if(this.state.boxAttacher[1]===player && this.state.boxAttacher[7]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[5]===player && this.state.boxAttacher[6]===player){
        alert('player '+player+' Won');
      }
      
    }else if(boxNumber===5){
      if(this.state.boxAttacher[1]===player && this.state.boxAttacher[9]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[3]===player && this.state.boxAttacher[7]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[2]===player && this.state.boxAttacher[8]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[4]===player && this.state.boxAttacher[6]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===6){
      if(this.state.boxAttacher[3]===player && this.state.boxAttacher[9]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[4]===player && this.state.boxAttacher[5]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===7){
      if(this.state.boxAttacher[1]===player && this.state.boxAttacher[4]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[8]===player && this.state.boxAttacher[9]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[3]===player && this.state.boxAttacher[5]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===8){
      if(this.state.boxAttacher[7]===player && this.state.boxAttacher[9]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[2]===player && this.state.boxAttacher[5]===player){
        alert('player '+player+' Won');
      }
    }else if(boxNumber===9){
      if(this.state.boxAttacher[3]===player && this.state.boxAttacher[6]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[8]===player && this.state.boxAttacher[7]===player){
        alert('player '+player+' Won');
      }
      else if(this.state.boxAttacher[1]===player && this.state.boxAttacher[5]===player){
        alert('player '+player+' Won');
      }
    }
  }

  /*Controller Function end*/ 
  
  
  render() { 
    return(
    <div style={this.containerStyle}>
      {this.boxLoad()}
    </div>
    );
  }
}
 
export default App;