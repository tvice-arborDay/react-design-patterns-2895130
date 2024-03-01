import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";

function App() {
	return (
		<>
		<UserInfo userId={'100'} />
		<UserInfo userId={'101'} />
		<UserInfo userId={'102'} />
		<hr/>
		<ProductInfo productId={'2000'} />
		<ProductInfo productId={'2001'} />
		<ProductInfo productId={'2002'} />
		</>
	);
}

export default App;
