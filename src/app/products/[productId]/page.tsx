import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Shield } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  if (!productId) return notFound();

  const [product] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, productId));
  if (!product) return notFound();

  return (
    <div className="py-8 pb-8 px-12 divide-y divide-zinc-200 bg-white dark:bg-slate-800 shadow-md rounded-b-md">
      <div>
        <BackButton />
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            {product.name}
          </h1>
        </div>
        <div className="aspect-square my-6 border-border w-52 h-52">
          <div className="relative bg-zinc-100 dark:bg-slate-700 w-full h-full overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover object-center"
              src={`/${product.imageId}`}
              alt={product.name}
              fill
              loading="eager"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <p className="font-medium text-gray-900 dark:text-slate-100">
              {product.price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <p className="text-base max-w-prose text-muted-foreground">
            {product.description}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-full mt-10">Add to cart</Button>

        <div className="mt-6 text-center">
            <div className="inline-flex text-sm text-medium">
                <Shield className="w-5 h-5 mr-2 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <span className="text-muted-foreground hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Free shipping</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
