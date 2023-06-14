import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"
// import useAxiosSecure from "./useAxiosSecure"



const useCart = ()=>{

    const {user} = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure()

    const token = localStorage.getItem('access-token')

    const { refetch, data:cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch (`https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/carts?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            return response.json()
          },
      })

      return [cart, refetch]

}

export default useCart