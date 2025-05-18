export enum DebtRequestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum DebtRequestRole {
  PAYER = 'payer',
  DEBTOR = 'debtor',
}

export interface DebtRequestFilters {
  role?: DebtRequestRole
  status?: DebtRequestStatus
}

export enum LoanStatuses {
  PENDING = 'pending',
  ACTIVE = 'active',
  REPAYED = 'repaid',
  DEFAULTED = 'defaulted',
}

export interface LoanFilters {
  status?: LoanStatuses | LoanStatuses[]
}

export interface Loan {
  _id: number
  description: string
  totalAmountToBePaid: number
  durationInDays: number
  disbursedAt: string
  interestRate: number
  status: LoanStatuses
}
