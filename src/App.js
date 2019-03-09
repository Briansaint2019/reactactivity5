import PropTypes from 'prop-types'; 
import React from 'react'; 
import ReactDOM from 'react-dom'; 

// Component 
class ComponentExample extends React.Component{ 
	render(){ 
		return( 
				<div> 
					{/* printing all props */} 
					<h1> 
						{this.props.arrayProp} 
						<br /> 

						{this.props.stringProp} 
						<br /> 

						{this.props.numberProp} 
						<br /> 

						{this.props.boolProp} 
						<br /> 
					</h1> 
				</div> 
			); 
	} 
} 

// validating prop types 
ComponentExample.propTypes = { 
	arrayProp: PropTypes.array, 
	stringProp: PropTypes.string, 
	numberProp: PropTypes.number, 
	boolProp: PropTypes.bool, 
} 

// creating default props 
ComponentExample.defaultProps = { 

	arrayProp: ['ox'+' '+'Crane'+' '+'Tiger'], 
	stringProp: "poop on your shoe", 
	numberProp: "69", 
	boolProp: true, 
} 

ReactDOM.render( 
	<ComponentExample />, 
	document.getElementById("root") 
); 

export default ComponentExample;