import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"



const useCart = ()=>{

    const {user} = useContext(AuthContext)


    const token = localStorage.getItem()

    const { refetch, data:cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts/${user?.email}`)
            return response.json()
          },
      })

      return [cart, refetch]

}

export default useCart