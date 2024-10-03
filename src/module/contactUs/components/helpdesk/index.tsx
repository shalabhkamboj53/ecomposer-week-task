import { useContext } from "react";
import Card from "./card";
import { ContactContext } from "../../../../context/contactcontext";

const HelpDesk = () => {
  const { HelpDeskData } = useContext(ContactContext);
  return (
    <div className="py-14">
      <h2 className="text-center text-3xl font-semibold" data-aos="fade-up" data-aos-delay="100">
        Browse our help desk
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[80%] w-[95%] mx-auto lg:gap-10 gap-5 mt-14" data-aos="fade-up" data-aos-delay="300">
        {HelpDeskData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HelpDesk;
