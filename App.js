import React from 'react'
import "./App.css"
import EnhancedComponent from './React-Hoc/Hoc';

const App =({show, handleclick})=> {
	return <button onClick={handleclick}>{show}</button>
}


export default EnhancedComponent(App);
