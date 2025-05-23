import { ComponentProps } from 'react';

interface IButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  title?: string;
  className?:string;
  bgColor?: "bg-orange-500" | "transparent";
  color?: "text-gray-950" | "text-white" | "text-orange-500" | "text-zinc-800";
  border?: "border-transparent" | "border-orange-500" | "border-gray-300";
}

export default function Button({
  children,
  title,
  className,
  bgColor,color,
  border,
  ...rest
}: IButtonProps) {
  return (
    <button
      title={title}
      className={`
        flex 
        flex-row
        gap-1 font-medium
        py-2 px-4
        rounded-full
        transition-all
        duration-300
        ease-in-out        
        hover:bg-orange-500
        hover:text-white
        border-2 border-transparent
        ${border}
        ${bgColor} 
        ${color}
        ${className}
      `}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
