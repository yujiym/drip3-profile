import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const shortAddress = (address: string, pre: number = 5, post: number = 4): string =>
  !!address
    ? `${address.substring(0, pre)}...${address.substring(address.length - post, address.length)}`
    : ''
