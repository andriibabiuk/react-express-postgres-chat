import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	useEffect(() => {
		const getMessages = async () => {
			if (!selectedConversation) return;
			setLoading(true);
			setMessages([]);
			try {
				const response = await fetch(
					`/api/messages/${selectedConversation.id}`,
				);
				const data = await response.json();
				if (!response.ok) {
					throw new Error(data.error);
				}
				setMessages(data);
			} catch (error: any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getMessages();
	}, [selectedConversation, setMessages]);
	return {
		loading,
		messages,
	};
};

export default useGetMessages;
