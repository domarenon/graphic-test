import { useEffect, useState } from "react";
import axios from "axios";

const useGetUserList = (API, token) => {
    const [userList, setUserList] = useState([]);

	useEffect ( async () => {
		const response = await axios.get(API,{headers: {'Authorization': token}});
		setUserList(response.data);
	}, []);
    return userList;
}

export default useGetUserList;