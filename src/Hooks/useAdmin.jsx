import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user,loading} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
   
    const token = localStorage.getItem('access-token')


    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch (`http://localhost:5000/users/admin/${user?.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;