export interface IRegisterUser {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface UpdateUserProfileDto {
  firstName: string
  lastName: string
  phone: string
  address: {
    number: string
    street: string
    town: string
    state: string
  }
  dateOfBirth: string // ISO 8601 format (e.g., "1999-04-07")
  identityDocument: File // Assuming this is used in a browser or frontend context
  identityDocumentType: 'nin' | 'passport' | 'driver_license' | string // Adjust as needed
}

export interface FormData {
  email: string
  password: string
}

export interface FormData {
  email: string
  password: string
}

export interface Account {
  _id: string
  userId: string
  balance: string
  isActive: boolean
  accountNumber: string
  createdAt: string
  updatedAt: string
  id: string
}

export interface UserData {
  points: string
  _id: string
  name: string
  email: string
  address: {
    number: string
    street: string
    town: string
    state: string
  }
  dob: string
  phoneNumber: string
  emailVerified: boolean
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: string
  account: Account
  id: string
  documentType: string
  frontIdImage: File
  backIdImage: File

  // steps
  step: number
}

// interface ApiResponse {
//   data: UserData;
// }

export interface CloudinaryUploadResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  original_filename: string
}

interface Address {
  number?: string
  street?: string
  town?: string
  state?: string
}

export interface KYCForm {
  firstName: string
  lastName: string
  phone: string
  address: Address
  dateOfBirth: string
  identityDocuments?: [string, string] | undefined
  identityDocumentType: string
}

export interface IWithdrawFunds {
  accountNumber: string
  bankCode: string
  amount: number
}
