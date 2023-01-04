import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetUserInfo from "../../hooks/useGetUserInfo";

const TeamProfileRedirect = () => {
    const redirect = useNavigate();
    const userInfo = useGetUserInfo();

    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3500/users/${userInfo.id}`)
            .then((res) => res.json())
            .then((data) => setUserData(data))
            .finally(data => console.log(data))
    },[userInfo.id])


     useEffect(() => {
        if (typeof userData === 'object' && Object.keys(userData).length !== 0) {
           userData?.team !== "null" ? redirect(`/teamProfile/${userData?.team}`) : redirect(`/teamProfile/createTeam`);
        }
    },[redirect,userData?.team, userData])
}

export default TeamProfileRedirect