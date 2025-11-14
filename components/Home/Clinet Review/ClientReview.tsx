"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1224 }, items: 2 },
  tablet: { breakpoint: { max: 1224, min: 764 }, items: 1 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 }
};

const ClientReview = () => {
  return (
    <section className="py-12">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        What people say about us
      </h1>

      <div className="mt-16 max-w-5xl mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
        >
          <ReviewCard
            reviewTitle="Great Work!"
            userName="Jessica Doe"
            userImage="/images/c1.png"
            role="UI/UX Designer"
          />

          <ReviewCard
            reviewTitle="Creative Work!"
            userName="Kenny Doe"
            userImage="/images/c2.png"
            role="Web Developer"
          />

          <ReviewCard
            reviewTitle="Amazing results!"
            userName="Alice Doe"
            userImage="/images/c3.png"
            role="App Developer"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientReview;
