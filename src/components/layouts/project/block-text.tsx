export interface BlockTextProps {
    title?: string;
    text: string;
    colspan?: 1 | 2;
}

export const BlockText: React.FC<BlockTextProps> = ({ title, text, colspan = 2 }) => {
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-1 lg:col-span-2';

    return (
        <div className={`${colspanClass} w-full rounded-2xl lg:p-4 font-outfit flex flex-col justify-center`}>
            {title && (
                <h2 className="text-2xl lg:text-5xl font-bold tracking-normal leading-none mb-6 text-secondary-dark">
                    {title}
                </h2>
            )}
            <p className="text-md lg:text-lg leading-[1.75] text-secondary lg:text-justify">{text}</p>
        </div>
    );
};