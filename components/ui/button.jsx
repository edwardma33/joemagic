import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b33a33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1a19] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#a93630] px-6 py-3 text-white hover:bg-[#8d2d29]',
        outline: 'border border-[#b84840] px-6 py-3 text-[#f2e5da] hover:bg-[#3a2524]',
        ghost: 'px-3 py-2 text-[#e0b6ad] hover:bg-[#332322]',
      },
      size: {
        default: 'h-11',
        sm: 'h-9 text-xs',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
))
Button.displayName = 'Button'

export { Button, buttonVariants }
