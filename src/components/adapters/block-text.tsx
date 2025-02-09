interface Props {
    text: string;
}

const BlockText: React.FC<Props> = ({ text }) => {
    return <p>{text}</p>;
};

export default BlockText;
