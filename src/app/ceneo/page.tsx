import Header from "@/components/ceneo/mainPage/Header";
import WrapperMaxWidth from "@/components/ceneo/shared/WrapperMaxWidth";
import Recommendations from "@/components/ceneo/shared/placements/Recommendations";

type Props = {};

export default function page({}: Props) {
  return (
    <WrapperMaxWidth>
      <div className="flex flex-col gap-5 mt-5">
        <Header />
        <Recommendations count={6} />
      </div>
    </WrapperMaxWidth>
  );
}
