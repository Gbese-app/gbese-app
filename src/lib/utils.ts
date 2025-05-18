import { isAxiosError } from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{4})$/)
  return '+' + match?.[1] + ' ' + match?.[2] + ' ' + match?.[3] + ' ' + match?.[4]
}

export function getAxiosError(
  error: unknown,
  defaultMessage: string = 'Error processing external API'
) {
  return isAxiosError(error)
    ? error.response?.data.message
    : error instanceof Error
      ? error.message
      : defaultMessage
}

export function normalizeSearchParams(obj: Record<string, any>): [string, string][] {
  const entries: [string, string][] = []

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((val) => entries.push([key, val]))
    } else {
      entries.push([key, String(value)])
    }
  }

  return entries
}
