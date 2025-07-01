// components/SectionHeader.tsx
interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
      <div className="fixed top-20 py-4 font-bold w-full px-6 md:px-16 bg-white dark:bg-dark-bg mb-1 flex border-b border-gray-600 text-md font-normal shadow-md">
        {title}
      </div>

  )
}
