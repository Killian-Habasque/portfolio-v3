export interface BlockTextProps {
    text: string;
    colspan?: 1 | 2; 
}

export const BlockText: React.FC<BlockTextProps> = ({ text, colspan = 2 }) => {
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-2';
    
    return (
        <div className={`${colspanClass} w-full bg-gray-50 rounded-2xl p-6 border-2`}>
            <p className="text-lg leading-relaxed text-gray-700">{text}</p>
        </div>
    );
};