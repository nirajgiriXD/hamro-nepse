/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

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
        "absolute w-52 bg-white dark:bg-gray-900 rounded top-10 p-4 drop-shadow-xl z-10 border border-gray-300 dark:border-gray-600"
      }
      onMouseOver={handleDropdownMouseOver}
      onMouseOut={handleDropdownMouseOut}
    >
      {subMenuItems.map((subMenuItem, index) => (
        <div className="p-1" key={index}>
          <Link to={subMenuItem.href} className="block hover:text-sky-600">
            {subMenuItem.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
