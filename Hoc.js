import React from "react";
import { useState } from "react";

const EnhancedComponent = (OriginalComponent) => {
	
    const NewCompoenent  = () => {

	const [count, setCount]=useState(0)

		const handleClick = () => {
		setCount(count + 1);
		}


			return <OriginalComponent
				handleclick={handleClick}
				show={count} />

	}
	return NewCompoenent

}
export default EnhancedComponent


