import React, { Component } from 'react'

class SerieList extends React.Component {
    render() {
        return (
            <div className="serie-list">
            <h2>Series{this.props.name}</h2>
            <ul>
            <li>GoT</li>
            <li>Mr Robot</li>
            <li>My Hero Acadomia</li>
            </ul>
        
            </div>
            
            );
        }
    }
    
    export default SerieList