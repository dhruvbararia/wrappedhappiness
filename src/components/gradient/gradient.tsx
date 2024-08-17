import { cn } from '@/utils/cn'

function Gradient({ className }: { className?: string }) {
  return <div className={cn('bg-gradient-to-b from-[#c6b0d5] to-[#decbeb]', className)} />
}

export default Gradient
