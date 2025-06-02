"use client"

import type React from "react"

import { forwardRef } from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className = "", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
})

const CardHeader = forwardRef<HTMLDivElement, CardProps>(({ className = "", children, ...props }, ref) => {
  return (
    <div ref={ref} className={`p-6 pb-4 ${className}`} {...props}>
      {children}
    </div>
  )
})

const CardContent = forwardRef<HTMLDivElement, CardProps>(({ className = "", children, ...props }, ref) => {
  return (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
})

const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={`text-xl font-bold text-slate-900 dark:text-white ${className}`} {...props}>
        {children}
      </h3>
    )
  },
)

const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <p ref={ref} className={`text-slate-600 dark:text-slate-300 ${className}`} {...props}>
        {children}
      </p>
    )
  },
)

Card.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardContent.displayName = "CardContent"
CardTitle.displayName = "CardTitle"
CardDescription.displayName = "CardDescription"

export { Card, CardHeader, CardContent, CardTitle, CardDescription }
