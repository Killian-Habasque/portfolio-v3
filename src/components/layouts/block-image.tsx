import Image from 'next/image';

export interface BlockImageProps {
    image: string;
    colspan?: 1 | 2;  // Restreindre les valeurs possibles à 1 ou 2
}

export const BlockImage: React.FC<BlockImageProps> = ({ image, colspan = 2 }) => {
    const colspanClass = colspan === 1 ? 'col-span-1' : 'col-span-2';
    
    return (
        <div className={`${colspanClass} w-full relative overflow-hidden rounded-2xl border-2 aspect-video`}>
            <Image 
                src={image} 
                alt="Project Image" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};
