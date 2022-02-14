import React, { Component } from 'react';
import tawkTo from "tawkto-react";
const tawkToPropertyId = '6177412786aee40a573850ac'
const tawkToKey = '1fistd1ui'

class TawkChatComponent extends Component{
	componentDidMount(){
		tawkTo(tawkToPropertyId, tawkToKey)
	}
    render() {
        return (
        <div>
    
        </div>)
        
    }

     
      
}
export default TawkChatComponent;