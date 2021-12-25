import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Pairs.module.css'

function shuffle(array) {
	array.concat(array).sort(() => Math.random() - 0.5)
}

const arr = [
	{ name: "JS", url: "./JS.png" },
	{ name: "Python", url: "./Python.png" },
	{ name: "C#", url: "./C#.jpg" },
	{ name: "C++", url: "./C++.jpg" },
	{ name: "React", url: "./React.png" },
	{ name: "PHP", url: "./PHP.png" },
	{ name: "CSS", url: "./CSS.jpg" },
	{ name: "HTML", url: "./HTML.png" }
]

const Pairs = () => {
	document.title = "Find a couple"
	//const [pairs, setPairs] = useState(shuffle(arr))


	return (
		<div className={styles.Pairs}>
			<div className={styles.Header}>
				<NavLink className={styles.BackBtn} to="/"></NavLink>
				<h1 className={styles.Title}>Find  a couple</h1>
			</div>
			<div className={styles.Field}>
				{
					shuffle(arr).map((pair, index) =>
						<div className={styles.Card} key={index}></div>
					)
				}
			</div>
		</div>
	)
}

export default Pairs