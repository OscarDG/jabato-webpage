import { inter } from '@/app/ui/fonts'
import clsx from 'clsx'

type ButtonsProps = {
    height: number | string,
    width: number | string,
    children: React.ReactNode,
    to?: string,
    target: string,
    variant?: 'primary' | 'ghost',
    onClick?: () => void
}

export default function Button({height, width, children, to, target, variant = 'primary', onClick}: ButtonsProps){
    return (
        <a onClick={onClick} href={to} target={target} style={{"--custom-width": width + '%', "--custom-height": height + '%'} as React.CSSProperties} className={clsx(inter.className, 'flex items-center justify-center', `w-[var(--custom-width)] h-[var(--custom-height)] cursor-pointer`, 'border-[1px] border-brandred rounded-4xl pt-[13px] pb-[13px] text-white font-black', variant === 'ghost' ? 'bg-transparent border-white': 'bg-brandred hover:bg-red-800 transition duration-200 ease-in')}>{children}</a>
    )
}