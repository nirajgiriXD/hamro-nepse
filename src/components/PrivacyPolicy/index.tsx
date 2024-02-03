interface PrivacyPolicyItems {
  items: {
    title: string;
    description: {
      hasSpace: boolean;
      value: string;
    }[];
  }[];
}

const PrivacyPolicy = ({ items }: PrivacyPolicyItems) => {
  return (
    <div className="px-1 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
        Our Privacy Policy
      </h2>
      <div className="space-y-8">
        {items.map((item) => {
          return (
            <div key={item.title}>
              <h3 className="font-medium">{item.title}</h3>
              {item.description.map((description, index) => {
                return (
                  <p
                    key={item.title + index}
                    className={`text-md font-light text-left text-gray-500 dark:text-gray-400 ${
                      description.hasSpace ? "lg:mt-2" : ""
                    }`}
                  >
                    {description.value}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
