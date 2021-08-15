import React, { Component } from 'react'
import './Loading.css'

export class Loading extends Component {
    render() {
        return (
            <div className="loading">
               <img src="https://cms.qz.com/wp-content/uploads/2016/09/loading.gif?quality=75&strip=all&w=1900&h=1068" alt="Cargando" />
            </div>
        )
    }
}

export default Loading
