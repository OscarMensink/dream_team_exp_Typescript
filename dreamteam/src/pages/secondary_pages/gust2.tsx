import React from "react";
//import Button from "@components/ui/Button";
//import { Button } from "../components/Button";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
type Props = {
    loadedtext:string
};

function Gust2( {loadedtext}:Props ) {
	return (
		<div>
			<h1>Gust2</h1>
            <Link
				href="../gust"
				className={styles.card}
				rel="noopener noreferrer"
			>
			    <button>Return NOW</button>
            </Link>
            {loadedtext}
		</div>
	);
}

export async function getStaticProps() {
    const loadedtext = "Just some random text as test"
    const apidata = "";
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        loadedtext,
      },
    }
  }

export default Gust2;
