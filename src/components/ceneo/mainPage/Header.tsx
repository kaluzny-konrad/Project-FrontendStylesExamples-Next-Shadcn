import HeaderCategories from "./HeaderCategories"
import HeaderRight from "./HeaderRight"

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="flex gap-5">
      <HeaderCategories />
      <HeaderRight />
    </div>
  )
}