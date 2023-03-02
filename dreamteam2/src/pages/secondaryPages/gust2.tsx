import { Button } from "../../components/Button";
import { ComponentExample } from "../../components/ComponentExample";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import GustsComponent from "rootalias/components/GustsComponent";

function Gust2() {
	return (
		<div>
			<h1>Gust2</h1>
			<Link
                href="../gust"
                className={styles.card}
                rel="noopener noreferrer"
            >
			<button>Back</button>
            </Link>
			<Button>A big ass button</Button>
			<ComponentExample componentString="component"/>
			<GustsComponent dumbwords="reeeeeeeeeeeeeeeeee" />
		</div>
	);
}

export default Gust2;
