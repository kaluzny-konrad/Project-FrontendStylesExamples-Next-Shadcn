import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto gap-4">
      <p className="text-lg font-bold">Clones:</p>
      <Link href={"/ceneo"}>Ceneo Clone</Link>
    </main>
  );
}
