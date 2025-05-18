export interface DebtRequestFilters {
  role: 'payer' | 'debtor'
  status: 'pending' | 'accepted' | 'rejected'
}
