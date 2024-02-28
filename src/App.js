import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';

function App() {
	return (
		<>
		<UserLoader>
			<UserInfo />
		</UserLoader>
		{/* <UserLoader userid={'101'}>
			<UserInfo />
		</UserLoader>
		<UserLoader userid={'102'}>
			<UserInfo />
		</UserLoader> */}
		</>
	);
}

export default App;
