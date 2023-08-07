import { useState } from "react";
import Users from "./components/users/Users";
import { USERS } from "./constants/users";

const App = () => {

	const [counter, setCounter] = useState(0);

	const handlePrev = () =>{
		setCounter((prevCounter) => (prevCounter - 1 + USERS.length) % USERS.length)
	};
	
	const handleNext = () =>{
		setCounter((prevCounter) => (prevCounter + 1) % USERS.length);
	};

	return (
		<>
			<Users
				key= {USERS[counter].userId}
				title= {USERS[counter].title}
				name= {USERS[counter].name}
				username = {USERS[counter].username}
				email= {USERS[counter].email}
				profileImage= {USERS[counter].profileImage}
			/>

			<button onClick={handlePrev}>Previous</button>
			<button onClick={handleNext}>Next</button>
		</>
	);
};


export default App;
