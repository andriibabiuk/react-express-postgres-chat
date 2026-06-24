import {
	createContext,
	useContext,
	useEffect,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from 'react';

type AuthUserType = {
	id: string;
	fullName: string;
	email: string;
	profilePic: string;
	gender: string;
};

const AuthContext = createContext<{
	authUser: AuthUserType | null;
	setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
	isLoading: boolean;
}>({
	authUser: null,
	setAuthUser: () => {},
	isLoading: true,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuthContext must be used within a AuthContextProvider');
	}
	return context;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchAuthUser = async () => {
			try {
				const res = await fetch('/api/auth/me');
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.message);
				}
				setAuthUser(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchAuthUser();
	}, []);
	return (
		<AuthContext.Provider
			value={{
				authUser,
				setAuthUser,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
