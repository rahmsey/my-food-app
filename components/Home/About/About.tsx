import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div 
           data-aos="fade-up" 
           data-aos-anchor-placement="top-center" 
           >
          <Image
            src="/images/a.png"
            width={800}
            height={800}
            alt="about image"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
            We deliver our products as fast as Superman can do
          </h1>

          <p className="text-gray-600 mt-4 leading-6 sm:leading-8 dark:text-gray-300 font-medium text-sm sm:text-base">
            This section can contain a short introduction about your company,
            project, or service. Customize this text as needed.
          </p>

          <div className="mt-8 space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">01</p>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold">
                  Easy to Use Application
                </h2>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  ipsam repellat veritatis inventore sit est tenetur. Quae
                  architecto reprehenderit a.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">02</p>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold">
                  Fast and Reliable Service
                </h2>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  ipsam repellat veritatis inventore sit est tenetur. Quae
                  architecto reprehenderit a.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-6">
              <p className="text-3xl md:text-5xl opacity-40 font-bold">03</p>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold">
                  Secure and Scalable Platform
                </h2>
                <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  ipsam repellat veritatis inventore sit est tenetur. Quae
                  architecto reprehenderit a.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
