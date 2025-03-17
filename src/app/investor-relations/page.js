'use client';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const InvstorRelation = ()=> {
    const [ imageSrc, setImageSrc ] = useState("/images/investor.png");



    return (
        <div>

            <section className="w-full xl:container mx-auto max-xl:px-4">
                <Navbar textcolor="text-[#000]" strokecolor="#000"/>
                <div className="flex max-lg:flex-col items-end max-lg:items-start justify-between xl:gap-20 md:gap-12 gap-y-10">
                    <h1 className="xl:text-[10rem] md:text-[9rem] max-sm:text-[20vw] text-[8rem] text-[#111] leading-[90%] inter font-bold uppercase mb-[-8px]">
                        Dunn<br/>Capital
                    </h1>
                    <p className="sansRegular text-base max-md:text-lg text-[#000]  max-lg:w-[80%] max-md:w-full">
                    We create long-term value for investors by focusing on high-growth sectors and 
                    emerging markets. Through strategic investments, mergers & acquisitions, and innovative 
                    financial solutions, we maximize potential and drive sustainable success.
                    </p>
                </div>
                <div className="flex flex-wrap items-start justify-between my-44 max-lg:my-16 gap-y-10">
                    <p className="text-[#8D8D8D] text-sm sansRegular">(Reverse Takeover)</p>
                    <h4 className="text-2xl md:text-3xl sansMedium text-[#111] leading-tight -mt-2 xl:w-[65%] lg:w-[60%] md:w-[80%]">
                    Investor Relations (IR) ensures transparency and trust by providing investors 
                    <span className="text-[#11111180]"> with key financial insights and strategic communication.</span>
                    </h4>
                    <Link className="border-b-[1.3px] border-[#111] text-[#111] flex items-center gap-2 text-sm sansMedium uppercase" href="#contact">
                    Contact Us
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8538 5.35372L7.35375 9.85372C7.25993 9.94754 7.13268 10.0003 7 10.0003C6.86732 10.0003 6.74007 9.94754 6.64625 9.85372C6.55243 9.7599 6.49972 9.63266 6.49972 9.49997C6.49972 9.36729 6.55243 9.24004 6.64625 9.14622L10.2931 5.49997H0.5C0.367392 5.49997 0.240215 5.44729 0.146447 5.35353C0.0526785 5.25976 0 5.13258 0 4.99997C0 4.86736 0.0526785 4.74019 0.146447 4.64642C0.240215 4.55265 0.367392 4.49997 0.5 4.49997H10.2931L6.64625 0.853723C6.55243 0.759902 6.49972 0.632655 6.49972 0.499973C6.49972 0.367291 6.55243 0.240043 6.64625 0.146223C6.74007 0.0524025 6.86732 -0.000305176 7 -0.000305176C7.13268 -0.000305176 7.25993 0.0524025 7.35375 0.146223L11.8538 4.64622C11.9002 4.69266 11.9371 4.7478 11.9623 4.8085C11.9874 4.8692 12.0004 4.93427 12.0004 4.99997C12.0004 5.06568 11.9874 5.13074 11.9623 5.19144C11.9371 5.25214 11.9002 5.30729 11.8538 5.35372Z" fill="#111"/>
                    </svg>
                    </Link>
                </div>
            </section>

            <section className="w-full xl:container mx-auto max-xl:px-4 py-30 max-md:py-16">
                <p className="text-[#8D8D8D] text-sm sansRegular mb-2 max-md:mb-4">(About)</p>
                <div className="flex max-md:flex-col justify-between gap-16">
                <div className="w-[40%] max-md:w-full">
                  <h2 className="xl:text-6xl md:text-4xl text-4xl inter font-medium text-[#111]">Commitment to Investor Success</h2>
                </div>
                <div className="w-[55%] max-md:w-full flex flex-col gap-y-8">
                    <p className="sansRegular text-base max-md:text-lg text-[#111]">
                    <span className="sansMedium">With a focus on high-growth sectors and emerging 
                        markets</span>, we ensure transparency, trust, and strategic alignment with investor
                         interests.
                    </p>
                    <p className="sansRegular text-base max-md:text-lg text-[#111]">
                    Our hands-on approach goes beyond capital investment—we provide strategic 
                    guidance to help businesses unlock their full potential. At Dunn Capital, we are 
                    committed to delivering exceptional results while upholding the highest standards 
                    of integrity, transparency, and investor engagement.
                    </p>
                    <p className="sansRegular text-base max-md:text-lg text-[#111]">
                    We actively engage with our investors, providing comprehensive financial insights and 
                    market updates to support informed decision-making. 
                    </p>
                </div>
                </div>
            </section>
            
            <section className="w-full xl:container mx-auto max-xl:px-4 py-24 max-md:py-16 flex items-center max-md:flex-col justify-between">
                {/* left section */}
                <div className="w-[35%] max-md:w-full">
                    <Image src={imageSrc} width={453} height={635} alt="imag" className="w-full"/>
                </div>
                {/* right section */}
                <div className="w-[55%] max-md:w-full">
                    <h4 className={`text-2xl lg:text-3xl sansMedium text-[#111] flex items-center gap-4 py-8 px-3 cursor-pointer select-none ${imageSrc === "/images/investor.png" ? "bg-[#F3F3F3] border-y border-[#111111]/16" : "bg-transparent"}`}
                    onClick={()=> setImageSrc("/images/investor.png")}
                    >
                    <span className="sansRegular text-[#8D8D8D] text-base">(01)</span>
                    Latest Financial Reports
                    </h4>
                    <h4 className={`text-2xl lg:text-3xl sansMedium text-[#111] flex items-center gap-4 py-8 px-3 cursor-pointer select-none ${imageSrc === "/images/handshake.png" ? "bg-[#F3F3F3] border-y border-[#111111]/16" : "bg-transparent"}`}
                    onClick={()=> setImageSrc("/images/handshake.png")}
                    >
                    <span className="sansRegular text-[#8D8D8D] text-base">(02)</span>
                     Investor News & Insights
                    </h4>
                    <h4 className={`text-2xl lg:text-3xl sansMedium text-[#111] flex items-center gap-4 py-8 px-3 cursor-pointer select-none ${ imageSrc === "/images/cfo.png" ? "bg-[#F3F3F3] border-y border-[#111111]/16" : "bg-transparent" }`}
                    onClick={()=> setImageSrc("/images/cfo.png")}
                    >
                    <span className="sansRegular text-[#8D8D8D] text-base">(03)</span>
                    Stakeholder Engagement
                    </h4>
                    <h4 className={`text-2xl lg:text-3xl sansMedium text-[#111] flex items-center gap-4 py-8 px-3 cursor-pointer select-none ${ imageSrc === "/images/cmo.png" ? "bg-[#F3F3F3] border-y border-[#111111]/16" : "bg-transparent" }`}
                    onClick={()=> setImageSrc("/images/cmo.png")}
                    >
                    <span className="sansRegular text-[#8D8D8D] text-base">(04)</span>
                    Sustainability & Growth
                    </h4>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default InvstorRelation;