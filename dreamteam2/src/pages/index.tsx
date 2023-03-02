import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>src/pages/index.tsx</code>
					</p>
					<div>
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{" "}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
					<div className={styles.thirteen}>
						<Image
							src="/thirteen.svg"
							alt="13"
							width={40}
							height={31}
							priority
						/>
					</div>
				</div>

				<div className={styles.grid}>
					<Link
						href="/artur"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Artur </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>

					<Link
						href="/nigel"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Nigel </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>

					<Link
						href="/cerine"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Cerine </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>

					<Link
						href="/oscar"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Oscar </h2>
						<p className={inter.className}>
							Oscars incredible page using components etcetera woo hoo
						</p>
					</Link>

					<Link
						href="/gust"
						className={styles.card}
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Gust </h2>
						<p className={inter.className}>
							NSFW page don't go here.
						</p>
					</Link>

					<Link
						href="/Jippe"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Jippe </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>

					<Link
						href="/Joost"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Joost </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>

					<Link
						href="/Kasper"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Kasper </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>
					<Link
						href="/Nasr"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>Nasr </h2>
						<p className={inter.className}>
							Add something cool here to practice a merge REQUEST
						</p>
					</Link>
				</div>
			</main>
		</>
	);
}