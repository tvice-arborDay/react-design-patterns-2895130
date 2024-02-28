import React, { useState } from "react";
import { ControlledOnboardingFlow} from "./ControlledOnboardingFlow";

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
	<h1>Step 3: Senior Discount</h1>
	<p>Congratulations you qualify for our senior discout!!</p>
	<button onClick={() => goToPrevious({})}>Previous</button>
	<button onClick={() => goToNext({})}>Next</button>
	</>
);
const StepFour = ({ goToPrevious, goToNext }) => (
	<>
	<h1>Step 4: Hair Color</h1>
	<input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput} />
	<button onClick={() => goToPrevious({ hairColor: hairColorInput.current.value })}>Previous</button>
	<button onClick={() => goToNext({ hairColor: hairColorInput.current.value })}>Submit</button>
	</>
);

function App() {
	const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

	const onNext = stepData => {
        setOnboardingData({ ...onboardingData, ...stepData });
		if (currentIndex < 3) {
			setCurrentIndex(currentIndex + 1);
		}
    }

	const onPrevious = stepData => {
		setOnboardingData({ ...onboardingData, ...stepData });
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	}

	return (
		<>
		<ControlledOnboardingFlow 
			currentIndex={currentIndex}
			onNext={onNext}
			onPrevious={onPrevious}
		>
			<StepOne />
			<StepTwo />
			{onboardingData.age >= 62 && <StepThree />}
			<StepFour />
		</ControlledOnboardingFlow>
		</>
	)
}

export default App;
