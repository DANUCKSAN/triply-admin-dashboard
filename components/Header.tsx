import { useLocation } from "react-router";
import { cn } from "~/lib/utils";

interface props{
    title:string;
    description:string
}
const Header = ({title, description}:props) => {
    const location=useLocation();
  return (
    <div>
      <header className="header">
        <article>
            <h1 className={cn("text-dark-100",
                location.pathname==='/' ? 'text-2xl md:text-4xl fornt-bold':
                'text-xl md:text-2xl font-semibold'
            )}>{title}</h1>
             <p className={cn("text-gray-100 font-normal",
                location.pathname==='/' ? 'text-base md:text-lg':
                'text-sm md:text-lg'
            )}>{description}</p>
        </article>
      </header>
    </div>
  )
}

export default Header
