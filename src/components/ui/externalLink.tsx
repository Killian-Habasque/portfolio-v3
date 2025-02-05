import { Icon } from "./icon";

interface ExternalLinkProps {
  url: string;
}

export default function ExternalLink({ url }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      href={url}
      rel="noopener noreferrer"
      className="flex gap-2 items-center text-indigo-600 underline"
    >
      <Icon label="link" />
      {url}
    </a>
  );
}
