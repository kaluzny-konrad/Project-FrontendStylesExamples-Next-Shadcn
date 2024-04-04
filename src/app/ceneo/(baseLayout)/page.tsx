import Header from "@/components/ceneo/mainPage/Header";
import SectionTitle from "@/components/ceneo/shared/SectionTitle";
import WrapperMaxWidth from "@/components/ceneo/shared/WrapperMaxWidth";
import Recommendations from "@/components/ceneo/shared/placements/Recommendations";

type Props = {};

export default function page({}: Props) {
  return (
    <WrapperMaxWidth>
      <div className="flex flex-col lg:mt-5">
        <Header />

        <SectionTitle title="Polecane produkty" />
        <Recommendations count={6} />

        <SectionTitle title="Reklama" />
        <Recommendations count={6} />
      </div>
    </WrapperMaxWidth>
  );
}
