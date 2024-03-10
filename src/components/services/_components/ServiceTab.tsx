import { Sora } from "next/font/google";
import Image from "next/image";
import React from "react";
import CartLook from "./CartLook";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});

interface FeatureListItem {
  list: string;
}

interface FeatureInfo {
  topic: string;
  text: FeatureListItem[];
}

interface Feature {
  title: string;
  featuresinfo: FeatureInfo[];
}

interface RequirementItem {
  text?: string;
}

interface Requirement {
  title: string;
  description: string;
  featuresinfo: RequirementItem[];
}

interface ProductInfo {
  releasedate?: string;
  productinfo: string;
  upc: string;
  brand: string;
  brandinfo: string;
  features: Feature[];
  bottom: Requirement[];
}

type ServiceProps = {
  title: string;
  price: number;
  imgLink: {
    src: string;
    src2: string;
  };
  info: ProductInfo;
};
export default function ServiceTab({
  title,
  price,
  imgLink,
  info,
}: ServiceProps) {
  return (
    <div className="mt-[170px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-12">
        <div className="flex flex-col items-center justify-center">
          <h3 className={`text-[14px] text-[#8C26FF] ${sora.className}`}>
            Our (SaaS) Products
          </h3>
          <h1 className={`text-[36px] text-[#18181B] text-center ${sora.className}`}>
            {title}
          </h1>

          <div className="flex gap-[10px] items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={imgLink.src}
                alt="services"
                width={749}
                height={100}
              />
              <p className="text-center">NETWORK PERFORMANCE ANOMALY</p>
            </div>
            {imgLink.src2 && (
              <div className="lg:flex flex-col items-center justify-center hidden">
                <Image
                  src={imgLink.src2}
                  alt="services"
                  width={550}
                  height={100}
                />
                <p className="text-center">NETWORK PERFORMANCE ANOMALY</p>
              </div>
            )}
          </div>
          <div className="bg-[#F5F4FF] rounded-[12px] w-[64px] gap-[12px] h-[24px] p-[8px] flex items-center justify-center my-4">
            <button className="w-[8px] h-[8px] bg-[#0171C9] rounded-full"></button>
            <button className="w-[8px] h-[8px] bg-[#D0D5DD] rounded-full"></button>
            <button className="w-[8px] h-[8px] bg-[#D0D5DD] rounded-full"></button>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-20">
          <div className="flex flex-col items-start justify-start gap-4">
            <h2 className={`text-[24px] text-[#8C26FF] ${sora.className}`}>
              {title}
            </h2>
            <h3
              className={`text-[#18181B] text-[16px] ${sora.className} font-medium`}
            >
              Release date:{info.releasedate}
            </h3>
            <p
              className={`text-[#3F3F46] leading-[24px] text-[16px] ${sora.className}`}
            >
              {info.productinfo}
            </p>
            <h3
              className={`text-[#18181B] text-[16px] ${sora.className} font-medium`}
            >
              Product Details
            </h3>
            <h3
              className={`text-[#18181B] text-[16px] ${sora.className} font-medium`}
            >
              UPC:{" "}
              <span
                className={`text-[#3F3F46] leading-[24px] text-[16px] ${sora.className}`}
              >
                {info.upc}
              </span>
            </h3>
            <h3
              className={`text-[#18181B] text-[16px] ${sora.className} font-medium`}
            >
              Brand:{" "}
              <span
                className={`text-[#3F3F46] leading-[24px] text-[16px] ${sora.className}`}
              >
                {info.brand}
              </span>
            </h3>
            <p
              className={`text-[#3F3F46] leading-[24px] text-[16px] ${sora.className}`}
            >
              {info.brandinfo}
            </p>
            {info.features.map((features, id) => (
              <div className="flex flex-col gap-4" key={id}>
                <h4 className={`text-[#0171C9] text-[16px] ${sora.className}`}>
                  {features.title}
                </h4>
                {features.featuresinfo.map((moreinfo, id) => (
                  <div key={id} className="flex flex-col gap-4">
                    <h4
                      className={`text-[#18181B] font-medium text-[16px] ${sora.className}`}
                    >
                      {moreinfo.topic}
                    </h4>
                    {moreinfo.text.map((listitem, id) => (
                      <ul key={id}>
                        <li
                          className={`text-[#3F3F46] text-[14px] flex items-center gap-[10px] ${sora.className}`}
                        >
                          <Image
                            src="/tick.svg"
                            alt="tick"
                            width={10}
                            height={14}
                          />
                          {listitem.list}
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <button>
            <h3
              className={`text-[#0171C9] text-[16px] flex items-center gap-[10px] ${sora.className}`}
            >
              <Image src="/plus.svg" alt="plus" width={14} height={14} />
              Show more
            </h3>
            </button>
            {info.bottom.map((bottominfo, id) => (
              <div key={id} className="flex flex-col gap-4">
                <h3
              className={`text-[#18181B] font-medium text-[16px] ${sora.className}`}
            >
              {bottominfo.title}
            </h3>
            <p className={`text-[#3F3F46] text-[16px] ${sora.className}`}>
              {bottominfo.description}
            </p>
            {bottominfo.featuresinfo.map((listitems, id) => (
            <ul key={id}>
              {listitems && 
              <li className="flex gap-[10px]">
                <Image src="/tick.svg" alt="tick" width={10} height={14} />
                <p className={`text-[14px] text-[#3F3F46] ${sora.className}`}>
                  {listitems.text}
                </p>
              </li>
              }
            </ul>
            ))}
              </div>
            ))}
            

            <div className="flex flex-col gap-[30px]">
              <h3 className={`text-[16px] text-[#18181B] ${sora.className}`}>
                Share Product
              </h3>
              <div className="flex gap-2">
                <button className="w-[75px] h-[55px] rounded-[4px] border border-[#F5F5F5] flex items-center justify-center">
                <Image
                  src="/twitter.svg"
                  alt="twitter"
                  width={16}
                  height={19}
                />
                </button>
                <button className="w-[75px] h-[55px] rounded-[4px] border border-[#F5F5F5] flex items-center justify-center">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={19}
                  height={19}
                />
                </button>
                <button className="w-[75px] h-[55px] rounded-[4px] border border-[#F5F5F5] flex items-center justify-center">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={10}
                  height={19}
                />
                </button>
              </div>
            </div>
          </div>

          <CartLook price={price} />
        </div>
      </div>
    </div>
  );
}
