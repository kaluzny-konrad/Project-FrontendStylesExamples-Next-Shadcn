import HeaderCategories from "./HeaderCategories"
import HeaderMain from "./HeaderMain"

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row-reverse">
      <HeaderMain />
      <HeaderCategories />
    </div>
  )
}