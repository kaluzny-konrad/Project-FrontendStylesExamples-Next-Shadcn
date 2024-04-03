import Recommendations from "../shared/placements/Recommendations";
import ShowcaseMocked from "../shared/placements/ShowcaseMocked";

type Props = {};

export default function HeaderRight({}: Props) {
  return (
    <div className="flex flex-col w-[1000px] gap-5">
      <div className="flex gap-3 h-96">
        <div className="flex flex-col w-7/12 gap-3">
          <ShowcaseMocked />
        </div>
        <div className="flex flex-col w-5/12 gap-3">
          <ShowcaseMocked />
          <ShowcaseMocked />
        </div>
      </div>
      <div>
        <Recommendations count={5} />
      </div>
    </div>
  );
}
