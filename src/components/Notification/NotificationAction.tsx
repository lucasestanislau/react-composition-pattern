import { ButtonHTMLAttributes, ElementType } from "react";


interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}
export default function NotificationAction({ icon: Icon, ...rest }: NotificationActionProps) {
    return (
        <button {...rest} className="button">
            <Icon />
        </button>
    )
}