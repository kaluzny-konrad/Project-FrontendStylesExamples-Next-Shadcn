import ButtonTailwind from "@/components/ButtonTailwind";
import ButtonSass from "@/components/ButtonSass";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-20 gap-20">
      <ButtonSass />
      <ButtonTailwind />
      <Link href={'/ceneo'}>Ceneo</Link>
    </main>
  );
}
