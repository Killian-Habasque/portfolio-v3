import React from 'react';
import Image from 'next/image';

type IconProps = {
    label?: string;
};

export function Icon({ label = "default" }: IconProps) {
    return (
        <div className="w-6 h-6 rounded-full bg-indigo-100 p-1.5">
            <Image
                src={`/icons/${label}.svg`}
                alt={label}
                width={24}
                height={24}
            />
        </div>
    );
}
