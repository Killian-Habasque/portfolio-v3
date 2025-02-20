export interface BlockTextProps {
    title?: string;
    text: string;
    colspan?: 1 | 2;
}

export const BlockText: React.FC<BlockTextProps> = ({ title, text, colspan = 2 }) => {
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-2';

    return (
        <div className={`${colspanClass} w-full rounded-2xl p-6 font-outfit flex flex-col justify-center`}>
            {title && (
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none mb-3 tracking-tight text-secondary-dark">
                    {title}
                </h2>
            )}
            <p className="text-lg leading-relaxed text-secondary">{text}</p>
        </div>
    );
};