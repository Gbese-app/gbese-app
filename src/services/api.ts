// This file talks to the backend server
import axios from 'axios'
import { FormData, IRegisterUser, IWithdrawFunds, KYCForm } from '../types/general'
import { DebtRequestFilters } from '../types/debtRequest.type'

type FormDataNot = {
  title: string
  content: string
}

const BASE_URL = 'https://gbese-backend.onrender.com/api/v1/'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

const axiosInstanceWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor to include the bearer token in the header
axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    // Retrieve the token gotten back from the login stored in the local Storage
    config.withCredentials = true
    return config // Return the modified config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// POST Requests

// Auth
export const loginUser = async (data: FormData) => {
  return await axiosInstance.post('auth/login', data)
}

export const registerUser = async (data: IRegisterUser) => {
  return await axiosInstance.post('auth/register', data)
}

// users
export const UpdateUserDetails = async (data: KYCForm) => {
  return await axiosInstanceWithToken.patch('users/me', data)
}

// Debt Request
export const createDebtRequest = async (data: FormDataNot) => {
  return await axiosInstanceWithToken.post('debt-requests', data)
}

export const updateDebtRequest = async (data: any, debtRequestId: string) => {
  return await axiosInstanceWithToken.post(`debt-requests/:${debtRequestId}`, data)
}

// Account
export const peerTransfer = async () => {
  return await axiosInstanceWithToken.post(`accounts/transfer`)
}

export const withdrawFunds = async (data: IWithdrawFunds) => {
  return await axiosInstanceWithToken.post(`accounts/withdraw`, data)
}

export const disableAccount = async () => {
  return await axiosInstanceWithToken.patch(`accounts/disable`)
}

export const enableAccount = async () => {
  return await axiosInstanceWithToken.patch(`accounts/enable`)
}

// GET Requests
// auth
export const verifyEmail = async (token: string) => {
  if (!token) token = ''
  return await axiosInstance.get(`auth/verify-email?token=${token}`)
}

// users
export const getUserDetails = async () => {
  return await axiosInstanceWithToken.get(`users/me`)
}

export const searchUser = async (search: string) => {
  return await axiosInstanceWithToken.get(`users/search?search=${search}`)
}

// Debt Request
export const getUserDebtRequests = async (filters: DebtRequestFilters) => {
  const response = await axiosInstanceWithToken.get(
    `debt-requests?${new URLSearchParams(filters as unknown as Record<string, string>).toString()}`
  )
  return response.data
}

export const getAllDebtRequests = async () => {
  return await axiosInstanceWithToken.get('debt-requests/all')
}

// Account
export const getMyAccount = async () => {
  return await axiosInstanceWithToken.get(`accounts/me`)
}

export const getAnAccount = async (accountId: string) => {
  return await axiosInstanceWithToken.get(`accounts/:${accountId}`)
}

// Transactions
export const getTransaction = async () => {
  return await axiosInstanceWithToken.get(`transactions`)
}

export const getTransactionByRef = async (reference: string) => {
  return await axiosInstanceWithToken.get(`transactions/:${reference}`)
}

export const logoutUser = async () => {
  const response = await axiosInstanceWithToken.get(`auth/logout`)
  return response.data
}
