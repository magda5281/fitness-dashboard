import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A generic helper to find today's entry in any array of objects that have a `date` string
export function findByDate<T extends { date: string }>(
  arr: T[],
  date: string
): T | undefined {
  return arr.find((item) => item.date === date);
}
