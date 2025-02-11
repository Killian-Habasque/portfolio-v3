import { BlockText, BlockTextProps } from "../layouts/block-text";

interface BlockAdapterProps {
    content: BlockTextProps | null; 
    type: string;
}

export default function BlockAdapter({ content, type }: BlockAdapterProps) {
    if (!content) return null;

    switch (type) {
        case 'TEXT':
            return <BlockText text={content.text} />;
        default:
            return null;
    }
}
