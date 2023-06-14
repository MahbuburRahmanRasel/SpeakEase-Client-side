import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  

  const { data: allClasses = [], refetch } = useQuery(["allClasses"], async () => {
    const res = await fetch("https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/allclasses");
    return res.json();
  });

  return [allClasses, refetch];
};

export default useAllClasses;