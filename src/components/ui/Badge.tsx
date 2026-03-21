import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'success' | 'outline'
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  className,
}: BadgeProps) {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    success: 'bg-emerald-50 text-emerald-700',
    outline: 'bg-transparent border border-current',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
