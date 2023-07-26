import { motion } from "framer-motion";

interface Props {
    imageSrc: string;
    altText: string;
}

const productImageSection = ({ imageSrc, altText }: Props) => {
    return (
        <motion.div
            className="w-full flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
           <img src={imageSrc} alt={altText} className="w-full" />
    </motion.div>
    )
}

export default productImageSection
