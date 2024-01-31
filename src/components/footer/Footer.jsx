import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import YouTubeIcon from '../../../public/youtube.svg'
import TwitterIcon from '../../../public/twitter.svg'
import FacebookIcon from '../../../public/facebook.svg'
import Link from 'next/link'


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__body}>
				<div>
					©2024 Unlimited power
				</div>

				<Link href="/">
					<Image src="/logo.jpg" width={30} height={30} alt='logo-img' />
				</Link>

				<div className={styles.socialLinks}>
					<Link href="https://www.youtube.com/" target='blank' className={styles.socialLinks__link}>
						<YouTubeIcon />
					</Link>
					<Link href="https://twitter.com/" target='blank' className={styles.socialLinks__link}>
						<TwitterIcon />
					</Link>
					<Link href="https://uk-ua.facebook.com/" target='blank' className={styles.socialLinks__link}>
						<FacebookIcon />
					</Link>
				</div>

			</div>

		</footer>
	)
}

export default Footer