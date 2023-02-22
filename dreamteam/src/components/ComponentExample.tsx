import React from "react";
import styled from "styled-components";

//When making a component, you can use the following template:
//1. Import the react library. (Must have)
//2. Import the styled components library. This allows you to apply CSS in the file itself, essentially making smaller components that are relevant to your page. (Const ButtonContainer = ...)
//3. Create an interface for the props. This is essentially setting this... inputs for your component. (interface ButtonProps ...)
//4. Create a function that returns the component. (Const Button = () ...)
type ButtonProps = {
	componentString?: string; //Note the question mark here. This means that this prop is optional. Which needs to be considered in the component. If not present it will return a null. If you use this value, ensure you have an if statement to deal with the null.
};

//This is a 'functional' component. which means it needs input. In brackets ( and { the used props should be shown. In this case we are using the interface ButtonProps.
//Note that we have to export our function. Otherwise importing won't work elsewhere.
//You can export multiple components from a single file. But it is best practice to keep them in separate files.
export const ComponentExample = ({ componentString }: ButtonProps) => {
	return <ComponentContainer>Button {componentString}</ComponentContainer>;
};

//OMG! CSS in the file itself. This is a styled component.
//If you thought the style was amazing you could export it as well!
const ComponentContainer = styled.button`
	background-color: #c82164;
`;

//Note that htis component will have no children.
