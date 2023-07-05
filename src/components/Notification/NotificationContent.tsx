interface NotificationContentProps {
    text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
    return (<div className="message">{text}</div>)

}