"use client"

import type React from "react"

import { forwardRef } from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline"
  children: React.ReactNode
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"

    const variants = {
      default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      secondary: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
      outline: "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300",
    }

    return (
      <span ref={ref} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge }
