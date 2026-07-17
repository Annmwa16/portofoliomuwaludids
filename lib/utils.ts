import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan beberapa className, otomatis resolve konflik
 * utility Tailwind (mis. "px-4" vs "px-6") menggunakan tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
