import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto h-screen">
      <div className="mx-auto my-auto gap-10 flex flex-col text-center">
        <p className="text-lg font-bold">Pages:</p>
        <Link
          href={"/ceneo"}
          className={cn(
            buttonVariants({
              className:
                "bg-ceneo-primary hover:bg-ceneo-secondary text-lg uppercase rounded-md font-light transition-all",
              size: "lg",
            })
          )}
        >
          Ceneo Clone
        </Link>
      </div>
    </main>
  );
}
