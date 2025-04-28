import { cn } from "../../lib/utils"; // Assuming you have a `cn` (classnames) utility

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode; // Icon as a React component
}

export const NavButton = ({ text, icon, className, ...props }: NavButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 justify-start px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};