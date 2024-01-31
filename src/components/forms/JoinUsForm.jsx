'use client'
import React from 'react'
import styles from './forms.module.scss'
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
	message: "",
}

const JoinUsForm = () => {
	//const { pending } = useFormStatus();
	//const [state, formAction] = useFormState(action, initialState);

	return (
		<form className={styles.form} action="">
			<label className={styles.form__field}>
				Ім'я, прізвище
				<input type="text" name='name' required />
			</label>

			<label className={styles.form__field}>
				Електронна адреса
				<input type="email" name='email'
					required
					pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
					title='Некоректно введена поштова адреса'
				/>
			</label>

			<label className={styles.form__field}>
				Вік
				<select name="age">
					<option value="kid">Тимчасовий карлик</option>
					<option value="teenager">Підліток</option>
					<option value="adult">Дорослий</option>
				</select>
			</label>

			<label className={styles.form__field}>
				Група
				<select name="group">
					<option value="beginners">Початкова</option>
					<option value="amateurs">Любительська</option>
					<option value="advanced">Продвинута</option>
					<option value="professionals">Професійна</option>
				</select>
			</label>

			<button type='submit'
				className={styles.form__submit}
			//aria-disabled={pending}
			>
				Надіслати заявку
			</button>

		</form>
	)
}

export default JoinUsForm