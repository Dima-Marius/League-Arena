import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetUserInfo from "../../hooks/useGetUserInfo";

const TeamProfileRedirect = () => {
    const redirect = useNavigate();
    const userInfo = useGetUserInfo();

     useEffect(() => {
        redirect(`/teamProfile/${userInfo.team}`)
    },[redirect,userInfo.team])
}

export default TeamProfileRedirect