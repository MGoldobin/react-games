import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../style/Pairs/Pairs.css'

function shuffle(array) {
	array.sort(() => Math.random() - 0.5)
}

const arr = [
	{ name: "JS", url: "./JS.png" },
	{ name: "Python", url: "./Pethon.png" },
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
		<div className="pairs">
			<div className="pairs__header">
				<NavLink className="pairs__backBtn" to="/"></NavLink>
				<h1 className="pairs__title">Find  a couple</h1>
			</div>
			{/*
				pairs.map((pair)=> (
					<div className="pairs__" key={pair.name}></div>
				))*/
			}
		</div>
	)
}

export default Pairs