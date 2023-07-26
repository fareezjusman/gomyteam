import HText from "@/shared/HText";
import { motion } from "framer-motion";
import PayrollGraphic from "@/assets/system.png"
import ImageSection from "../products/productImageSection"
import ProductDescription from "../products/productDescription";

const Payroll = () => {
    return (
        <section id="payroll" className="mx-auto min-h-screen w-5/6 pt-24"> 
            <HText><span className="text-primary-500">Human Resource</span> Information System (HRIS)</HText>
            <motion.div className="w-full mx-auto flex md:flex-row flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0},
            }}
            > 
                <motion.div className="mt-10 w-full h-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity:0, y:-50},
                    visible: {opacity:1, y:0},
                }}
                >
                    <ProductDescription 
                        number={1}
                        title="Centralized Data Management:"
                        description="An HRIS acts as a centralized database
                        for employee-related information like personal details, performance evaluations, and training records. This approach ensures
                        accessible, secure, and organized data, reducing discrepancies and duplication."
                    />
                    <ProductDescription
                        number={2}
                        title="Streamlined HR Workflows:"
                        description="An HRIS streamlines HR workflows, automating onboarding,
                        leave requests, and benefits enrollment, reducing paperwork and administrative burden. This enhances efficiency and enables HR to focus
                        on strategic initiatives and employee support."
                    />
                    <ProductDescription 
                        number={3}
                        title="Comprehensive Functionality:"
                        description="HRIS platforms provide comprehensive support for HR operations,
                        including accurate payroll processing, efficient performance management, and streamlined appraisals. Consolidating these functionalities promotes
                        collaboration, data integrity, and better decision-making in the HR department."
                    />
                </motion.div>

                <motion.div className="w-full flex"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0},
                }}
                > 
                    <ImageSection imageSrc={PayrollGraphic} altText="PayrollGraphic"/>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Payroll
