"use client"

import type React from "react"

import { forwardRef } from "react"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(({ className = "", value, max = 100, ...props }, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div
      ref={ref}
      className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out rounded-full relative"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse" />
      </div>
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }
