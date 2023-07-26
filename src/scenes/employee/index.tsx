import HText from "@/shared/HText";
import { motion } from "framer-motion";
import PerformanceGraphic from "@/assets/performance1.png"
import ImageSection from "../products/productImageSection"
import ProductDescription from "../products/productDescription";

const Employee = () => {
    return (
        <section id="leave" className="mx-auto min-h-screen w-5/6 pt-24"> 
        <HText><span className="text-primary-500">Employee Self-Service (ESS) </span>Human Resource System</HText>
            <motion.div className="w-full mx-auto flex md:flex-row flex-col gap-8" 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0},
            }}
            > 
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
                    <ImageSection imageSrc={PerformanceGraphic} altText="PerformanceGraphic"/>
                </motion.div>

                <motion.div className="mt-10 w-full h-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0},
                }}
                >
                    <ProductDescription 
                        number={1}
                        title="Seamless and Efficient HR Processes:"
                        description="ESS portals streamline HR processes,
                        enabling employees to request time off, access pay stubs, HR documents, and enroll in benefits independently. This saves time for
                        employees and HR administrators while minimizing errors in manual data entry."
                    />
                    <ProductDescription 
                        number={2}
                        title="Empowerment and Independence:"
                        description="SS portals empower employees with direct access
                        to HR information and tasks. They can view and update personal details, fostering ownership and
                        accountability while reducing reliance on HR administrators."
                    />
                    <ProductDescription 
                        number={3}
                        title="Performance Tracking and Feedback:"
                        description="ESS portals empower employees with performance tracking to
                        access evaluations, goals, and feedback. Transparency fosters continuous improvement, empowering them to monitor progress, identify development areas,
                        and align with organizational goals."
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Employee
