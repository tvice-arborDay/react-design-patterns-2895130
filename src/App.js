import axios from 'axios';
import { DataSource } from './DataSource';
import { UserInfo } from './UserInfo';

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

function App() {
	return (
		<>
		<DataSource 
			getDataFunc={ getServerData('/users/102') } 
			resourceName="user"
		>
			<UserInfo />
		</DataSource>
		</>
	);
}

export default App;
