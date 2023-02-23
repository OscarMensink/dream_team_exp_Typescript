import React from "react";
import styled from "styled-components";
//import Button from "@components/ui/Button";
//import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "../components/Button";
import { ComponentExample } from "../../src/components/ComponentExample";
type Props = {};

function Gust() {

    const test = "hahhha";

	return (
		<div>
			<DivContainer><h1>Gust</h1></DivContainer>
			<Link
				href="/secondary_pages/gust2"
				className={styles.card}
				rel="noopener noreferrer"
			>
				<button>Test Button</button>
			</Link>
			<Link
				href="/"
				className={styles.card}
				rel="noopener noreferrer"
			>
				<Button>A big ass button</Button>
			</Link>
            {test}
			<ComponentExample />
		</div>
	);
}
const DivContainer = styled.div`
	background-color: #4caf50; /* Green */
`;
export default Gust;