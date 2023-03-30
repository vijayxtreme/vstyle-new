import { upper } from "@/util/util";
import Link from "next/link";
import { BreadCrumb } from "./BreadcrumbsStyled";

interface BreadcrumbsProps {
  slug: string;
}

export default function BreadCrumbs({ slug }: BreadcrumbsProps) {
  return (
    <BreadCrumb>
      {slug !== "" ? (
        <>
          <Link href="/">Home</Link>
          &nbsp;{`/ ${upper(slug)}`}
        </>
      ) : (
        ""
      )}
    </BreadCrumb>
  );
}
