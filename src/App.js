import { ProductInfo } from './ProductInfo';
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo';

function App() {
	return (
		<>
		<ResourceLoader resourceUrl="/users/100" resourceName="user">
			<UserInfo />
		</ResourceLoader>
		<hr />
		<ResourceLoader resourceUrl="/products/2000" resourceName="product">
			<ProductInfo />
		</ResourceLoader>
		</>
	);
}

export default App;
