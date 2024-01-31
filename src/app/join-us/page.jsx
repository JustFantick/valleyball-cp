import React from 'react'
import styles from './page.module.scss'
import JoinUsForm from '@/components/forms/JoinUsForm'

const JoinUsPage = () => {
	return (
		<main className={styles.joinUsPage}>
			<h1>Хочете приєнатися?</h1>
			<p>Заповніть невеличку анкету</p>

			<JoinUsForm />

		</main>
	)
}

export default JoinUsPage