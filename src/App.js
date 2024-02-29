import { printProps } from "./PrintProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);

function App() {
	return (
		<UserInfoWrapped a={1} b="Hello world" c={{name: "Treyvor"}}></UserInfoWrapped>
	);
}

export default App;
