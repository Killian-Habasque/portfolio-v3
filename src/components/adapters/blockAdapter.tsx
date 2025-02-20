import { BlockText, BlockTextProps } from "../layouts/project/block-text";
import { BlockImage, BlockImageProps } from "../layouts/project/block-image";
import { BlockList, BlockListProps } from "../layouts/project/block-list";

interface BlockAdapterProps {
    content: BlockTextProps | BlockImageProps | BlockListProps | null;
    type: string;
}

export default function BlockAdapter({ content, type }: BlockAdapterProps) {
    if (!content) return null;

    switch (type) {
        case 'TEXT':
            return <BlockText title={(content as BlockTextProps).title} text={(content as BlockTextProps).text} colspan={(content as BlockTextProps).colspan} />;
        case 'IMAGE':
            return <BlockImage image={(content as BlockImageProps).image} colspan={(content as BlockImageProps).colspan} />;
        case 'LIST':
            return <BlockList title={(content as BlockListProps).title} items={(content as BlockListProps).items} colspan={(content as BlockListProps).colspan} />;
        default:
            return null;
    }
}
