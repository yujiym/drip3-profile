'use client'
import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@drip3/lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('flex justify-around', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      asChild
      ref={ref}
      className={cn('h-6 w-6 rounded-full', className)}
      {...props}
    >
      <input
        type="radio"
        className={cn(
          'h-6 w-6 rounded-full appearance-none border-2 border-transparent checked:border-slate-200 focus:outline-none cursor-pointer',
          className
        )}
        {...props}
      />
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
