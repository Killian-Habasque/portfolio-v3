"use client"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "./badge";

interface BreadcrumbItem {
  id: number;
  name: string;
  href: string;
}

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbItem[];
}

export default function Breadcrumb({ breadcrumbs }: BreadcrumbProps) {
  const router = useRouter();

  return (
    <nav aria-label="Breadcrumb" className="flex flex-col lg:flex-row gap-4 mb-6 pt-24 font-outfit">
      <button onClick={() => router.back()} className="flex gap-2 items-center text-sm cursor-pointer">
        <Badge variant="outline"><ArrowLeftEndOnRectangleIcon className="w-4 h-4" />RETOUR</Badge>
      </button>

      <ol role="list" className="flex gap-2 items-center tracking-wide">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <Link
                href={breadcrumb.href ?? null}
                className={`mr-4 text-sm font-medium ${index === breadcrumbs.length - 1 ? "text-secondary-light" : "text-secondary"
                  }`}
              >
                {breadcrumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                  <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
