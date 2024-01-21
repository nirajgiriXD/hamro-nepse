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
      className={
        "absolute w-52 bg-white dark:bg-gray-900 rounded top-10 p-4 drop-shadow-xl z-10 dark:border dark:border-white"
      }
      onMouseOver={handleDropdownMouseOver}
      onMouseOut={handleDropdownMouseOut}
    >
      {subMenuItems.map((subMenuItem, index) => (
        <div className="p-1" key={index}>
          <a
            href={subMenuItem.href}
            className="block text-gray-800 hover:text-blue-500 dark:text-white"
          >
            {subMenuItem.label}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
