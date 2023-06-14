import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  

  const { data: allClasses = [], refetch } = useQuery(["allClasses"], async () => {
    const res = await fetch("http://localhost:5000/allclasses");
    return res.json();
  });

  return [allClasses, refetch];
};

export default useAllClasses;