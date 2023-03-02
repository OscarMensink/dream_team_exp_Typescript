import { Button } from "../components/Button";
import { ComponentExample } from "../../src/components/ComponentExample";
import styles from "../styles/Home.module.css";
import Link from "next/link";
type Props = {};

function gust() {
	return (
		<div>
			<h1>Gust</h1>
            <Link
                href="/"
                className={styles.card}
                rel="noopener noreferrer"
            >
			<button>Back</button>
            </Link>
            <Link
                href="/secondaryPages/gust2"
                className={styles.card}
                rel="noopener noreferrer"
            >
			<Button>Gust2</Button>
            </Link>
			<ComponentExample />
		</div>
	);
}

export default gust;
