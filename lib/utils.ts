import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A generic helper to find today's entry in any array of objects that have a `date` string
/**
 * @param arr - An array of objects with a date property.
 * The date property should be a string in the format 'YYYY-MM-DD'.
 * @param date - A date string in the format 'YYYY-MM-DD' to search for in the array.
 * @description This function searches for an object in the array that has a date property matching the provided date string.
 * It returns the first matching object or undefined if no match is found.
 * @returns The object with the matching date or undefined if not found.
 */
export function findByDate<T extends { date: string }>(
  arr: T[],
  date: string
): T | undefined {
  return arr.find((item) => item.date === date);
}

/**
 *
 * @param dateString - A date string in the format 'YYYY-MM-DD'
 * @description Converts a date string from 'YYYY-MM-DD' format to 'DD/MM/YY' format.
 * For example, '2025-03-01' becomes '01/03/25'.
 * @returns
 */
export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year.slice(-2)}`;
}
