export const getToken = () => {
  const token = JSON.parse(localStorage.getItem('gbese-auth-token') || '')
  return token
}

export const getMetaData = () => {
  const metadata = JSON.parse(localStorage.getItem('metadata-user') || '')
  return metadata
}

export const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem('current-user') || '')
  return currentUser
}

export const convertDate = (dateString: string) => {
  const date = new Date(dateString);

  const formatted = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;

  return formatted
}

export const getCurrentUserAccount = (amount: number) => {
  const paginatd_amount = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(amount)

  return paginatd_amount
}