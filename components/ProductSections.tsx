import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type ProductSectionsProps = {
  title: string;
  spantitle: string;
  subtitle: string;
  linkText: string;
  linkUrl: string;
};
const ProductSections: React.FC<ProductSectionsProps> = ({
  title,
  spantitle,
  subtitle,
  linkText,
  linkUrl,
}) => {
  return (
    <section className="py-6">
      <h2 className="text-[2.2rem] font-bold my-4 text-center ">
        {title}{" "}
        <span className="bg-gradient-to-br from-[#fe8002] to-[#b91d1d] text-transparent bg-clip-text">
          {spantitle}
        </span>
      </h2>
      <p className="text-[1.2rem] text-[#6b7280] text-center max-w-[600px] mx-auto mb-8">
        {subtitle}
      </p>
      <Link
        href={linkUrl}
        className="inline-flex items-center gap-2 rounded-[50px] px-7 py-3 font-semibold text-white shadow-[var(--shadow-md)]
          no-underline bg-[linear-gradient(135deg,_var(--primary-color),_var(--primary-light))] transition-[var(--transition)] border-none ml-20 "
      >
        {linkText} <ArrowRight />
      </Link>
    </section>
  );
};

export default ProductSections;
