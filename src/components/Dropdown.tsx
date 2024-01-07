import { dropdownItems } from "./constant.ts";

interface Props {
  handleDropdownMouseOver: () => void;
  handleDropdownMouseOut: () => void;
}

const Dropdown = ({
  handleDropdownMouseOver,
  handleDropdownMouseOut,
}: Props) => {
  return (
    <>
      <div
        className={
          "absolute w-52 top-8 p-4 bg-white rounded drop-shadow-xl z-10"
        }
        onMouseOver={handleDropdownMouseOver}
        onMouseOut={handleDropdownMouseOut}
      >
        {dropdownItems.map((subItem, subIndex) => (
          <div className="p-1">
            <a
              key={subIndex}
              href={subItem.href}
              className="block text-gray-800 hover:text-blue-500 "
            >
              {subItem.label}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
