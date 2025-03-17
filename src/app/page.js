'use client'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";


const slides = [
  { image: "/images/ceo.png" },
  { image: '/images/cmo.png' },
  { image: "/images/handshake.png" },
  { image: "/images/cfo.png" },
];
export default function Home() {
  
  const [position, setPosition] = useState({ x: -2, y: -2 });
  const [slide, setSlide] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(slides[2].image);

  
  
  const handleSlideChange = () => {
    let newIndex = activeIndex + 1;

    // Reset to first slide if it exceeds the length
    if (newIndex >= slides.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    setActiveImage(slides[newIndex]?.image || null);
    console.log('hello');
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };


  useEffect(() => {
    setSlide("1"); // Set default value after hydration
  }, []);

  
  return (
    <div>
      {/* header */}
    <section className="header-bg">
    <div className="w-full xl:container mx-auto">
    <Navbar textcolor="text-[#fff]" strokecolor="#fff" />
    <div className="max-xl:px-4 flex flex-col justify-between xl:h-[93svh] h-[95svh] pb-8">
    <div>
      <h1 className="xl:text-[10rem] md:text-[9rem] max-sm:text-[20vw] text-[8rem] leading-[90%] inter font-bold uppercase">Dunn<br/>Capital</h1>
    </div>
    <div className="flex max-md:flex-col justify-between items-end max-md:items-start gap-4">
      <p className="inter font-medium text-xl md:w-[30%] ">
        we are proud to be your trusted Lexus dealer, offering a premium selection of new and pre-owned Lexus vehicles.
      </p>
      <Link className="border-b border-[#fff] flex items-center gap-2 text-sm sansMedium uppercase" href="#contact">
      Contact Us
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8538 5.35372L7.35375 9.85372C7.25993 9.94754 7.13268 10.0003 7 10.0003C6.86732 10.0003 6.74007 9.94754 6.64625 9.85372C6.55243 9.7599 6.49972 9.63266 6.49972 9.49997C6.49972 9.36729 6.55243 9.24004 6.64625 9.14622L10.2931 5.49997H0.5C0.367392 5.49997 0.240215 5.44729 0.146447 5.35353C0.0526785 5.25976 0 5.13258 0 4.99997C0 4.86736 0.0526785 4.74019 0.146447 4.64642C0.240215 4.55265 0.367392 4.49997 0.5 4.49997H10.2931L6.64625 0.853723C6.55243 0.759902 6.49972 0.632655 6.49972 0.499973C6.49972 0.367291 6.55243 0.240043 6.64625 0.146223C6.74007 0.0524025 6.86732 -0.000305176 7 -0.000305176C7.13268 -0.000305176 7.25993 0.0524025 7.35375 0.146223L11.8538 4.64622C11.9002 4.69266 11.9371 4.7478 11.9623 4.8085C11.9874 4.8692 12.0004 4.93427 12.0004 4.99997C12.0004 5.06568 11.9874 5.13074 11.9623 5.19144C11.9371 5.25214 11.9002 5.30729 11.8538 5.35372Z" fill="white"/>
      </svg>
      </Link>
    </div>
    </div>
    </div>
    </section>

    <section className="py-10 bg-[#F3F3F3]">
      <div className="w-full xl:container mx-auto max-xl:px-4 text-center">
        <h4 className="text-xl md:text-2xl sansMedium text-[#111]">
          {`We've helped over 300 companies including`}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-8">
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>
              <div
                className="flex items-center justify-center border bg-white p-4"
              >
                <Image
                  src="/images/logoipsum.svg" // Replace with actual logos
                  alt="Company Logo"
                  width={126}
                  height={30}
                  className="h-10"
                />
              </div>

        </div>
      </div>
    </section>

    <section className="w-full xl:container mx-auto py-24 max-md:py-8 max-xl:px-4">
      <div className="flex max-md:flex-col justify-between">
        <div className="w-[20%] max-md:w-full max-md:gap-y-4">
        <span className="text-[#8D8D8D] text-sm sansRegular">(About)</span>
        </div>
        <div className="w-[68%] max-md:w-full">
        <h4 className="text-2xl md:text-4xl sansMedium text-[#111] leading-tight mt-2">
          Dunn Capital is a forward-thinking investment firm
            dedicated to creating long-term value&nbsp;
          <span className="text-[#11111180]"> 
             for our investors through strategic investments, mergers and
            acquisitions, and innovative financial solutions.
          </span>
        </h4>
        <p className="text-[#000] text-base mt-4 sansRegular">
          With a focus on high-growth sectors and emerging markets, we leverage
          our expertise, industry insights, and extensive network to identify
          and capitalize on unique opportunities.
        </p>
        <p className="text-[#000] text-base mt-4 sansRegular">
          Our hands-on approach ensures that we not only invest capital but also
          provide strategic guidance and support to help businesses unlock their
          full potential. At Dunn Capital, we are committed to delivering
          exceptional results while maintaining the highest standards of
          integrity, transparency, and client service.
        </p>
        </div>
      </div>
    </section>

    <section className="w-full xl:container mx-auto max-xl:px-4 pb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
        {/* Left Section: Image & Stats */}
        <div className="relative overflow-visible">
        <Image src="/images/investment.png" alt="Investment Meeting" width={484} height={855} className="w-full" />
        {/* Overlay Text */}
        <div className="absolute inset-8 max-md:inset-4 text-white flex justify-between">
          <div className="w-[30%] max-md:w-[50%] max-lg:w-[60%]">
           <p className="text-lg max-md:text-base text-[#fff] font-medium sansMedium relative before:relative before:block before:w-[22%] max-md:before:w-[25%] before:h-[2px] before:bg-[#fff] before:-top-3 max-md:before:-top-1">
            Additionally, we participate in seasoned offerings.
            </p>
          </div>
          <div className="w-[45%]">
            <h2 className="xl:text-6xl lg:text-4xl md:text-3xl text-3xl italic sansMedium text-transparent text-right pr-2"
            style={{
              background: "radial-gradient(156.88% 608.04% at 0% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%)",
              backgroundClip: "text"
            }}
            >$28B</h2>
            <p className="text-sm text-[#fff] text-right pr-2 mt-2 max-md:mt-1">The investors to reach by 2024</p>
            <h2 className="xl:text-6xl lg:text-4xl  md:text-3xl text-3xl italic sansMedium text-transparent text-right pr-2 mt-8 max-lg:mt-3"
            style={{
              background: "radial-gradient(156.88% 608.04% at 0% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%)",
              backgroundClip: "text"
            }}
            >10k+</h2>
            <p className="text-sm text-[#fff] text-right pr-2 mt-2 max-md:mt-1">Customer satisfied from 2019</p>
          </div>
        </div>
      </div>

      {/* Right Section: Heading & Description */}
      <div className="flex flex-col justify-between max-md:gap-y-24 p-6 bg-[#f3f3f3] h-full">
        <h2 className="xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111]">
          What Do We Do? <br />
          <span className="block">Invest in Public Companies.</span>
        </h2>
        <p className="text-[#111] text-lg relative before:absolute before:w-[8%] max-md:before:w-[15%] before:h-[2px] before:bg-[#111] before:-top-5">
          Dunn Capital Partners has been strategically investing in companies since 2012. We actively invest in
          companies on the OTCQX Exchange, Nasdaq, and NYSE. We seek companies with the potential to increase
          shareholder value. We offer direct investment services, debt financing, and equity capital.
        </p>
      </div>
    </div>
    </section>

    <section className="relative bg-black text-white py-16 px-6">
      <div className="w-full xl:container mx-auto flex max-md:flex-col items-start justify-between h-[20rem] max-md:h-[17rem] mb-12">
         <p className="text-[#8D8D8D] text-sm sansRegular max-md:mb-12">(Process)</p>
          <h2 className="xl:text-6xl md:text-4xl text-3xl sansMedium text-[#fff] pr-2 w-[40%] max-md:w-full">
            Smart Investment Execution And Management
          </h2>
        
          <p className="text-gray-400 text-lg w-[25%] max-md:w-full mt-auto">
            We implement your investment strategy with precision, ensuring optimal asset allocation and risk management.
          </p>
          <Image src="/images/investment-img.png" alt="Investment" width={130} height={130} className="max-md:hidden" />
      </div>

      <div className="w-full xl:container mx-auto overflow-y-auto overflow-x-none whitespace-nowrap scrollbar-hide">
         <div className="animated-group group relative inline-block w-[318px] xl:w-[25%] pt-30 before:absolute before:w-3 before:h-3 before:border before:border-[#F0B52E] before:rounded-full before:-right-[6px] before:-bottom-3 before:hidden hover:before:block border-x border-[#2C2C2C]">
            <div className="w-full absolute flex justify-center bottom-[37%] 2xl:bottom-[43%]">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_64_120)">
              <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.1"/>
              <g filter="url(#filter0_d_64_120)">
              <rect x="2" y="2" width="44" height="44" rx="22" fill="#232323" shapeRendering="crispEdges"/>
              <path d="M30.5625 19.8438C30.0195 19.8432 29.4878 19.9993 29.0312 20.2933V16.5625C29.031 16.046 28.8902 15.5394 28.6238 15.0969C28.3573 14.6544 27.9755 14.2928 27.5191 14.051C27.0627 13.8091 26.5491 13.6961 26.0333 13.7241C25.5176 13.7521 25.0192 13.9201 24.5917 14.2099C24.4431 13.524 24.046 12.9174 23.477 12.5066C22.908 12.0958 22.2072 11.9099 21.5094 11.9847C20.8117 12.0595 20.1662 12.3897 19.6971 12.9117C19.2281 13.4337 18.9687 14.1108 18.9688 14.8125V15.9183C18.5391 15.6438 18.0436 15.4898 17.534 15.4725C17.0244 15.4552 16.5196 15.5752 16.0723 15.82C15.625 16.0647 15.2518 16.4253 14.9917 16.8638C14.7316 17.3023 14.5941 17.8027 14.5938 18.3125V26.625C14.5938 29.1197 15.5848 31.5123 17.3488 33.2763C19.1128 35.0403 21.5053 36.0313 24 36.0313C26.4947 36.0313 28.8872 35.0403 30.6512 33.2763C32.4152 31.5123 33.4062 29.1197 33.4062 26.625V22.6875C33.4062 22.3141 33.3327 21.9443 33.1898 21.5993C33.0469 21.2543 32.8374 20.9408 32.5733 20.6767C32.3093 20.4126 31.9958 20.2032 31.6508 20.0603C31.3057 19.9173 30.9359 19.8438 30.5625 19.8438ZM32.0938 26.625C32.0938 28.7716 31.241 30.8303 29.7231 32.3482C28.2053 33.8661 26.1466 34.7188 24 34.7188C21.8534 34.7188 19.7947 33.8661 18.2769 32.3482C16.759 30.8303 15.9062 28.7716 15.9062 26.625V18.3125C15.9062 17.9064 16.0676 17.5169 16.3547 17.2298C16.6419 16.9426 17.0314 16.7813 17.4375 16.7813C17.8436 16.7813 18.2331 16.9426 18.5203 17.2298C18.8074 17.5169 18.9688 17.9064 18.9688 18.3125V23.125C18.9688 23.2991 19.0379 23.466 19.161 23.5891C19.284 23.7122 19.451 23.7813 19.625 23.7813C19.799 23.7813 19.966 23.7122 20.089 23.5891C20.2121 23.466 20.2812 23.2991 20.2812 23.125V14.8125C20.2812 14.4064 20.4426 14.017 20.7297 13.7298C21.0169 13.4426 21.4064 13.2813 21.8125 13.2813C22.2186 13.2813 22.6081 13.4426 22.8953 13.7298C23.1824 14.017 23.3438 14.4064 23.3438 14.8125V22.25C23.3438 22.4241 23.4129 22.591 23.536 22.7141C23.659 22.8372 23.826 22.9063 24 22.9063C24.174 22.9063 24.341 22.8372 24.464 22.7141C24.5871 22.591 24.6562 22.4241 24.6562 22.25V16.5625C24.6562 16.1564 24.8176 15.767 25.1047 15.4798C25.3919 15.1926 25.7814 15.0313 26.1875 15.0313C26.5936 15.0313 26.9831 15.1926 27.2703 15.4798C27.5574 15.767 27.7188 16.1564 27.7188 16.5625V24.2614C26.5091 24.4222 25.3989 25.0165 24.5942 25.934C23.7896 26.8515 23.3453 28.0297 23.3438 29.25C23.3438 29.4241 23.4129 29.591 23.536 29.7141C23.659 29.8372 23.826 29.9063 24 29.9063C24.174 29.9063 24.341 29.8372 24.464 29.7141C24.5871 29.591 24.6562 29.4241 24.6562 29.25C24.6562 28.2638 25.048 27.3179 25.7454 26.6205C26.4428 25.9231 27.3887 25.5313 28.375 25.5313C28.549 25.5313 28.716 25.4622 28.839 25.3391C28.9621 25.216 29.0312 25.0491 29.0312 24.875V22.6875C29.0312 22.2814 29.1926 21.8919 29.4797 21.6048C29.7669 21.3176 30.1564 21.1563 30.5625 21.1563C30.9686 21.1563 31.3581 21.3176 31.6453 21.6048C31.9324 21.8919 32.0938 22.2814 32.0938 22.6875V26.625Z" fill="white"/>
              </g>
              </g>
              <rect x="1" y="1" width="46" height="46" rx="23" stroke="#F0B52E" strokeWidth="2" className="animated-border" />
              <defs>
              <filter id="filter0_d_64_120" x="-2" y="2" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_120"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_120" result="shape"/>
              </filter>
              <clipPath id="clip0_64_120">
              <rect width="48" height="48" rx="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            <p className="sansMedium text-sm pb-8 pl-4 mb-6"><span className="text-white/50 sansRegular">01/</span> Consultation & Goal Setting</p>
            <svg viewBox="0 0 344 173" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#2C2C2C] transition transition-duration-500 group-hover:stroke-[#F0B52E]">
            <circle cx="172" cy="173" r="172" strokeDasharray="4 4"/>
            </svg>
         </div>

         <div className="animated-group group relative inline-block w-[318px] xl:w-[25%] pt-30 before:absolute before:w-3 before:h-3 before:border before:border-[#F0B52E] before:rounded-full before:-right-[6px] before:-bottom-3 before:hidden hover:before:block border-r border-[#2C2C2C]">
          
          <div className="w-full absolute bottom-[37%] 2xl:bottom-[43%] flex justify-center items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4103_38)">
            <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.1"/>
            <g filter="url(#filter0_d_4103_38)">
            <rect x="2" y="2" width="44" height="44" rx="22" fill="#232323" shapeRendering="crispEdges"/>
            <path d="M34.5995 17.6289C34.5597 17.5305 34.4966 17.4432 34.4157 17.3746C34.3347 17.3059 34.2384 17.2579 34.1348 17.2347C34.0312 17.2114 33.9236 17.2137 33.8211 17.2412C33.7186 17.2687 33.6242 17.3207 33.5462 17.3926L29.0542 21.5379L26.9203 21.0797L26.462 18.9458L30.6073 14.4537C30.6793 14.3757 30.7312 14.2814 30.7588 14.1789C30.7863 14.0764 30.7885 13.9687 30.7653 13.8652C30.742 13.7616 30.694 13.6652 30.6254 13.5843C30.5567 13.5033 30.4695 13.4402 30.3711 13.4004C28.9466 12.823 27.3812 12.6877 25.8787 13.0121C24.3762 13.3365 23.0062 14.1057 21.9469 15.2195C20.8876 16.3334 20.1881 17.7402 19.9394 19.2571C19.6907 20.774 19.9043 22.3306 20.5525 23.7243L13.8379 29.5212C13.8259 29.5311 13.815 29.542 13.8029 29.554C13.4981 29.8588 13.2562 30.2205 13.0912 30.6187C12.9261 31.0169 12.8411 31.4437 12.841 31.8747C12.8408 32.7453 13.1864 33.5802 13.8019 34.1959C14.4173 34.8116 15.252 35.1576 16.1226 35.1578C16.9931 35.158 17.828 34.8124 18.4437 34.197C18.4558 34.185 18.4667 34.174 18.4765 34.162L24.2734 27.4475C25.6672 28.0956 27.2238 28.3093 28.7406 28.0606C30.2575 27.8119 31.6644 27.1124 32.7782 26.0531C33.892 24.9938 34.6612 23.6237 34.9857 22.1212C35.3101 20.6188 35.1748 19.0534 34.5973 17.6289H34.5995ZM27.5 26.8437C26.4288 26.8433 25.3753 26.5716 24.4375 26.054C24.3056 25.981 24.1526 25.9556 24.0042 25.9821C23.8558 26.0086 23.7211 26.0854 23.6226 26.1995L17.4998 33.2837C17.1281 33.6399 16.6316 33.8363 16.1168 33.8307C15.6019 33.8252 15.1098 33.6183 14.7457 33.2542C14.3817 32.8902 14.1747 32.398 14.1692 31.8832C14.1637 31.3684 14.3601 30.8719 14.7162 30.5001L21.7994 24.3817C21.9144 24.2829 21.9916 24.1472 22.0179 23.9979C22.0442 23.8485 22.018 23.6947 21.9437 23.5625C21.3498 22.4881 21.0803 21.2644 21.168 20.0399C21.2558 18.8155 21.6969 17.6427 22.4379 16.664C23.179 15.6852 24.1881 14.9425 25.3429 14.5259C26.4977 14.1093 27.7485 14.0368 28.9437 14.317L25.2665 18.3048C25.1953 18.3822 25.1438 18.4755 25.1162 18.577C25.0886 18.6784 25.0857 18.785 25.1079 18.8878L25.7259 21.7698C25.7524 21.8935 25.8141 22.0069 25.9036 22.0964C25.993 22.1858 26.1064 22.2475 26.2301 22.274L29.1122 22.892C29.2149 22.9142 29.3215 22.9114 29.423 22.8838C29.5244 22.8562 29.6178 22.8046 29.6951 22.7334L33.6786 19.0562C33.8948 19.9869 33.8983 20.9545 33.6886 21.8867C33.479 22.8189 33.0617 23.6918 32.4678 24.4404C31.8739 25.1889 31.1187 25.7938 30.2586 26.2099C29.3984 26.626 28.4555 26.8427 27.5 26.8437Z" fill="white"/>
            </g>
            </g>
            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#F0B52E" strokeWidth="2" className="animated-border"/>
            <defs>
            <filter id="filter0_d_4103_38" x="-2" y="2" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4103_38"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4103_38" result="shape"/>
            </filter>
            <clipPath id="clip0_4103_38">
            <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <p className="sansMedium text-sm pb-8 pl-4 mb-6"><span className="text-white/50 sansRegular">02/ </span>Research & Strategy Development</p>
            <svg viewBox="0 0 344 173" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#2C2C2C] transition transition-duration-500 group-hover:stroke-[#F0B52E]">
            <circle cx="172" cy="173" r="172" strokeDasharray="4 4"/>
            </svg>
         </div>

         <div className="animated-group group relative inline-block w-[318px] xl:w-[25%] pt-30 before:absolute before:w-3 before:h-3 before:border before:border-[#F0B52E] before:rounded-full before:-right-[6px] before:-bottom-3 before:hidden hover:before:block border-r border-[#2C2C2C]">
            <div className="absolute w-full flex justify-center bottom-[37%] 2xl:bottom-[43%]">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4103_38)">
              <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.1"/>
              <g filter="url(#filter0_d_4103_38)">
              <rect x="2" y="2" width="44" height="44" rx="22" fill="#232323" shapeRendering="crispEdges"/>
              <path d="M22.3156 27.3282C23.5343 26.6375 24.49 25.5628 25.0338 24.2719C25.5776 22.9809 25.6788 21.5463 25.3216 20.1918C24.9644 18.8373 24.169 17.6391 23.0593 16.7842C21.9497 15.9292 20.5883 15.4656 19.1875 15.4656C17.7867 15.4656 16.4253 15.9292 15.3157 16.7842C14.2061 17.6391 13.4106 18.8373 13.0535 20.1918C12.6963 21.5463 12.7975 22.9809 13.3412 24.2719C13.885 25.5628 14.8407 26.6375 16.0594 27.3282C13.8008 28.0483 11.8611 29.5281 10.5699 31.5162C10.4747 31.6619 10.4414 31.8395 10.4772 32.0099C10.513 32.1802 10.615 32.3294 10.7607 32.4245C10.9065 32.5197 11.0841 32.553 11.2544 32.5172C11.4248 32.4814 11.5739 32.3794 11.6691 32.2337C12.4835 30.9815 13.5978 29.9525 14.9107 29.2402C16.2237 28.528 17.6938 28.1549 19.1875 28.1549C20.6813 28.1549 22.1513 28.528 23.4643 29.2402C24.7773 29.9525 25.8915 30.9815 26.706 32.2337C26.8073 32.3636 26.9538 32.4506 27.1163 32.4774C27.2789 32.5043 27.4456 32.4691 27.5833 32.3787C27.721 32.2883 27.8198 32.1495 27.8599 31.9897C27.9 31.8299 27.8785 31.6609 27.7997 31.5162C26.5099 29.5291 24.5722 28.0494 22.3156 27.3282ZM14.1563 21.8124C14.1563 20.8173 14.4513 19.8446 15.0042 19.0172C15.557 18.1898 16.3428 17.545 17.2621 17.1642C18.1815 16.7833 19.1931 16.6837 20.1691 16.8778C21.145 17.072 22.0415 17.5512 22.7451 18.2548C23.4488 18.9584 23.928 19.8549 24.1221 20.8309C24.3162 21.8068 24.2166 22.8185 23.8358 23.7378C23.455 24.6571 22.8101 25.4429 21.9827 25.9958C21.1553 26.5486 20.1826 26.8437 19.1875 26.8437C17.8537 26.8419 16.575 26.3113 15.6318 25.3681C14.6886 24.425 14.158 23.1463 14.1563 21.8124ZM37.2344 32.4218C37.0887 32.5168 36.9113 32.5502 36.7411 32.5145C36.5709 32.4788 36.4218 32.377 36.3266 32.2315C35.5136 30.9792 34.4002 29.9502 33.0877 29.2384C31.7753 28.5266 30.3056 28.1545 28.8125 28.1562C28.6385 28.1562 28.4715 28.087 28.3485 27.964C28.2254 27.8409 28.1563 27.674 28.1563 27.4999C28.1563 27.3259 28.2254 27.159 28.3485 27.0359C28.4715 26.9128 28.6385 26.8437 28.8125 26.8437C29.5534 26.8429 30.285 26.6786 30.955 26.3623C31.625 26.0461 32.2169 25.5858 32.6884 25.0143C33.1599 24.4428 33.4993 23.7742 33.6825 23.0563C33.8657 22.3384 33.888 21.5889 33.748 20.8614C33.6079 20.1339 33.309 19.4462 32.8724 18.8477C32.4358 18.2491 31.8724 17.7543 31.2224 17.3987C30.5725 17.043 29.852 16.8353 29.1125 16.7904C28.3729 16.7455 27.6326 16.8645 26.9444 17.1388C26.8642 17.1716 26.7784 17.1883 26.6918 17.1878C26.6052 17.1872 26.5195 17.1696 26.4398 17.1358C26.36 17.102 26.2877 17.0528 26.2271 16.9909C26.1665 16.9291 26.1187 16.8558 26.0865 16.7754C26.0543 16.695 26.0383 16.609 26.0395 16.5224C26.0407 16.4358 26.0591 16.3503 26.0935 16.2708C26.1279 16.1914 26.1777 16.1195 26.24 16.0593C26.3023 15.9992 26.3759 15.952 26.4566 15.9204C27.9494 15.3253 29.6124 15.3188 31.1097 15.9025C32.607 16.4861 33.827 17.6162 34.5233 19.0646C35.2196 20.5129 35.3402 22.1716 34.8608 23.7055C34.3814 25.2393 33.3378 26.5341 31.9406 27.3282C34.1993 28.0483 36.139 29.5281 37.4302 31.5162C37.524 31.6623 37.5561 31.8397 37.5194 32.0094C37.4827 32.1792 37.3802 32.3275 37.2344 32.4218Z" fill="white"/>
              </g>
              </g>
              <rect x="1" y="1" width="46" height="46" rx="23" stroke="#F0B52E" strokeWidth="2" className="animated-border "/>
              <defs>
              <filter id="filter0_d_4103_38" x="-2" y="2" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4103_38"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4103_38" result="shape"/>
              </filter>
              <clipPath id="clip0_4103_38">
              <rect width="48" height="48" rx="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
          <p className="sansMedium text-sm pb-8 pl-4 mb-6"><span className="text-white/50 sansRegular">03/</span> Implementation & Portfolio Management</p>
            <svg viewBox="0 0 344 173" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#2C2C2C] transition transition-duration-500 group-hover:stroke-[#F0B52E]">
            <circle cx="172" cy="173" r="172" strokeDasharray="4 4"/>
            </svg>
         </div>

         <div className="animated-group group relative inline-block w-[318px] xl:w-[25%] pt-30 before:absolute before:w-3 before:h-3 before:border before:border-[#F0B52E] before:rounded-full before:-right-[6px] before:-bottom-3 before:hidden hover:before:block border-r border-[#2C2C2C]">
            <div className="absolute w-full flex justify-center bottom-[37%] 2xl:bottom-[43%]">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4103_38)">
              <rect width="48" height="48" rx="24" fill="white" fillOpacity="0.1"/>
              <g filter="url(#filter0_d_4103_38)">
              <rect x="2" y="2" width="44" height="44" rx="22" fill="#232323" shapeRendering="crispEdges"/>
              <path d="M35.375 17.2188H32.5312V15.25C32.5312 15.076 32.4621 14.909 32.339 14.786C32.216 14.6629 32.049 14.5938 31.875 14.5938H16.125C15.951 14.5938 15.784 14.6629 15.661 14.786C15.5379 14.909 15.4688 15.076 15.4688 15.25V17.2188H12.625C12.2189 17.2188 11.8294 17.3801 11.5422 17.6672C11.2551 17.9544 11.0938 18.3439 11.0938 18.75V20.5C11.0938 21.6023 11.5316 22.6595 12.3111 23.4389C13.0905 24.2184 14.1477 24.6562 15.25 24.6562H15.8122C16.3008 26.3166 17.283 27.7891 18.6282 28.8782C19.9734 29.9673 21.618 30.6215 23.3438 30.7539V33.8438H20.5C20.326 33.8438 20.159 33.9129 20.036 34.036C19.9129 34.159 19.8438 34.326 19.8438 34.5C19.8438 34.674 19.9129 34.841 20.036 34.964C20.159 35.0871 20.326 35.1562 20.5 35.1562H27.5C27.674 35.1562 27.841 35.0871 27.964 34.964C28.0871 34.841 28.1562 34.674 28.1562 34.5C28.1562 34.326 28.0871 34.159 27.964 34.036C27.841 33.9129 27.674 33.8438 27.5 33.8438H24.6562V30.7539C28.2044 30.4783 31.1564 27.9867 32.1616 24.6562H32.75C33.8523 24.6562 34.9095 24.2184 35.6889 23.4389C36.4684 22.6595 36.9062 21.6023 36.9062 20.5V18.75C36.9062 18.3439 36.7449 17.9544 36.4578 17.6672C36.1706 17.3801 35.7811 17.2188 35.375 17.2188ZM15.25 23.3438C14.4958 23.3437 13.7725 23.0441 13.2392 22.5108C12.7059 21.9775 12.4062 21.2542 12.4062 20.5V18.75C12.4062 18.692 12.4293 18.6363 12.4703 18.5953C12.5113 18.5543 12.567 18.5312 12.625 18.5312H15.4688V22.25C15.4698 22.6157 15.4936 22.981 15.5398 23.3438H15.25ZM31.2188 22.1516C31.2188 26.1569 28.0053 29.4392 24.0547 29.4688C23.1021 29.476 22.1575 29.2946 21.2754 28.935C20.3933 28.5755 19.591 28.0449 18.9149 27.3739C18.2387 26.7028 17.7021 25.9046 17.3359 25.0252C16.9697 24.1458 16.7812 23.2026 16.7812 22.25V15.9062H31.2188V22.1516ZM35.5938 20.5C35.5938 21.2542 35.2941 21.9775 34.7608 22.5108C34.2275 23.0441 33.5042 23.3438 32.75 23.3438H32.447C32.5028 22.9488 32.5309 22.5504 32.5312 22.1516V18.5312H35.375C35.433 18.5312 35.4887 18.5543 35.5297 18.5953C35.5707 18.6363 35.5938 18.692 35.5938 18.75V20.5Z" fill="white"/>
              </g>
              </g>
              <rect x="1" y="1" width="46" height="46" rx="23" stroke="#F0B52E" strokeWidth="2" className="animated-border"/>
              <defs>
              <filter id="filter0_d_4103_38" x="-2" y="2" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4103_38"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4103_38" result="shape"/>
              </filter>
              <clipPath id="clip0_4103_38">
              <rect width="48" height="48" rx="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            <p className="sansMedium text-sm pb-8 pl-4 mb-6"><span className="text-white/50 sansRegular">04/</span> Performance Review & Optimization</p>
            <svg viewBox="0 0 344 173" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#2C2C2C] transition transition-duration-500 group-hover:stroke-[#F0B52E]">
            <circle cx="172" cy="173" r="172" strokeDasharray="4 4"/>
            </svg>
         </div>
      </div>
    </section>

    <section className="bg-black overflow-hidden" onMouseMove={handleMouseMove}>
    <motion.div className="absolute z-100 custom-next flex items-center justify-center w-20 h-20 bg-white text-black rounded-full cursor-pointer select-none max-md:hidden mix-blend-difference"
      animate={{ x: position.x -34, y: position.y -34 }}
      transition={{ type: "spring", stiffness: 100, damping: 7 }}
      >
        <span className="font-bold">
          Next
        </span>
      </motion.div>
    <div className="flex max-md:flex-col justify-between text-white w-full xl:container mx-auto max-xl:px-4">
      {/* Left Section - Slider */}
      <div className="w-[50%] max-md:w-full max-md:h-auto flex flex-col relative pr-8 max-md:pr-0 max-md:pb-5 border-r max-md:border-b max-md:border-r-0 border-[#2c2c2c] overflow-hidden">
        <h2 className="xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#fff] mb-[25rem] max-md:mb-20">What Do We Do? Invest in Public Companies.</h2>
        <Swiper
        spaceBetween={30}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".custom-next",
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper w-full overflow-hidden"
      >
        <SwiperSlide className="text-base max-md:text-[0.9rem] sansRegular">
        With a focus on high-growth sectors and emerging markets, we leverage our expertise, industry insights, and extensive network to identify and capitalize on unique opportunities.
        </SwiperSlide>
        <SwiperSlide>
        We make informed, strategic investments by analyzing market trends, leveraging data, and focusing on long-term value creation.
        </SwiperSlide>
        <SwiperSlide>
        We believe in responsible investing that supports sustainable growth, economic development, and innovation.
        </SwiperSlide>
        <SwiperSlide>
        We believe in responsible investing that supports sustainable growth, economic development, and innovation.
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Right Section */}
      <div className="w-[48%] max-md:w-full flex flex-col justify-center py-8">
        <h4 className="text-xl sansMedium">Act with Ownership</h4>
        <p className="mt-4 text-[#8D8D8D] w-[62%] max-md:w-full mb-20">
          We manage every investment like it’s our own, fully aligning our actions with your success and taking
          responsibility for outcomes.
        </p>
        <div className="mt-6">
          <Image src={activeImage} alt="Business handshake" width={600} height={400} className="w-[100%]" />
        </div>
      </div>
    </div>
    </section>
    
    <section className="w-full px-3 mx-auto xl:container py-12 max-xl:px-4  gap-y-8 max-md:hidden">
       <div className="flex items-start mb-12">
            <div className="w-[15%] max-md:w-full max-md:gap-y-4">
             <span className="text-[#8D8D8D] text-sm">(Services)</span>
           </div>
        <h4 className="text-xl sansMedium text-[#111] w-[20%] max-lg:w-[35%]">
         Identify and capitalize on unique opportunities.
        </h4>
        <Link className="border-b-[1.5px] border-[#111] text-[#111] flex items-center gap-2 text-sm sansMedium uppercase ml-auto" href="#contact">
         Contact Us
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8538 5.35372L7.35375 9.85372C7.25993 9.94754 7.13268 10.0003 7 10.0003C6.86732 10.0003 6.74007 9.94754 6.64625 9.85372C6.55243 9.7599 6.49972 9.63266 6.49972 9.49997C6.49972 9.36729 6.55243 9.24004 6.64625 9.14622L10.2931 5.49997H0.5C0.367392 5.49997 0.240215 5.44729 0.146447 5.35353C0.0526785 5.25976 0 5.13258 0 4.99997C0 4.86736 0.0526785 4.74019 0.146447 4.64642C0.240215 4.55265 0.367392 4.49997 0.5 4.49997H10.2931L6.64625 0.853723C6.55243 0.759902 6.49972 0.632655 6.49972 0.499973C6.49972 0.367291 6.55243 0.240043 6.64625 0.146223C6.74007 0.0524025 6.86732 -0.000305176 7 -0.000305176C7.13268 -0.000305176 7.25993 0.0524025 7.35375 0.146223L11.8538 4.64622C11.9002 4.69266 11.9371 4.7478 11.9623 4.8085C11.9874 4.8692 12.0004 4.93427 12.0004 4.99997C12.0004 5.06568 11.9874 5.13074 11.9623 5.19144C11.9371 5.25214 11.9002 5.30729 11.8538 5.35372Z" fill="#111111"/>
        </svg>
        </Link>
        </div>
          <div className="flex md:flex-row flex-col justify-between">
            <div className='md:w-[35%] lg:w-[25%] w-full '>
              {
            slide === '1' &&(
              <div className="w-full">
                <Image className="w-full" src="/images/handshake.png" alt="" width={400} height={400}/>
                <p className="text-[#000] text-sm sansRegular mt-2">We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates to keep investors informed and confident in their decisions, fostering long-term partnerships built on open communication.</p>
              </div>
            )}
            {
              slide === '2'  &&(
                <div className="w-full">
                <Image className="w-full" src="/images/handshake.png" alt="" width={400} height={400}/>
                <p className="text-[#000] text-sm sansRegular mt-2">We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates to keep investors informed and confident in their decisions, fostering long-term partnerships built on open communication.</p>
              </div>
              )
            }
            {
              slide === '3'  &&(
                <div className="w-full">
                <Image className="w-full" src="/images/handshake.png" alt="" width={400} height={400}/>
                <p className="text-[#000] text-sm sansRegular mt-2">We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates to keep investors informed and confident in their decisions, fostering long-term partnerships built on open communication.</p>
              </div>
              )
            }
            {
              slide === '4'  &&(
                <div className="w-full">
                <Image className="w-full" src="/images/handshake.png" alt="" width={400} height={400}/>
                <p className="text-[#000] text-sm sansRegular mt-2">We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates to keep investors informed and confident in their decisions, fostering long-term partnerships built on open communication.</p>
              </div>
              )
            }
            {
              slide === '5'  &&(
                <div className="w-full">
                <Image className="w-full" src="/images/handshake.png" alt="" width={400} height={400}/>
                <p className="text-[#000] text-sm sansRegular mt-2">We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates to keep investors informed and confident in their decisions, fostering long-term partnerships built on open communication.</p>
              </div>
              )
            }
            </div>
            <div className='md:w-[60%] sm:w-[65%] w-full flex flex-col gap-y-4'>
              <h2 onClick={()=> setSlide('1')} className={`xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111] cursor-pointer ${slide === '1' ? "text-[#111]" : "text-[rgba(17,17,17,0.24)]" }`}>
              Investor Relations
              </h2>
              <h2 onClick={()=>setSlide('2')} className={`xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111] cursor-pointer ${slide === '2' ? "text-[#111]" : "text-[rgba(17,17,17,0.24)]" }`}>
              Reverse Takeover            </h2>
              <h2 onClick={()=>setSlide('3')} className={`xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111] cursor-pointer ${slide === '3' ? "text-[#111]" : "text-[rgba(17,17,17,0.24)]" }`}>
              Mergers & Acquisitions            </h2>
              <h2 onClick={()=>setSlide('4')} className={`xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111] cursor-pointer ${slide === '4' ? "text-[#111]" : "text-[rgba(17,17,17,0.24)]" }`}>
              Equity Placements            </h2>
              <h2 onClick={()=>setSlide('5')} className={`xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111] cursor-pointer ${slide === '5' ? "text-[#111]" : "text-[rgba(17,17,17,0.24)]" }`}>
              Debt Placements            </h2>
            </div>
          </div>
    </section>

    <section className="md:hidden p-4">
        <div className="flex flex-col items-start">
        <p className="text-[#8D8D8D] sansRegular mb-8 text-sm">(Services)</p>
      <h4 className="text-2xl sansMedium mt-4 text-[#111] mb-4">
        Identify and capitalize on unique opportunities.
      </h4>
      <Link className="border-b-[1.5px] border-[#111] text-[#111] flex items-center gap-2 text-sm sansMedium uppercase" href="#contact">
         Contact Us
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8538 5.35372L7.35375 9.85372C7.25993 9.94754 7.13268 10.0003 7 10.0003C6.86732 10.0003 6.74007 9.94754 6.64625 9.85372C6.55243 9.7599 6.49972 9.63266 6.49972 9.49997C6.49972 9.36729 6.55243 9.24004 6.64625 9.14622L10.2931 5.49997H0.5C0.367392 5.49997 0.240215 5.44729 0.146447 5.35353C0.0526785 5.25976 0 5.13258 0 4.99997C0 4.86736 0.0526785 4.74019 0.146447 4.64642C0.240215 4.55265 0.367392 4.49997 0.5 4.49997H10.2931L6.64625 0.853723C6.55243 0.759902 6.49972 0.632655 6.49972 0.499973C6.49972 0.367291 6.55243 0.240043 6.64625 0.146223C6.74007 0.0524025 6.86732 -0.000305176 7 -0.000305176C7.13268 -0.000305176 7.25993 0.0524025 7.35375 0.146223L11.8538 4.64622C11.9002 4.69266 11.9371 4.7478 11.9623 4.8085C11.9874 4.8692 12.0004 4.93427 12.0004 4.99997C12.0004 5.06568 11.9874 5.13074 11.9623 5.19144C11.9371 5.25214 11.9002 5.30729 11.8538 5.35372Z" fill="#111111"/>
        </svg>
        </Link>
        </div>
       <div className="mt-4 overflow-hidden border-b border-[#E3E3E3] pb-4">
      <h2 className="text-4xl inter font-medium mt-8 text-[#111] mb-2">Investor Relations</h2>
        <Image
          src="/images/handshake.png" 
          alt="Investor Relations"
          className="w-full h-auto"
          width={400}
          height={400}
        />
        <p className="text-[#000] mt-4 sansRegular text-base">
        We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates 
        to keep investors informed and confident in their decisions, fostering long-term partnerships 
        built on open communication.
      </p>
      </div>
      <div className="overflow-hidden border-b border-[#E3E3E3] pb-4">
      <h2 className="text-4xl inter font-medium mt-6 text-[#111] mb-4">Reverse Takeover</h2>
        <Image
          src="/images/handshake.png" 
          alt="Investor Relations"
          className="w-full h-auto"
          width={400}
          height={400}
        />
        <p className="text-[#000] mt-4 sansRegular text-base">
        We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates 
        to keep investors informed and confident in their decisions, fostering long-term partnerships 
        built on open communication.
      </p>
      </div>
      <div className="overflow-hidden border-b border-[#E3E3E3] pb-4">
      <h2 className="text-4xl inter font-medium font-semibold mt-6 text-[#111] mb-4">Mergers & Acquisitions</h2>
        <Image
          src="/images/handshake.png" 
          alt="Investor Relations"
          className="w-full h-auto"
          width={400}
          height={400}
        />
        <p className="text-[#000] mt-4 sansRegular text-base">
        We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates 
        to keep investors informed and confident in their decisions, fostering long-term partnerships 
        built on open communication.
      </p>
      </div>
      <div className="overflow-hidden border-b border-[#E3E3E3] pb-4">
      <h2 className="text-4xl inter font-medium mt-6 text-[#111] mb-4">Equity Placements</h2>
        <Image
          src="/images/handshake.png" 
          alt="Investor Relations"
          className="w-full h-auto"
          width={400}
          height={400}
        />
        <p className="text-[#000] mt-4 sansRegular text-base">
        We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates 
        to keep investors informed and confident in their decisions, fostering long-term partnerships 
        built on open communication.
      </p>
      </div>
      <div className="overflow-hidden pb-4">
      <h2 className="text-4xl inter font-medium mt-6 text-[#111] mb-4">Debt Placements</h2>
        <Image
          src="/images/handshake.png" 
          alt="Investor Relations"
          className="w-full h-auto"
          width={400}
          height={400}
        />
        <p className="text-[#000] mt-4 sansRegular text-base">
        We prioritize transparency and trust. Our Investor Relations team provides clear, timely updates 
        to keep investors informed and confident in their decisions, fostering long-term partnerships 
        built on open communication.
      </p>
      </div>
      
    </section>
   
    <section className="relative bg-[#f8f8f8] py-24 max-md:py-8 max-xl:px-4 pb-[25rem] md:pb-[20rem] max-md:pb-[22rem] overflow-hidden">
      <div className="w-full xl:container mx-auto">
      <div className="flex max-md:flex-col justify-between">
        <div className="w-[20%] max-md:w-full max-md:gap-y-4">
        <span className="text-[#8D8D8D] text-sm">(Services)</span>
        </div>
        <div className="w-[68%] max-md:w-full">
        <h4 className="text-2xl md:text-4xl sansMedium text-[#111] leading-tight mt-2">
          Dunn Capital is a forward-thinking investment firm
            dedicated to creating long-term value&nbsp;
          <span className="text-[#11111180]"> 
             for our investors through strategic investments, mergers and
            acquisitions, and innovative financial solutions.
          </span>
        </h4>
        </div>
      </div>
      <div>
        <p className="sansRegular text-base text-[#000] xl:w-[27%] md:w-[70%] max-md:w-full mt-12">
          With a focus on high-growth sectors and emerging markets, we leverage our expertise, industry insights, and extensive network to identify and capitalize on unique opportunities.
        </p>
      </div>
      </div>
      <div className="absolute bottom-0 left-[20%] max-sm:left-0 w-[60%] max-sm:w-[150%]">
        <svg viewBox="0 0 802 418" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M724.942 618.561C751.001 591.003 770.667 557.014 783.377 517.551C795.657 479.419 800.962 437.838 799.163 393.913C797.197 349.197 788.344 305.053 772.916 263.038C756.893 218.861 734.072 177.456 705.276 140.318C676.574 103.33 643.598 72.828 607.322 49.7126C572.264 27.3658 535.595 12.7805 498.325 6.3689C461.055 -0.0426679 425.061 2.03831 391.353 12.5555C356.225 23.577 324.568 43.5468 299.491 70.5034C273.433 98.0619 253.786 132.107 241.075 171.476C228.795 209.589 223.471 251.19 225.29 295.208C227.246 339.924 236.099 384.07 251.536 426.083C267.548 470.255 290.364 511.655 319.157 548.784C347.822 585.791 380.817 616.218 417.187 639.352C452.244 661.699 488.914 676.284 526.184 682.696C563.453 689.107 599.429 687.026 633.043 676.509C668.168 665.481 699.824 645.512 724.905 618.561H724.942ZM726.011 620.005C618.851 733.37 436.215 702.024 318.126 549.796C200.037 397.568 191.207 182.35 298.385 69.0598C405.564 -44.23 588.218 -12.8845 706.307 139.25C824.396 291.384 833.245 506.696 726.048 620.005H726.011Z" stroke="#CACACA"/>
        <path d="M690.113 663.874C720.109 639.184 744.199 607.445 761.653 569.519C778.526 532.905 788.555 492.093 791.48 448.205C794.307 403.505 789.94 358.64 778.544 315.324C766.679 269.53 747.538 225.938 721.853 186.212C697.33 147.721 666.333 113.763 630.235 85.839C596.34 59.9678 559.951 41.6142 522.025 31.3407C484.1 21.0672 446.624 19.3799 410.554 26.3164C373.214 33.4993 338.302 50.0233 309.075 74.3469C279.079 99.0371 254.989 130.776 237.535 168.702C220.663 205.334 210.633 246.147 207.708 290.016C204.882 334.722 209.249 379.593 220.644 422.915C232.494 468.72 251.636 512.321 277.336 552.046C301.859 590.537 332.855 624.495 368.954 652.419C402.849 678.272 439.237 696.607 477.182 706.88C515.126 717.154 552.602 718.841 588.672 711.904C626.014 704.728 660.927 688.203 690.151 663.874H690.113ZM691.144 665.43C567.75 766.965 381.983 716.629 276.211 552.946C170.439 389.264 184.724 174.251 308.081 72.7909C431.438 -28.6694 617.261 21.5921 723.034 185.275C828.806 348.957 814.52 563.97 691.163 665.449L691.144 665.43Z" stroke="#CACACA"/>
        <path d="M649.112 705.304C683.438 683.316 712.292 653.782 733.475 618.954C754.94 584.29 769.788 544.733 777.568 501.408C785.379 457.275 785.747 412.145 778.655 367.89C771.311 320.954 756.227 275.563 734.018 233.566C712.608 192.488 684.185 155.468 650.03 124.176C619.157 95.7523 583.117 73.5161 543.865 58.6726C507.246 44.7207 467.998 39.0297 428.925 42.0063C389.654 45.1914 351.761 57.949 318.56 79.1635C284.242 101.169 255.39 130.707 234.197 165.532C212.731 200.196 197.902 239.734 190.103 283.059C182.302 327.193 181.934 372.321 189.016 416.577C196.379 463.514 211.476 508.904 233.691 550.901C255.098 591.986 283.529 629.007 317.697 660.292C348.567 688.715 384.6 710.957 423.844 725.813C460.462 739.769 499.712 745.453 538.784 742.461C578.059 739.296 615.957 726.537 649.149 705.304H649.112ZM650.012 706.954C511.132 795.066 324.146 725.551 232.397 551.745C140.648 377.939 178.836 165.551 317.716 77.4387C456.596 -10.6735 643.544 58.9914 735.312 232.741C827.08 406.491 788.854 618.935 649.974 706.954H650.012Z" stroke="#CACACA"/>
        <path d="M602.11 742.219C639.791 724.168 672.895 697.819 698.94 665.149C725.512 631.857 745.376 593.727 757.431 552.872C770.304 509.889 775.601 464.995 773.085 420.197C770.571 372.64 759.892 325.871 741.515 281.936C723.655 238.602 698.224 198.793 666.413 164.372C637.215 132.668 602.264 106.795 563.415 88.1265C526.804 70.3699 486.827 60.6234 446.151 59.5369C405.237 58.5675 364.672 67.2779 327.762 84.9582C290.11 103.046 257.038 129.419 231.026 162.103C204.454 195.396 184.59 233.525 172.535 274.381C159.664 317.364 154.367 362.257 156.881 407.055C159.398 454.589 170.084 501.335 188.47 545.241C206.336 588.589 231.794 628.401 263.646 662.806C292.823 694.502 327.748 720.375 366.569 739.051C403.152 756.794 443.095 766.541 483.739 767.64C524.648 768.612 565.207 759.901 602.11 742.219V742.219ZM602.841 743.944C449.357 817.058 263.234 728.384 187.101 545.935C110.969 363.487 173.66 156.329 327.2 83.2334C480.74 10.1378 666.807 98.8124 742.939 281.261C819.072 463.709 756.306 670.848 602.785 743.944H602.841Z" stroke="#CACACA"/>
        <path d="M549.411 774.014C590.142 760.184 627.284 737.463 658.145 707.498C689.112 677.438 713.854 641.573 730.96 601.951C748.948 560.715 759.338 516.569 761.63 471.639C764.162 424.016 758.136 376.325 743.839 330.828C729.94 285.628 707.914 243.342 678.842 206.046C651.841 171.26 618.511 141.886 580.607 119.471C544.361 97.8847 504.04 84.0336 462.18 78.7895C419.942 73.5435 377.065 77.9537 336.779 91.6876C296.052 105.534 258.912 128.26 228.045 158.222C197.087 188.284 172.351 224.149 155.25 263.769C137.313 305.015 126.974 349.161 124.729 394.081C122.189 441.7 128.195 489.39 142.464 534.892C156.369 580.093 178.402 622.379 207.48 659.674C234.467 694.446 267.769 723.817 305.64 746.249C341.877 767.81 382.175 781.659 424.011 786.93C466.25 792.18 509.129 787.763 549.411 774.014V774.014ZM549.973 775.888C383.123 832.524 199.849 724.914 140.833 535.492C81.8165 346.069 169.348 146.561 336.292 89.9066C503.237 33.2524 686.416 140.88 745.414 330.284C804.412 519.688 716.918 719.159 549.973 775.813V775.888Z" stroke="#CACACA"/>
        <path d="M491.354 800.148C534.791 790.746 575.678 772.052 611.205 745.35C646.324 718.947 675.869 685.853 698.136 647.977C721.177 609.068 736.76 566.204 744.086 521.583C759.685 426.759 739.436 329.524 687.281 248.81C662.862 211.145 631.533 178.443 594.951 152.43C559.516 127.09 519.352 109.125 476.843 99.6002C433.609 89.9622 388.792 89.8726 345.519 99.3377C302.079 108.732 261.19 127.427 225.667 154.136C190.555 180.533 161.016 213.621 138.755 251.491C115.685 290.394 100.07 333.258 92.7116 377.885C77.1326 472.708 97.3801 569.936 149.516 650.658C173.938 688.315 205.266 721.011 241.846 747.019C277.309 772.371 317.505 790.337 360.048 799.849C403.252 809.472 448.034 809.568 491.279 800.13L491.354 800.148ZM491.672 802.004C312.617 840.868 134.574 714.68 94.0802 520.177C53.586 325.674 165.976 136.382 345.069 97.5005C524.161 58.6187 702.148 184.788 742.736 379.328C783.324 573.869 670.859 763.085 491.747 801.967L491.672 802.004Z" stroke="#CACACA"/>
        <path d="M428.435 820.038C474.27 815.294 518.603 801.001 558.579 778.082C597.56 755.721 631.756 725.901 659.214 690.326C687.181 654.305 708.013 613.277 720.593 569.443C747.026 476.726 736.552 377.376 691.366 292.208C669.961 251.942 641.059 216.136 606.215 186.717C571.954 157.63 532.298 135.576 489.514 121.814C445.626 107.765 399.296 102.997 353.467 107.812C307.638 112.628 263.311 126.921 223.302 149.785C184.322 172.14 150.126 201.953 122.667 237.523C94.7229 273.553 73.9158 314.589 61.3633 358.424C34.8874 451.128 45.3281 550.483 90.4966 635.659C111.919 675.918 140.826 711.722 175.665 741.149C209.925 770.229 249.573 792.282 292.349 806.053C336.236 820.17 382.594 824.935 428.435 820.038V820.038ZM428.641 821.913C238.769 841.86 68.0561 697.75 47.2841 500.059C26.5122 302.369 163.517 125.901 353.315 105.86C543.112 85.8196 713.806 230.005 734.597 427.714C755.387 625.423 618.364 801.966 428.566 821.913H428.641Z" stroke="#CACACA"/>
        <path d="M360.948 833.256C443.622 833.323 523.773 804.779 587.795 752.469C651.817 700.16 695.766 627.308 712.181 546.28C728.596 465.251 716.467 381.039 677.852 307.937C639.237 234.834 576.516 177.346 500.334 145.231C412.825 108.263 314.215 107.572 226.197 143.31C138.179 179.049 67.9631 248.288 30.9956 335.797C-5.97182 423.305 -6.66249 521.915 29.0756 609.933C64.8137 697.951 134.053 768.167 221.562 805.135C265.659 823.791 313.067 833.355 360.948 833.256V833.256ZM360.948 835.13C162.227 835.13 1 673.904 1 475.183C1 276.461 162.227 115.235 360.948 115.235C559.669 115.235 720.895 276.461 720.895 475.183C720.895 673.904 559.669 835.13 360.948 835.13Z" stroke="#CACACA"/>
        </svg>
      </div>
      <div className="absolute bottom-6 right-6">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.9859 20C4.28773 20 0 15.5396 0 10.0144C0 4.46043 4.28773 0 9.9859 0C15.7123 0 20 4.46043 20 10.0144C20 15.5396 15.7123 20 9.9859 20ZM9.9859 18.3885C14.8096 18.3885 18.1664 14.6475 18.1664 10.0144C18.1664 5.35252 14.8096 1.61151 9.9859 1.61151C5.19041 1.61151 1.83357 5.35252 1.83357 10.0144C1.83357 14.6475 5.19041 18.3885 9.9859 18.3885ZM12.1298 15.0791L9.78844 11.3957H8.23696V15.0791H6.37518V4.94964H10.2116C12.5811 4.94964 14.0197 6.10072 14.0197 8.17266C14.0197 9.66906 13.0607 10.7338 11.7066 11.1367L14.3583 15.0791H12.1298ZM10.0987 6.5036H8.23696V9.84173H10.0987C11.481 9.84173 12.1862 9.23741 12.1862 8.17266C12.1862 7.13669 11.481 6.5036 10.0987 6.5036Z" fill="#111111"/>
        </svg>
      </div>
      <div className="absolute right-6 bottom-[15rem] max-md:bottom-24">
      <svg width="49" height="2" viewBox="0 0 49 2" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="1" x2="49" y2="1" stroke="black" strokeWidth="2"/>
      </svg>
      </div>
    </section>

    <section className="w-full xl:container mx-auto">
      <div className="flex max-md:flex-col sticky top-0">
        <div className="w-[50%] max-md:w-full p-6 pl-4 flex flex-col justify-between">
          <div className="flex items-center justify-between max-md:mb-10">
            <p className="sansMedium text-[#111]">CEO</p>
            <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/william-shane-dunn-b4a913305/">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_85_537)">
                <path d="M20.3715 0H1.62422C0.726172 0 0 0.708984 0 1.58555V20.4102C0 21.2867 0.726172 22 1.62422 22H20.3715C21.2695 22 22 21.2867 22 20.4145V1.58555C22 0.708984 21.2695 0 20.3715 0ZM6.52695 18.7473H3.26133V8.2457H6.52695V18.7473ZM4.89414 6.81484C3.8457 6.81484 2.99922 5.96836 2.99922 4.92422C2.99922 3.88008 3.8457 3.03359 4.89414 3.03359C5.93828 3.03359 6.78477 3.88008 6.78477 4.92422C6.78477 5.96406 5.93828 6.81484 4.89414 6.81484ZM18.7473 18.7473H15.4859V13.6426C15.4859 12.4266 15.4645 10.8582 13.7887 10.8582C12.0914 10.8582 11.8336 12.1859 11.8336 13.5566V18.7473H8.57656V8.2457H11.7047V9.68086H11.7477C12.1816 8.85586 13.2473 7.98359 14.8328 7.98359C18.1371 7.98359 18.7473 10.1578 18.7473 12.9852V18.7473Z" fill="#111111"/>
                </g>
                <defs>
                <clipPath id="clip0_85_537">
                <rect width="22" height="22" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </Link>
            </div>
          </div>
          <div>
            <h3 className="sansMedium text-2xl text-[#111] mb-4">William Shane Dunn</h3>
            <p className="text-[#000] sansRegular text-base md:text-xs lg:text-base">
            {`William Shane Dunn is a seasoned investor with a strategic focus on public 
            companies since 2012. His journey in the financial markets began in 1995, 
            where he demonstrated exceptional trading results, particularly with the S&P 
            500. Over the years, William has successfully orchestrated over 25 transactions 
            in both public and private markets, including Nasdaq up-listings, IPO's, and 
            pre-IPO's. His expertise in financing and capital raising has been instrumental 
            in helping numerous public companies achieve their strategic goals. 
            William’s thoughtful and disciplined approach to investing has consistently 
            delivered value, making him a trusted advisor and leader in the industry.`}
            </p>
          </div>
        </div>
        <div className="w-[50%] max-md:w-full">
           <Image src="/images/ceo.png" alt="CEO" width={720} height={660}/>
        </div>
      </div>
      <div className="flex max-md:flex-col sticky top-0">
      <div className="w-[50%] max-md:w-full bg-[#F8F8F8] p-6 pl-4 flex flex-col justify-between">
          <div className="flex items-center justify-between max-md:mb-10">
            <p className="sansMedium text-[#111]">CFO</p>
            <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/jaden-d-075a59169/">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_85_537)">
                <path d="M20.3715 0H1.62422C0.726172 0 0 0.708984 0 1.58555V20.4102C0 21.2867 0.726172 22 1.62422 22H20.3715C21.2695 22 22 21.2867 22 20.4145V1.58555C22 0.708984 21.2695 0 20.3715 0ZM6.52695 18.7473H3.26133V8.2457H6.52695V18.7473ZM4.89414 6.81484C3.8457 6.81484 2.99922 5.96836 2.99922 4.92422C2.99922 3.88008 3.8457 3.03359 4.89414 3.03359C5.93828 3.03359 6.78477 3.88008 6.78477 4.92422C6.78477 5.96406 5.93828 6.81484 4.89414 6.81484ZM18.7473 18.7473H15.4859V13.6426C15.4859 12.4266 15.4645 10.8582 13.7887 10.8582C12.0914 10.8582 11.8336 12.1859 11.8336 13.5566V18.7473H8.57656V8.2457H11.7047V9.68086H11.7477C12.1816 8.85586 13.2473 7.98359 14.8328 7.98359C18.1371 7.98359 18.7473 10.1578 18.7473 12.9852V18.7473Z" fill="#111111"/>
                </g>
                <defs>
                <clipPath id="clip0_85_537">
                <rect width="22" height="22" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </Link>
            </div>
          </div>
          <div>
            <h3 className="sansMedium text-2xl text-[#111] mb-4">Jaden Dunn</h3>
            <p className="text-[#000] sansRegular text-base md:text-xs lg:text-base">
            {`With a financial background developed through rigorous self- study, extensive 
            coursework in Finance & Economics, and hands-on experience, Jaden has 
            an eye for identifying undervalued public companies. Jaden knows how to 
            expertly analyze stocks and read balance sheets to value companies. 
            Jaden has participated in 2 Nasdaq uplistings and has helped a handful 
            of public companies achieve their financial goals.`}
            </p>
          </div>
      </div>
        <div className="w-[50%] max-md:w-full">
           <Image src="/images/cfo.png" alt="CEO" width={720} height={660}/>
        </div>
      </div>
      <div className="flex max-md:flex-col sticky top-0">
      <div className="w-[50%] max-md:w-full bg-[#FFF] p-6 pl-4 flex flex-col justify-between">
          <div className="flex items-center justify-between max-md:mb-10">
            <p className="sansMedium text-[#111]">CFO</p>
            <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/preston-dunn-7244b5294/">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_85_537)">
                <path d="M20.3715 0H1.62422C0.726172 0 0 0.708984 0 1.58555V20.4102C0 21.2867 0.726172 22 1.62422 22H20.3715C21.2695 22 22 21.2867 22 20.4145V1.58555C22 0.708984 21.2695 0 20.3715 0ZM6.52695 18.7473H3.26133V8.2457H6.52695V18.7473ZM4.89414 6.81484C3.8457 6.81484 2.99922 5.96836 2.99922 4.92422C2.99922 3.88008 3.8457 3.03359 4.89414 3.03359C5.93828 3.03359 6.78477 3.88008 6.78477 4.92422C6.78477 5.96406 5.93828 6.81484 4.89414 6.81484ZM18.7473 18.7473H15.4859V13.6426C15.4859 12.4266 15.4645 10.8582 13.7887 10.8582C12.0914 10.8582 11.8336 12.1859 11.8336 13.5566V18.7473H8.57656V8.2457H11.7047V9.68086H11.7477C12.1816 8.85586 13.2473 7.98359 14.8328 7.98359C18.1371 7.98359 18.7473 10.1578 18.7473 12.9852V18.7473Z" fill="#111111"/>
                </g>
                <defs>
                <clipPath id="clip0_85_537">
                <rect width="22" height="22" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </Link>
            </div>
          </div>
          <div>
            <h3 className="sansMedium text-2xl text-[#111] mb-4">Preston Dunn</h3>
            <p className="text-[#000] sansRegular text-base md:text-xs lg:text-base">
            {`With experience in high volume sales and marketing. Preston has helped 
            multiple companies achieve their marketing and sales goals. With a massive 
            investor data base of over 100,000 people, Preston's expertise has 
            transitioned into Investor Relations, Marketing, and Sales.`}
            </p>
          </div>
        </div>
        <div className="w-[50%] max-md:w-full">
           <Image src="/images/cmo.png" alt="CEO" width={720} height={660}/>
        </div>
      </div>
    </section>

    <Footer />
    </div>
  );
}