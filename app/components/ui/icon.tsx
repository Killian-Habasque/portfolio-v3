type IconProps = {
    label?: string;
  };
  
  export function Icon({ label = "default" }: IconProps) {
    return (
      <div className="w-8 h-8 rounded-full bg-primary-light p-2">
        <img className="w-full h-full" src={`/icons/${label}.svg`} alt={label} />
      </div>
    );
  }
  