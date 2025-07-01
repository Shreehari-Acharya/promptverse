import { InvertBtn, InvertBtn2 } from "./ui/custom-btns";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const router = useRouter();

    return (
        <div
            className="top-3 inset-x-0 max-w-4xl mx-auto z-50 border-1 py-2 px-6 rounded-full flex items-center font-light justify-between gap-4
              sticky
              sm:fixed"
        >
            <div className="flex justify-center flex-1 gap-4 text-xs
                sm:text-sm sm:gap-8
                md:text-base">
                <a href="/products" className="hidden sm:block"> Home</a>
                <a href="/about">About</a>
                <a href="/guides"> Guides</a>
                <a href="/pricing"> Pricing</a>
            </div>
            <div className="flex gap-4">
                <InvertBtn2 text="Log in" onClick={() => {router.push("/login")}} />
            </div>
        </div>
    )
}
