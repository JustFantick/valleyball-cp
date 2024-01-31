import React from 'react'
import styles from './page.module.scss'
import CustomLink from '@/components/custom-link/CustomLink';

const groups = [
	{ text: 'Початкова', colorScheme: 'frst' },
	{ text: 'Любительська', colorScheme: 'scnd' },
	{ text: 'Продвинута', colorScheme: 'thrd' },
	{ text: 'Професійна', colorScheme: 'frth' }
];

const tableData = [
	{
		time: '08:00-10:30', mon: groups[0], tue: groups[3], wed: groups[2], thu: groups[0], fri: groups[1], sat: groups[3],
	},
	{
		time: '08:00-10:30', mon: groups[1], tue: groups[0], wed: groups[3], thu: groups[2], fri: groups[0], sat: groups[1],
	},
	{
		time: '08:00-10:30', mon: groups[2], tue: groups[1], wed: groups[0], thu: groups[3], fri: groups[2], sat: groups[0],
	},
	{
		time: '08:00-10:30', mon: groups[3], tue: groups[2], wed: groups[1], thu: groups[0], fri: groups[3], sat: groups[2],
	}
]

const SchedulePage = () => {
	return (
		<main className={styles.schedulePage}>
			<h1>Наша секція має наступні групи</h1>

			<div className={styles.groupTypes}>
				{groups.map((group, id) => (
					<div key={id} className={styles.groupTypes__item} data-color={group.colorScheme}>{group.text}</div>
				))}
			</div>

			<p>Кожна група вміщає у собі 24 гравця не залежно від статі.</p>

			<div className={styles.tableSection}>
				<div className={styles.tableSection__title}>Розклад занять по групам</div>

				<table className={styles.schedule}>
					<thead>
						<tr>
							<th>Час</th>
							<th>Понеділок</th>
							<th>Вівторок</th>
							<th>Середа</th>
							<th>Четвер</th>
							<th>П'ятниця</th>
							<th>Субота</th>
						</tr>
					</thead>

					<tbody>
						{tableData.map((row, id) => (
							<tr key={id}>
								<td data-color='default'>{row.time}</td>
								<td data-color={row.mon.colorScheme}>{row.mon.text}</td>
								<td data-color={row.tue.colorScheme}>{row.tue.text}</td>
								<td data-color={row.wed.colorScheme}>{row.wed.text}</td>
								<td data-color={row.thu.colorScheme}>{row.thu.text}</td>
								<td data-color={row.fri.colorScheme}>{row.fri.text}</td>
								<td data-color={row.sat.colorScheme}>{row.sat.text}</td>
							</tr>
						))}

					</tbody>

				</table>

			</div>

			<CustomLink href="/join-us">Записатися</CustomLink>

		</main>
	)
}

export default SchedulePage