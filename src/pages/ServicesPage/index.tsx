/**
 * Internal Dependencies.
 */
import { navItems } from "../../store/constant";
import { Services } from "../../components";

const ServicesPage = () => {
  const serviceitems =
    navItems.find((item) => item.label === "Services")?.subMenuItems ?? [];

  return <Services ServiceItems={serviceitems} />;
};

export default ServicesPage;
