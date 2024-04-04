import Recommendations from "../shared/placements/Recommendations";

type Props = {};

export default function HeaderMain({}: Props) {
  return (
    <div className="flex flex-col lg:w-[1000px] gap-1 lg:gap-3 w-full">
      <div className="flex flex-col w-full gap-1 lg:gap-3 h-fit lg:flex-row lg:h-96">
        <div className="flex flex-col w-full h-48 gap-1 lg:h-full lg:gap-3 lg:w-7/12">
          <div className="w-full h-full bg-ceneo-primary"></div>
        </div>
        <div className="flex flex-row w-full gap-1 h-28 lg:h-full lg:gap-3 lg:flex-col lg:w-5/12">
          <div className="w-1/2 h-full lg:w-full bg-ceneo-primary"></div>
          <div className="w-1/2 h-full lg:w-full bg-ceneo-primary"></div>
        </div>
      </div>
      <div>
        <Recommendations count={5} />
      </div>
    </div>
  );
}
