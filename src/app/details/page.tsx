"use client";
import { TracingBeam } from "@/shared/components/ui/tracing-beam";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const TracingBeamDemo = () => {
  const dummyContent = [
    {
      title: "Food and Fashion Hub",
      description: (
        <>
          <p>
            Welcome to the Food and Fashion Hub, your go-to destination for the
            latest trends in both style and flavors! Discover a curated
            selection of fashion-forward clothing, accessories, and gourmet food
            items from top sellers. Whether you&#39;re searching for chic
            apparel, must-have accessories, or delicious treats, our hub brings
            together the best of both worlds, offering something for every taste
            and occasion. Shop with ease, indulge in diverse selections, and
            stay ahead of the curve with our ever-growing marketplace.
          </p>
        </>
      ),
      badge: "Discover",
      image: "/image1.jpg",
    },
    {
      title: "Business",
      description: (
        <>
          <p>
            The Food and Fashion Hub is a unique marketplace offering a curated
            selection of gourmet food and fashion-forward clothing, accessories,
            and lifestyle products, creating a seamless blend of culinary and
            style experiences.
          </p>
        </>
      ),
      badge: "Our Concept",
      image: "/image2.jpg",
    },
    {
      title: "Shoppee",
      description: (
        <>
          <p>
            Discover our curated selection of products on the Shopee app, where
            you can effortlessly browse and purchase with ease. Take advantage
            of exclusive deals and enjoy a seamless shopping experience in a
            secure, user-friendly environment, with reliable delivery right to
            your doorstep. Our Shopee store is designed to offer you a
            convenient and enjoyable shopping journey, all in one place.
          </p>
        </>
      ),
      badge: "Online Store",
      image: "/image33.jpg",
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default TracingBeamDemo;
