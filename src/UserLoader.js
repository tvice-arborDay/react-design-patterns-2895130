import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const UserLoader = ({ userid, children }) => {
	const [user, setUser] = useState(null);
    const [usersList, setUsersList] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await axios.get("/users" + ( userid ? `/${userid}` : ""));
            if (userid) {
                setUsersList([response.data]);
            } else {
                setUsersList(response.data);
            }
		})();
	}, [userid]);

	return (
		<>
		{usersList.length ? usersList.map(user => {
			return React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { user });
				}
				return child;
			});
		})
		: <h1>Loading...</h1>}
		{/* {React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { user });
			}

			return child;
		})} */}
		</>
	);
}