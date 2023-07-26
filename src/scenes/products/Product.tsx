import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '@/shared/types';
import { productLists } from "./productList";

const fadeIn = (direction:string, type:string, delay:number, duration:number) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

interface Props {
    id: string;
    imgUrl: string;
    title: string;
    index: number;
    active: string;
    setSelectedPage: (value: SelectedPage) => void;
    handleClick: (id: string) => void;
}


const Product = ({id, imgUrl, title, index, active, handleClick, setSelectedPage}: Props) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${
            active === id ? 'md:flex-[3.5] flex-[10]' : 'md:flex-[0.5] flex-[2]'
            } flex items-center justify-center min-w-auto h-auto transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
            onClick={() => handleClick(id)}
        >
            <img src={imgUrl} 
            alt="ourproducts-pic"  
            className="absolute w-full h-full object-cover rounded-[24px]"/>
             {active !== id ? (
      <h3 className="font-semibold sm:text-[24px] text-[16px] text-white absolute z-0 md:bottom-20 md:rotate-[-90deg] md:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <p className="font-normal text-[20px] leading-[20.16px] text-white uppercase">
          GoMyTeam
        </p>
        <h2 className="mt-[8px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <motion.div className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0},
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Book Demo
                        </ActionButton>
                        <AnchorLink 
                          className='text-md font-bold text-primary-500 underline hover:text-secondary-500'
                          onClick={() => setSelectedPage(active as SelectedPage)}
                          href={`#${active}`}
                        >
                          Learn More about {productLists.find((product) => product.link === active)?.title}
                        </AnchorLink>
                                      </motion.div>
                        </div>
                      )}
        </motion.div>
    )
}

export default Product
