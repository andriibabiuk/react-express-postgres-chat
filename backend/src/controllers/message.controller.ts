import { Request, Response } from 'express';
import prisma from '../db/prisma.js';

export const sendMessage = async (req: Request, res: Response) => {
	try {
		const { message } = req.body;
		const receiverId = req.params.id as string;
		const senderId = req.user.id;
		let conversation = await prisma.conversation.findFirst({
			where: {
				participantIds: {
					hasEvery: [senderId, receiverId],
				},
			},
		});
		if (!conversation) {
			conversation = await prisma.conversation.create({
				data: {
					participantIds: {
						set: [senderId, receiverId],
					},
				},
			});
		}
		const newMessage = await prisma.message.create({
			data: {
				body: message,
				senderId,
				conversationId: conversation.id,
			},
		});
		if (newMessage) {
			conversation = await prisma.conversation.update({
				where: { id: conversation.id },
				data: {
					messages: {
						connect: { id: newMessage.id },
					},
				},
			});
		}

		res.status(201).json(newMessage);
	} catch (error: any) {
		console.error('Error in sendMessage', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
export const getMessages = async (req: Request, res: Response) => {
	try {
		const userToChatId = req.params.id as string;
		const senderId = req.user.id;
		const conversation = await prisma.conversation.findFirst({
			where: {
				participantIds: {
					hasEvery: [senderId, userToChatId],
				},
			},
			include: {
				messages: {
					orderBy: {
						createdAt: 'asc',
					},
				},
			},
		});
		if (!conversation) {
			return res.status(200).json([]);
		}
		res.status(200).json(conversation.messages);
	} catch (error: any) {
		console.error('Error in getMessages', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
