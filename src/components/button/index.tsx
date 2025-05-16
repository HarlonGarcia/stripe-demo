interface IButtonProps {
  children: React.ReactNode;
  title?: string;
  className?:string;
  bgColor?: "bg-orange-500" | "transparent";
  color?: "text-gray-950" | "text-white" | "text-orange-500";
  border?: "border-transparent" | "border-2 border-orange-500" | "border-2 border-gray-300";
}

export default function Button({children, title, className, bgColor,color, border}: IButtonProps) {

  return (
    <>
      <button title={title} className={`
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
        hover:border-transparent
        ${border}
        ${bgColor} 
        ${color}
        ${className}
        `} type="button"
      >
        {children}
      </button>
    </>
  )
}
