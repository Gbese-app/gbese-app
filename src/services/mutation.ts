import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createDebtRequest, loginUser, registerUser, UpdateUserDetails, withdrawFunds } from './api'
import { FormData, IWithdrawFunds, KYCForm } from '../types/general'
import { toast } from 'sonner'
import { useAuthContext } from '../hook/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { isAxiosError } from 'axios'
import { DebtRequestCreation } from '../types/debtRequest.type'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  return useMutation({
    mutationFn: (data: FormData) => loginUser(data),
    onSuccess(data) {
      const info = data?.data

      console.log(info.data)

      if (info.data.id) {
        toast.success('Login Successful')
        login(data?.data)
        setTimeout(() => {
          if (info.data.emailVerified && info.data.identityDocuments.length > 0) {
            navigate('/dashboard', { replace: true })
          } else {
            navigate('/kycstepper', { replace: true })
          }
        }, 1000)
      } else {
        toast.warning('Unauthorized, Login Failed')
      }
    },
    onError(error) {
      console.log(error)

      if (isAxiosError(error)) {
        const errorData = error.response?.data

        if (errorData?.errors) {
          const flattenedErrors: string[] = []

          // Loop through the errors object
          for (const key in errorData.errors) {
            const value = errorData.errors[key]

            // If the value is an object (e.g., nested like address.number), recurse or flatten
            if (typeof value === 'object' && value !== null) {
              for (const subKey in value) {
                flattenedErrors.push(value[subKey])
              }
            } else {
              flattenedErrors.push(value)
            }
          }

          // Display all errors as individual toasts
          flattenedErrors.forEach((errMsg) => {
            toast.error(errMsg)
          })

          return
        }
        if (errorData.message) {
          toast.error(errorData.message)
          return
        }

        // ✅ Or if there's a specific `code`
        if (errorData.code) {
          toast.error(`Error: ${errorData.code}`)
          return
        }
      }

      // fallback error
      toast.error('An unexpected error occurred')
    },
  })
}

export const useRegisterMutation = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: any) => registerUser(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['users-list'],
      })
      toast.success('Gbese User Created')

      setTimeout(() => {
        toast.success('Verify your email to login')
        navigate('/login', { replace: true })
      }, 1000)
    },
    onError(error) {
      console.log(error)

      if (isAxiosError(error)) {
        const errorData = error.response?.data

        if (errorData?.errors) {
          const flattenedErrors: string[] = []

          // Loop through the errors object
          for (const key in errorData.errors) {
            const value = errorData.errors[key]

            // If the value is an object (e.g., nested like address.number), recurse or flatten
            if (typeof value === 'object' && value !== null) {
              for (const subKey in value) {
                flattenedErrors.push(value[subKey])
              }
            } else {
              flattenedErrors.push(value)
            }
          }

          // Display all errors as individual toasts
          flattenedErrors.forEach((errMsg) => {
            toast.error(errMsg)
          })

          return
        }
        if (errorData.message) {
          toast.error(errorData.message)
          return
        }

        // ✅ Or if there's a specific `code`
        if (errorData.code) {
          toast.error(`Error: ${errorData.code}`)
          return
        }
      }

      // fallback error
      toast.error('An unexpected error occurred')
    },
  })
}

export const useCreateDebtRequestMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: DebtRequestCreation) => createDebtRequest(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['debt-requests'],
      })
      toast.success('Debt Request Created')
    },
    onError(error) {
      console.log(error)

      if (isAxiosError(error)) {
        const errorData = error.response?.data

        if (errorData?.errors) {
          const flattenedErrors: string[] = []

          // Loop through the errors object
          for (const key in errorData.errors) {
            const value = errorData.errors[key]

            // If the value is an object (e.g., nested like address.number), recurse or flatten
            if (typeof value === 'object' && value !== null) {
              for (const subKey in value) {
                flattenedErrors.push(value[subKey])
              }
            } else {
              flattenedErrors.push(value)
            }
          }

          // Display all errors as individual toasts
          flattenedErrors.forEach((errMsg) => {
            toast.error(errMsg)
          })

          return
        }
        if (errorData.message) {
          toast.error(errorData.message)
          return
        }

        // ✅ Or if there's a specific `code`
        if (errorData.code) {
          toast.error(`Error: ${errorData.code}`)
          return
        }
      }

      // fallback error
      toast.error('An unexpected error occurred')
    },
  })
}

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: KYCForm) => UpdateUserDetails(data),
    onSuccess() {
      toast.success('KYC Verification Completed')
      queryClient.invalidateQueries({
        queryKey: ['kyc-verification'],
      })
      setTimeout(() => {
        navigate('/dashboard', { replace: true })
      }, 1000)
    },
    onError(error) {
      console.log(error)

      if (isAxiosError(error)) {
        const errorData = error.response?.data

        if (errorData?.errors) {
          const flattenedErrors: string[] = []

          // Loop through the errors object
          for (const key in errorData.errors) {
            const value = errorData.errors[key]

            // If the value is an object (e.g., nested like address.number), recurse or flatten
            if (typeof value === 'object' && value !== null) {
              for (const subKey in value) {
                flattenedErrors.push(value[subKey])
              }
            } else {
              flattenedErrors.push(value)
            }
          }

          // Display all errors as individual toasts
          flattenedErrors.forEach((errMsg) => {
            toast.error(errMsg)
          })

          return
        }
        if (errorData.message) {
          toast.error(errorData.message)
          return
        }

        // ✅ Or if there's a specific `code`
        if (errorData.code) {
          toast.error(`Error: ${errorData.code}`)
          return
        }
      }

      // fallback error
      toast.error('An unexpected error occurred')
    },
  })
}

export const useWithdrawalMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: IWithdrawFunds) => withdrawFunds(data),
    onSuccess(data) {
      const info = data?.data

      console.log(info.response.data)

      if (info.data.id) {
        toast.success('Withdraw was Successful')
        setTimeout(() => {
          navigate('/dashboard', { replace: true })
        }, 1000)
      } else {
        toast.warning('Unauthorized, withdrawal Failed')
      }
    },
    onError(error) {
      console.log(error)

      if (isAxiosError(error)) {
        const errorData = error.response?.data

        if (errorData?.errors) {
          const flattenedErrors: string[] = []

          // Loop through the errors object
          for (const key in errorData.errors) {
            const value = errorData.errors[key]

            // If the value is an object (e.g., nested like address.number), recurse or flatten
            if (typeof value === 'object' && value !== null) {
              for (const subKey in value) {
                flattenedErrors.push(value[subKey])
              }
            } else {
              flattenedErrors.push(value)
            }
          }

          // Display all errors as individual toasts
          flattenedErrors.forEach((errMsg) => {
            toast.error(errMsg)
          })

          return
        }
        if (errorData.message) {
          toast.error(errorData.message)
          return
        }

        // ✅ Or if there's a specific `code`
        if (errorData.code) {
          toast.error(`Error: ${errorData.code}`)
          return
        }
      }

      // fallback error
      toast.error('An unexpected error occurred')
    },
  })
}

// export const useDebtRequestMutation = () => {
//   const navigate = useNavigate()
//   const { login } = useAuthContext()

//   return useMutation({
//     mutationFn: (data: FormData) => (data),
//     onSuccess(data) {
//       const info = data?.data

//       console.log(info.data)

//       if (info.data.id) {
//         toast.success('Login Successful')
//         login(data?.data)
//         setTimeout(() => {
//           if (info.data.emailVerified && info.data.identityDocuments.length > 0) {
//             navigate('/dashboard', { replace: true })
//           } else {
//             navigate('/kycstepper', { replace: true })
//           }
//         }, 1000)
//       } else {
//         toast.warning('Unauthorized, Login Failed')
//       }
//     },
//     onError(error) {
//       console.log(error)

//       if (isAxiosError(error)) {
//         const errorData = error.response?.data

//         if (errorData?.errors) {
//           const flattenedErrors: string[] = []

//           // Loop through the errors object
//           for (const key in errorData.errors) {
//             const value = errorData.errors[key]

//             // If the value is an object (e.g., nested like address.number), recurse or flatten
//             if (typeof value === 'object' && value !== null) {
//               for (const subKey in value) {
//                 flattenedErrors.push(value[subKey])
//               }
//             } else {
//               flattenedErrors.push(value)
//             }
//           }

//           // Display all errors as individual toasts
//           flattenedErrors.forEach((errMsg) => {
//             toast.error(errMsg)
//           })

//           return
//         }
//         if (errorData.message) {
//           toast.error(errorData.message)
//           return
//         }

//         // ✅ Or if there's a specific `code`
//         if (errorData.code) {
//           toast.error(`Error: ${errorData.code}`)
//           return
//         }
//       }

//       // fallback error
//       toast.error('An unexpected error occurred')
//     },
//   })
// }
// export const useCreateStoreMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: any) => createStore(data),
//     onSuccess(_, variables) {
//       const id = variables?.merchantId.toString();
//       queryClient.invalidateQueries({
//         queryKey: ["merchantId", id],
//       });
//       toast.success("Store Created");
//     },
//     onError(error) {
//       console.log(error);
//       toast.error("Error creating product");
//     },
//   });
// };

// export const useUpdatePlanMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: any) => updatePlan(data),
//     onSuccess(_, variables) {
//       const id = variables?.merchantId;
//       queryClient.invalidateQueries({
//         queryKey: ["merchantId", id],
//       });
//       toast.success("Merchant Plan Created");
//     },
//     onError(error) {
//       console.log(error);
//       toast.error("Error Updating Plan");
//     },
//   });
// };

// export const useDeleteMerchantMutation = (merchantId: number) => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   return useMutation({
//     mutationFn: () => deleteMerchant(merchantId),
//     onSuccess() {
//       queryClient.invalidateQueries({
//         queryKey: ["merchants-list"],
//       });
//       toast.success("Merchant Deleted");
//       setTimeout(() => {
//         navigate("/admin/merchants", { replace: true });
//       }, 2000);
//     },
//     onError(error) {
//       console.log(error);
//       toast.error("Error Deleting Merchant");
//     },
//   });
// };
