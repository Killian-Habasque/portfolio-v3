import { BlockText, BlockTextProps } from "../layouts/block-text";
import { BlockImage, BlockImageProps } from "../layouts/block-image";

interface BlockAdapterProps {
    content: BlockTextProps | BlockImageProps | null;
    type: string;
}

export default function BlockAdapter({ content, type }: BlockAdapterProps) {
    if (!content) return null;

    switch (type) {
        case 'TEXT':
            return <BlockText text={(content as BlockTextProps).text} colspan={(content as BlockTextProps).colspan} />;
        case 'IMAGE':
            return <BlockImage image={(content as BlockImageProps).image} colspan={(content as BlockImageProps).colspan} />;
        default:
            return null;
    }
}
