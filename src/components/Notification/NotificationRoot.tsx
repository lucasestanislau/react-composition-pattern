import { ReactNode } from 'react';

interface NotificationRootProps {
    children: ReactNode
}
export function NotificationRoot({ children }: NotificationRootProps) {
    return (
        <div className="card">
            {children}
        </div>
    )

}