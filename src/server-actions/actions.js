'use server'
import prisma from "../../lib/prisma"
import { revalidatePath } from "next/cache"

export async function addRequestToDb(prevState, formData) {
	const userClientData = {
		name: formData.get('name'),
		email: formData.get('email'),
		age: formData.get('age'),
		group: formData.get('group'),
	}

	revalidatePath('/schedule');

	try {
		const createdRow = await prisma.players.create({
			data: {
				name: userClientData.name,
				email: userClientData.email,
				group: userClientData.group,
			}
		});

		return { success: true, message: `Заявку на ім'я ${userClientData.name} успішно прийнято!` };

	} catch (e) {
		return { success: false, error: e, message: `Сталася помилка на боці серверу :(` }
	}
}

export async function contactUsFormAction(prevState, formData) {
	await setTimeout(() => { }, 1000);

	return {
		success: true,
		message: "Ваше повідомлення успішно надіслано, наша служба підтримки зв'яжеться з вами найближчим часом"
	};
}