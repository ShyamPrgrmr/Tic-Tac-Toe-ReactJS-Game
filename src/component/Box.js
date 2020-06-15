import React from 'react';
import icons from './../icons.svg';

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {props:this.props,data:this.props.data,id:this.props.id};
        this.boxClick = this.boxClick.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({props:nextProps});
    }
    boxStyle={
        height:'100%',
        width:'100%',
        backgroundColor:'#e68b3c',
        display:'flex',
        justifyContents:'center',
        alignItems:'center',
        padding:'10px'
      }
    boxClick=(e)=>{
        e.preventDefault();
        this.state.props.onclick(this.state.props.id);
    }

    doLoadImage=()=>{
        let id = this.props.id;
        if(this.state.data[id].loadImg){
            if(this.state.data[id].whichImg===1){
                return(<use xlinkHref={icons+'#icon-cross'}></use>)
            }
            else if(this.state.data[id].whichImg===2){
                return(<use xlinkHref={icons+'#icon-radio-unchecked'}></use>)
            }
        }
    }

    render() { 
        return (
        <div style={this.boxStyle} onClick={this.boxClick}>
            <svg>
                {this.doLoadImage()}
            </svg>
        </div>);
    }
}
 
export default Box;