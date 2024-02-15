/**
 * External Dependencies.
 */
import React from "react";
import { Link } from "react-router-dom";

interface ServiceItemsProp {
  ServiceItems: {
    icon: React.ReactElement<SVGElement>;
    title: string;
    href: string;
    description: string;
  }[];
}

const Services = ({ ServiceItems }: ServiceItemsProp) => {
  return (
    <div className="flex flex-wrap">
      {ServiceItems.map((serviceItem, index) => {
        return (
          <div key={"service-item-" + index} className="xl:w-1/3 md:w-1/2 p-2">
            <Link
              to={serviceItem.href}
              className="block border border-gray-300 dark:border-gray-600 p-6 rounded-md"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                {serviceItem.icon}
              </div>
              <h2 className="text-lg font-medium title-font mb-2">
                {serviceItem.title}
              </h2>
              <p className="leading-relaxed text-base text-gray-600 dark:text-gray-400">
                {serviceItem.description}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
