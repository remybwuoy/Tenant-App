// components/SectionHeader.tsx
interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`py-4 px-16 lg:mt-2 mt-4 lg:mb-0 mb-10 flex border-y border-gray-600 text-md font-normal ${className}`}>
      {title}
    </div>
  )
}
