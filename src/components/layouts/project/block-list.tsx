export interface BlockListProps {
    title?: string;
    text?: string;
    items: string[];
    colspan?: 1 | 2;
}

export const BlockList: React.FC<BlockListProps> = ({ title, text, items, colspan = 2 }) => {
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-1 lg:col-span-2';

    return (
        <div className={`${colspanClass} w-full rounded-2xl lg:p-4 font-outfit flex flex-col justify-center`}>
            {title && (
                <h2 className="text-2xl lg:text-5xl font-bold tracking-normal leading-none mb-6 text-secondary-dark">
                    {title}
                </h2>
            )}
            {text && (
                <p className="text-md lg:text-lg leading-relaxed text-secondary pb-2">{text}</p>
            )}
            <ul className="list-disc list-inside text-md lg:text-lg leading-[2] lg:leading-[2] text-secondary">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
