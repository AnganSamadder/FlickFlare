import OrderCard from "@/app/components/containers/OrderCard";

export default function OrderHistory() {

    return(
        <div className=" w-full h-full flex flex-col items-center justify-center mb-10">
            <h1 className="text-orange-500 text-5xl font-bold leading-normal">
                Order History
            </h1>
            <div className="text-center mb-8 bg-zinc-700 bg-opacity-50 rounded-[17px] p-6 w-3/4 justify-center">
                <p className="text-white text-[32px] font-medium font-['Maven Pro']">
                    Orders that are before the showtime can be refunded.
                </p>
                <div className="h-screen justify-items-center overflow-hidden overflow-y-scroll gap-y-4">
                    <OrderCard/>
                    <OrderCard/>
                </div>
            </div>
        </div>
    );
}