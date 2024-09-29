import { FC } from "react";

const Form: FC = () => {
    return (
        <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col">
                <div className="text-[18px]">Name</div>
                <input type="text" placeholder="Type your name" className="text-[27px] border-b py-[12px] border-black" />
            </div>
            <div className="flex flex-col text-[18px]">
                <div>Email</div>
                <input type="text" placeholder="Input your email" className="text-[27px] border-b py-[12px] border-black" />
            </div>
            <div className="flex flex-col text-[18px]">
                <div>Subject</div>
                <input type="text" placeholder="Input your subject" className="text-[27px] border-b py-[12px] border-black" />
            </div>
            <div className="flex flex-col text-[18px]">
                <div>Message</div>
                <input type="text" placeholder="Type your message" className="text-[27px] border-b pt-[12px] border-black pb-[120px]" />
            </div>
        </div>
    );
};


export default Form;