import Link from "next/link";
import React from "react";
import { TitleText } from "./components";

const NotFound = () => {
    return (
        <>
            <div className="h-[64dvh] grid items-center">
                <div>
                    <TitleText
                        title={"404: Page not found"}
                        textStyles={"text-center mx-4 mt-0"}
                    />
                    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-8 mx-4 underline">
                        <Link href="/" className="hover:text-white text-xl">
                            Return to home page
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NotFound;
