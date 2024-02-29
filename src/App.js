import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, '100');

function App() {
	return (
		<UserInfoWithLoader/>
	);
}

export default App;
