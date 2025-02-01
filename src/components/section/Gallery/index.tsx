import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import React, { Suspense } from "react";
import { images } from "./images";
import LoadingSpinner from "@/components/LoadingSpinner";

const GallerySection = () => {
  return <Suspense fallback={<LoadingSpinner />}>
    <ParallaxScroll images={images} />
  </Suspense>
};

export default GallerySection;
