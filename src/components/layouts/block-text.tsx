export interface BlockTextProps {
    text: string;
}

export const BlockText: React.FC<BlockTextProps> = ({ text }) => {
    return <p>{text}</p>;
};