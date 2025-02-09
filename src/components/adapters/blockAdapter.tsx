import { BlockText, BlockTextProps } from "../layouts/block-text";

interface BlockAdapterProps {
    content: BlockTextProps;
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
