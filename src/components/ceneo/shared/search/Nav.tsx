import NavSearch from "./NavSearch"
import NavUserButtons from "./NavUserButtons"

type Props = {}

export default function Nav({}: Props) {
  return (
    <div className="bg-white h-20 w-full">
      <div className="flex items-center justify-between h-full mx-24">
        <div className="text-2xl font-bold text-ceneo-primary">CENEO</div>

        <NavSearch />

        <NavUserButtons />
      </div>
    </div>
  )
}