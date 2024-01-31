import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

const achievementsData = [
	{
		imgName: 'achievements_1.jpg',
		date: '(29 Січня 2024)',
		text: 'Цей день знаменує перемогу нашої команди під прихистом нашого тренера у районних змаганнях серед професіоналів за звання "Чемпіони Січня". Привітаємо чемпіонів!'
	},
	{
		imgName: 'achievements_2.jpg',
		date: '(13 Грудня 2023)',
		text: 'Наша група полу-професіоналів здобула одну з призових місць, а саме 3 місце серед 12 районних команд. Привітаємо їх!'
	},
	{
		imgName: 'achievements_3.jpg',
		date: '(09  Листопада 2023)',
		text: 'Привітаємо нашу молодшу групу з їх першим турніром і першими перемогами. Діти виклалися на повну і це принесло свої результати. Під час вручення нагород вони виглядали виснаженими але щасливими. Привітаємо початківців!'
	}
]

const AchievementsPage = () => {
	return (
		<main className={styles.achivementsPage}>
			<h1>Наші досягнення</h1>

			<ul className={styles.achivementsList}>
				{
					achievementsData.map((li, id) => (
						<li key={id} className={styles.achivementslistItem}>
							<div className={styles.achivementslistItem__img}>
								<Image src={`/${li.imgName}`} alt={li.imgName}
									fill
									sizes="(max-width: 515px) 90vw, (max-width: 1200px) 280px"
								/>
							</div>

							<div className={styles.achivementslistItem__textContent}>
								<time>{li.date}</time>
								<p>{li.text}</p>
							</div>

						</li>
					))
				}
			</ul>

		</main>
	)
}

export default AchievementsPage