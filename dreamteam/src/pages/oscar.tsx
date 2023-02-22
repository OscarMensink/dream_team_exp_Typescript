import React from "react";
//import Button from "@components/ui/Button";
//import { Button } from "../components/Button";
import { Button } from "../components/Button";
import { ComponentExample } from "../../src/components/ComponentExample";
type Props = {};

function Oscar() {
	return (
		<div>
			<h1>Oscar</h1>
			<button>Test Button</button>
			<Button>A big ass button</Button>
			<ComponentExample />
		</div>
	);
}

export default Oscar;
