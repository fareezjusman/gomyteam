import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { productLists } from "./productList";
import Product from "./Product";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Products = ({setSelectedPage}: Props) => {
  const [active, setActive] = useState("payroll")

  return (
    <section id="ourproducts" className="mx-auto min-h-full w-5/6 pt-24">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}>
        {/* HEADER */}
            <div className="md:my-5 md:w-4/5">
                    <HText><span className="text-primary-500">Our</span> Products</HText>
                    <p className="my-5 text-md text-justify">
                    GoMyTeam's products include an intuitive HR management platform, efficient payroll, 
                    seamless leave management, and automated claims processing. With comprehensive 
                    features and resources, it empowers your workforce for success and fosters a 
                    thriving work environment.
                    </p>
            </div>
        </motion.div>
        {/* PRODUCTS */}
        <div className="mt-[30px] flex md:flex-row flex-col min-h-[70vh] gap-5">
          {productLists.map((product, index) => (
            <Product
            id={product.id}
            imgUrl={product.imgUrl}
            title={product.title}
            index={index}
            active={active}
            handleClick={setActive}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
    </section>
  )
}

export default Products