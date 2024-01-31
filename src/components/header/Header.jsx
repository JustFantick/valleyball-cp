'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomLink from '../custom-link/CustomLink'
import styles from './header.module.scss'

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function definedeviceType() {
		if (window.innerWidth < 650) {
			setIsMobile(true);
		} else { setIsMobile(false) }
	}

	useEffect(() => {
		definedeviceType();

		window.addEventListener("resize", definedeviceType);
	}, []);

	const Nav = {
		desktop:
			<nav className={styles.header__nav}>
				<CustomLink href="/">Головна</CustomLink>
				<CustomLink href="/achievements">Досягнення</CustomLink>
				<CustomLink href="/schedule">Розклад</CustomLink>
				<CustomLink href="/contacts">Контакти</CustomLink>
			</nav>,
		mobile:
			<>
				<button type='button' title='menu-burger'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className={styles.menuBurger}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav className={styles.mobileNav}
					data-isopen={isMenuOpen}
					onClick={() => setIsMenuOpen(false)}
				>
					<CustomLink href="/">Головна</CustomLink>
					<CustomLink href="/achievements">Досягнення</CustomLink>
					<CustomLink href="/schedule">Розклад</CustomLink>
					<CustomLink href="/contacts">Контакти</CustomLink>
				</nav>

			</>
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__body}>
				<Link href="/">
					<Image src="/logo.jpg" width={46} height={46} alt='logo-image' />
				</Link>

				{isMobile ? Nav.mobile : Nav.desktop}

			</div>


		</header>
	)
}

export default Header