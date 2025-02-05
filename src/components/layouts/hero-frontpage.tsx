type Props = {
    children: React.ReactNode;
};

const HeroFrontpage: React.FC<Props> = ({ children }) => {
    return <div className="p-2 bg-white h-[100vh] pt-20">
        <div className="bg-[--color-dark] relative flex h-full w-full flex-col justify-center overflow-hidden rounded-2xl pt-[50px]">
            {children}
        </div>
    </div>;
};

export default HeroFrontpage;
