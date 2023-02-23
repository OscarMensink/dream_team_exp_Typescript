import React from "react";
import styled from "styled-components";
//import Button from "@components/ui/Button";
//import { Button } from "../components/Button";
import { Button } from "../components/Button";
import { ComponentExample } from "../../src/components/ComponentExample";
type Props = {};

function Gust() {
	return (
		<div>
			<DivContainer><h1>Gust</h1></DivContainer>
			<button>Test Button</button>
			<Button>A big ass button</Button>
			<ComponentExample />
		</div>
	);
}
const DivContainer = styled.div`
	background-color: #4caf50; /* Green */
`;
export default Gust;