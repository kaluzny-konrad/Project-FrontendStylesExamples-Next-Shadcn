type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <div className="ml-4 font-semibold">{title}</div>;
}
