/**
 * Internal dependencies.
 */
import ServiceItems from "./constants";

const Services = () => {
  return (
    <div className="flex flex-wrap xl:my-10 md:my-8 xs:my-5 border border-gray-300 rounded-lg p-2">
      {ServiceItems.map((serviceItem, index) => {
        return (
          <div className="xl:w-1/3 md:w-1/2 p-2" key={"service-item-" + index}>
            <div className="border border-gray-300 p-6 rounded-md">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                {serviceItem.icon}
              </div>
              <h2 className="text-lg font-medium title-font mb-2">
                {serviceItem.title}
              </h2>
              <p className="leading-relaxed text-base">
                {serviceItem.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
