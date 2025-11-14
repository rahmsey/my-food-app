import React from "react";
import HowitWorkCard from "./HowitWorkCard";

const HowitWork = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-semibold">
        Let's See How It Works
      </h1>

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div>
          <HowitWorkCard
            num="01"
            image="/images/w1.png"
            title="Become a Delibery Man"
            description="Description for step one goes here."
          />
        </div>

        <div>
          <HowitWorkCard
            num="02"
            image="/images/w2.png"
            title="Become a Partner"
            description="Description for step two goes here."
          />
        </div>

        <div>
          <HowitWorkCard
            num="03"
            image="/images/w3.png"
            title="Try Android/ios App"
            description="Description for step three goes here."
          />
        </div>
      </div>
    </div>
  );
};

export default HowitWork;
