
interface Props {
    number: number;
    title: string;
    description: string;
}

const productDescription = ({number, title, description}: Props) => {
    return (
        <div className="flex justify-center w-full pb-8 text-justify">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-[12px] bg-primary-500">
                <p className="font-bold text-[20px] text-black">{number}</p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-md text-black leading-[32.4px]">
                <span className="text-bold text-primary-500">{title}:</span> {description}
            </p>
        </div>
    )
}

export default productDescription
