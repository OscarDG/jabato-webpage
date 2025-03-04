import { inter } from '@/app/ui/fonts'
import clsx from 'clsx'

type ButtonsProps = {
    children: React.ReactNode,
    to: string,
    variant?: 'primary' | 'ghost'
}

export default function Button({children, to, variant = 'primary'}: ButtonsProps){
    return (
        <a href={to} target="_blank" className={clsx(inter.className, 'flex items-center justify-center w-55 h-11 border-[1px] border-brandred rounded-4xl pt-[12px] pb-[12px] text-white font-black', variant === 'ghost' ? 'bg-transparent border-white': 'bg-brandred hover:bg-red-800 transition duration-200 ease-in')}>{children}</a>
    )
}