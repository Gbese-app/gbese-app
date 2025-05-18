import { useQuery } from '@tanstack/react-query'
import {
  getUserDebtRequests,
  getMyAccount,
  getTransaction,
  getUserDetails,
  getUserLoans,
} from './api'
import { DebtRequestFilters, LoanFilters } from '../types/debtRequest.type'

export const useGetMyAccount = () => {
  return useQuery({
    queryKey: ['userAccount'],
    queryFn: () => getMyAccount(),
  })
}

export const useGetMyUserDetails = () => {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: () => getUserDetails(),
  })
}

export const useGetMyTransactions = () => {
  return useQuery({
    queryKey: ['my-transactions'],
    queryFn: () => getTransaction(),
  })
}

export const useDebtRequests = (filters?: DebtRequestFilters) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['debt-requests'],
    queryFn: () => getUserDebtRequests(filters),
  })

  return { debtRequests: data, isDebtRequestsLoading: isLoading, debtRequestsError: error }
}

export const useLoans = (filters?: LoanFilters) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['loans'],
    queryFn: () => getUserLoans(filters),
  })

  return { loans: data, isLoansLoading: isLoading, loansError: error }
}

export const useLoan = (filters?: LoanFilters) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['loans'],
    queryFn: () => getUserLoans(filters),
  })

  return { loans: data, isLoansLoading: isLoading, loansError: error }
}
