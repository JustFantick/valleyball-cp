import React from 'react'
import styles from './page.module.scss'
import ContactUsForm from '@/components/forms/ContactUsForm'

const ContactsPage = () => {
	return (
		<main className={styles.contactsPage}>
			<h1>Зв’яжіться з нами</h1>

			<ContactUsForm />

			<div className={styles.details}>
				<div className={styles.details__item} data-color="frst">
					<h4>Адрес</h4>
					<p>вул. Жовтнева 3а</p>
				</div>

				<div className={styles.details__item} data-color="scnd">
					<h4>Телефон</h4>
					<a href="tel:+380986538575">+(380)986538575</a>
					<a href="tel:+380845952175">+(380)845952175</a>
				</div>

				<div className={styles.details__item} data-color="thrd">
					<h4>Години роботи</h4>
					<p>будні - з 08:00 до 18:00</p>
					<p>вихідні - з 08:16:30</p>
				</div>

				<div className={styles.details__item} data-color="frth">
					<h4>Електронна пошта</h4>
					<a href="mailto:something@e-mail.com">something@e-mail.com</a>
				</div>

			</div>

		</main>
	)
}

export default ContactsPage