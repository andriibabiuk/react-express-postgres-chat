import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function useGetConversations() {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState<ConversationType[]>([]);
	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const response = await fetch('/api/messages/conversations');
				const data = await response.json();
				if (!response.ok) {
					throw new Error(data.message);
				}
				setConversations(data);
			} catch (error: any) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, []);
	return {
		loading,
		conversations,
	};
}

export default useGetConversations;
