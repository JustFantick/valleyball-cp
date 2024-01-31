import React from 'react'
import Link from 'next/link'
import styles from './customLink.module.scss'

const CustomLink = ({ href, children }) => {
	return (
		<Link href={href} className={styles.link}>
			{children}
		</Link>
	)
}

export default CustomLink