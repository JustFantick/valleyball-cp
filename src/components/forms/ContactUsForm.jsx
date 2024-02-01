'use client'
import React from 'react'
import styles from './forms.module.scss'
import { useFormState, useFormStatus } from "react-dom";
import { contactUsFormAction } from '@/server-actions/actions';

const initialState = {
	message: "",
}

const ContactUsForm = () => {
	const { pending } = useFormStatus();
	const [state, formAction] = useFormState(contactUsFormAction, initialState);

	return (
		<form className={styles.form} action={formAction}>
			<p>Поля позначені * обов'язкові</p>
			<label className={styles.form__field}>
				Ваше ім'я*
				<input type="text" name='name' required />
			</label>

			<label className={styles.form__field}>
				Телефон*
				<input type="tel" name='tel' required
					pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
					title='Некоректно введений номер телефону'
				/>
			</label>

			<label className={styles.form__field}>
				Електронна адреса*
				<input type="email" name='email'
					required
					pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
					title='Некоректно введена поштова адреса'
				/>
			</label>

			<label className={styles.form__field}>
				Повідомлення
				<textarea name='message'></textarea>
			</label>

			<button type='submit'
				className={styles.form__submit}
				aria-disabled={pending}
			>
				Відправити
			</button>

			<p>{state?.message}</p>

		</form>
	)
}

export default ContactUsForm