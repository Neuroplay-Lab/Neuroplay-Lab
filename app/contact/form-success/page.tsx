import Link from "next/link";
import { TitleText } from "../../components";

const SuccessPage = () => {
    return (
        <>
            <div className="h-[64dvh] grid items-center">
                <div>
                    <TitleText
                        title={"Form Submitted Successfully"}
                        textStyles={"text-center mx-4"}
                    />
                    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] text-center mb-8 mx-4 underline">
                        <Link href="/contact" className="hover:text-white">
                            Return to previous page
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SuccessPage;
