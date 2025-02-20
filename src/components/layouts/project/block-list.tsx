export interface BlockListProps {
    title?: string;
    text?: string;
    items: string[];
    colspan?: 1 | 2;
}

export const BlockList: React.FC<BlockListProps> = ({ title, text, items, colspan = 2 }) => {
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-2';

    return (
        <div className={`${colspanClass} w-full rounded-2xl p-6 font-outfit flex flex-col justify-center`}>
            {title && (
                <h2 className="tracking-normal text-3xl md:text-5xl font-bold tracking-tighter leading-none mb-3 tracking-tight text-secondary-dark">
                    {title}
                </h2>
            )}
            {text && (
                <p className="text-lg leading-relaxed text-secondary pb-2">{text}</p>
            )}
            <ul className="list-disc list-inside text-lg leading-[2.5] text-secondary">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
