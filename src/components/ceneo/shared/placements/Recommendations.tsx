import ProductBox from "../ProductBox";

type Props = {
  count: number;
};

export default function Recommendations({ count }: Props) {
  return (
    <div className="flex w-full overflow-x-auto bg-white">
      {Array.from({ length: count }).map((_, index) => (
        <ProductBox key={index} />
      ))}
    </div>
  );
}
