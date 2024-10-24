"use client";
import React, { Suspense } from "react";
import { Button } from "../ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import CourseCard from "./CourseCard/CourseCard";

// Create a separate component that uses useSearchParams and router
const CourseFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentType = searchParams.get("course") || "all";

  const setQueryValue = (courseType: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("course", courseType);
    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center sm:justify-center gap-3 sm:gap-6 mb-3 sm:mb-8 overflow-hidden overflow-x-auto pb-2">
      <Button
        variant={currentType === "all" ? "default" : "outline"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("all")}
      >
        All Courses
      </Button>
      <Button
        variant={currentType === "web-development" ? "default" : "outline"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("web-development")}
      >
        Web Development
      </Button>
      <Button
        variant={currentType === "data-science" ? "default" : "outline"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("data-science")}
      >
        Data Science
      </Button>
      <Button
        variant={currentType === "design" ? "default" : "outline"}
        className="p-2 sm:px-5 sm:py-[10px]"
        onClick={() => setQueryValue("design")}
      >
        Design
      </Button>
    </div>
  );
};

// Wrap the component using Suspense
const OurPopularCourses = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container">
      <h3 className="text-center text-3xl sm:text-5xl font-bold leading-[64px] mt-4  sm:mt-16 sm:mb-4">
        Our Popular Courses
      </h3>
      <p className="text-center text-[#667085] text-base font-normal leading-6 mb-4 md:mb-10">
        Explore Our Top-Rated Courses and Start Your Learning Journey Today
      </p>

      <Suspense fallback={<div>Loading filters...</div>}>
        <CourseFilters />
      </Suspense>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[66px]">
        {count?.map((course, index) => (
          <CourseCard key={index} />
        ))}
      </div>

      <div className="w-full flex justify-center my-10">
        <Button variant={"outline"} className="">
          View All Courses
        </Button>
      </div>
    </div>
  );
};

export default OurPopularCourses;
