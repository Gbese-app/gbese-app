import { useQuery } from "@tanstack/react-query";
import {
    getMyAccount,
    getTransaction,
    getUserDetails
} from "./api";

export const useGetMyAccount = () => {
  return useQuery({
    queryKey: ["userAccount"],
    queryFn: () => getMyAccount(),
  });
};


export const useGetMyUserDetails = () => {
    return useQuery({
      queryKey: ["current-user"],
      queryFn: () => getUserDetails(),
    });
  };
  
  export const useGetMyTransactions= () => {
    return useQuery({
      queryKey: ["my-transactions"],
      queryFn: () => getTransaction(),
    });
};
  