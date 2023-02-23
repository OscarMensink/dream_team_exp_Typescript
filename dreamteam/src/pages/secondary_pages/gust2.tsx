import React from "react";
//import Button from "@components/ui/Button";
//import { Button } from "../components/Button";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
type Props = {};

function Gust2() {
	return (
		<div>
			<h1>Gust2</h1>
            <Link
				href="../gust"
				className={styles.card}
				rel="noopener noreferrer"
			>
			    <button>Test Button</button>
            </Link>
		</div>
	);
}

export default Gust2;
