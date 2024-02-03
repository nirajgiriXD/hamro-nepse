interface AboutProp {
  items: {
    title: string;
    description: string;
  }[];
}

const About = ({ items }: AboutProp) => {
  return (
    <div className="px-1 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
        About Us
      </h2>
      <div className="space-y-8">
        {items.map((item) => {
          return (
            <div key={item.title}>
              <h3 className="my-2 font-medium">{item.title}</h3>
              <p className="my-2 text-md lg:mb-4 font-light text-left text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
