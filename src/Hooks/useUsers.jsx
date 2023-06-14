import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useUsers = () => {
  const { user } = useContext(AuthContext);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/users");
    return res.json();
  });

  const requireUser = users.find((ele) => ele.email === user?.email);
  return [users, refetch, requireUser];
};

export default useUsers;
