type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className="pt-3 pb-1 pl-4 mt-4 text-sm font-semibold bg-white lg:mt-2 lg:pb-3 lg:bg-transparent">
      {title}
    </div>
  );
}
