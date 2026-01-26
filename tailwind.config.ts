/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        background: '#020817',
        foreground: '#ffffff',
        card: '#0f172a',
        'card-foreground': '#f8fafc',
        popover: '#1e293b',
        'popover-foreground': '#ffffff',
        primary: '#1e40af',
        'primary-foreground': '#ffffff',
        secondary: '#374151',
        'secondary-foreground': '#ffffff',
        muted: '#1f2937',
        'muted-foreground': '#9ca3af',
        accent: '#065f46',
        'accent-foreground': '#ffffff',
        destructive: '#ef4444',
        border: '#374151',
        input: '#1f2937',
        ring: '#1e40af',
        chart: {
          1: '#8b5cf6',
          2: '#10b981',
          3: '#059669',
          4: '#0ea5e9',
          5: '#14b8a6',
        },
        sidebar: {
          DEFAULT: '#1f2937',
          foreground: '#ffffff',
          primary: '#1e40af',
          'primary-foreground': '#ffffff',
          accent: '#065f46',
          'accent-foreground': '#ffffff',
          border: '#374151',
          ring: '#1e40af',
        }
      },
      // Light theme colors
      light: {
        background: '#ffffff',
        foreground: '#000000',
        card: '#f8fafc',
        'card-foreground': '#1e293b',
        popover: '#1e293b',
        'popover-foreground': '#000000',
        primary: '#3b82f6',
        'primary-foreground': '#ffffff',
        secondary: '#6b7280',
        'secondary-foreground': '#ffffff',
        muted: '#f1f5f9',
        'muted-foreground': '#4b5563',
        accent: '#0284c7',
        'accent-foreground': '#000000',
        destructive: '#dc2626',
        border: '#e5e7eb',
        input: '#ffffff',
        ring: '#3b82f6',
        chart: {
          1: '#8b5cf6',
          2: '#10b981',
          3: '#059669',
          4: '#0ea5e9',
          5: '#14b8a6',
        },
        sidebar: {
          DEFAULT: '#ffffff',
          foreground: '#000000',
          primary: '#3b82f6',
          'primary-foreground': '#000000',
          accent: '#0284c7',
          'accent-foreground': '#000000',
          border: '#e5e7eb',
          ring: '#3b82f6',
        }
      }
    }
  },
  plugins: [],
};

export default config;