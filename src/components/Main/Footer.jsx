import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<a className={styles.Link} href="https://github.com/MGoldobin" target="blank">
				<img className={styles.Img} src="./GitHub.png" alt="GitHub" />
			</a>
		</footer>
	)
}

export default Footer