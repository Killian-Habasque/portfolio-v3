import BlockText from "./block-text";

interface BlockAdapterProps {
    content: any;
    type: string;
}

export default function BlockAdapter({ content, type }: BlockAdapterProps) {
    switch (type) {
        case 'TEXT':
            return <BlockText text={content.text} />;
        default:
            return null;
    }
}
