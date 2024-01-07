/**
 * Internal dependencies.
 */
import { subMenuItems } from "../../constant";

interface SubMenuProps {
  handleDropdownMouseOver: () => void;
  handleDropdownMouseOut: () => void;
}

const SubMenu = ({
  handleDropdownMouseOver,
  handleDropdownMouseOut,
}: SubMenuProps) => {
  return (
    <div
      className={"absolute w-52 top-8 p-4 bg-white rounded drop-shadow-xl z-10"}
      onMouseOver={handleDropdownMouseOver}
      onMouseOut={handleDropdownMouseOut}
    >
      {subMenuItems.map((subMenuItem, index) => (
        <div className="p-1" key={index}>
          <a
            href={subMenuItem.href}
            className="block text-gray-800 hover:text-blue-500 "
          >
            {subMenuItem.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
