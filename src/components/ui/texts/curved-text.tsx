import React from "react";

interface CurvedTextProps {
  text: string;
  radius: number;
  className?: string;
}

const CurvedText: React.FC<CurvedTextProps> = ({ text, radius, className }) => {
  const pathId = `curvedTextPath-${Math.random()}`;

  return (
    <svg
      width={radius * 2}
      height={radius}
      viewBox={`0 0 ${radius * 2} ${radius}`}
      className={`absolute left-1/2 transform -translate-x-1/2  ${className}`}
    >
      <path
        id={pathId}
        d={`M 10,10 A ${radius - 10},${radius - 10} 0 0,0 ${radius * 2 - 10},10`}
        fill="transparent"
      />
      
      <text className="fill-white font-bold text-xl -translate-y-1/2">
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;
