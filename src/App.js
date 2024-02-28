import React from "react";
import { UncontrolledOnboardingFlow} from "./UncontrolledOnboardingFlow";

const nameInput = React.createRef();
const ageInput = React.createRef();
const hairColorInput = React.createRef();


const StepOne = ({ goToPrevious, goToNext }) => (
	<>
	<h1>Step 1: Name</h1>
	<input name="name" type="text" placeholder="Name" ref={nameInput} />
	<button onClick={() => goToPrevious({ name: nameInput.current.value })}>Previous</button>
	<button onClick={() => goToNext({ name: nameInput.current.value })}>Next</button>
	</>
);
const StepTwo = ({ goToPrevious, goToNext }) => (
	<>
	<h1>Step 2: Age</h1>
	<input name="age" type="number" placeholder="Age" ref={ageInput} />
	<button onClick={() => goToPrevious({ age: Number(ageInput.current.value) })}>Previous</button>
	<button onClick={() => goToNext({ age: Number(ageInput.current.value) })}>Next</button>
	</>
);
const StepThree = ({ goToPrevious, goToNext }) => (
	<>
	<h1>Step 3: Hair Color</h1>
	<input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput} />
	<button onClick={() => goToPrevious({ hairColor: hairColorInput.current.value })}>Previous</button>
	<button onClick={() => goToNext({ hairColor: hairColorInput.current.value })}>Submit</button>
	</>
);

function App() {
	return (
		<>
		<UncontrolledOnboardingFlow onFinish={data => {
			console.log('Finished onboarding with data:', data);
			alert('Finished onboarding with data');
		}}>
			<StepOne />
			<StepTwo />
			<StepThree />
		</UncontrolledOnboardingFlow>
		</>
	)
}

export default App;
