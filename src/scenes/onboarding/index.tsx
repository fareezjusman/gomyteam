import HText from "@/shared/HText";
import { motion } from "framer-motion";
import OnboardingGraphic from "@/assets/onboardingGraphic.png"
import ImageSection from "../products/productImageSection"
import ProductDescription from "../products/productDescription";

const Onboarding = () => {
    return (
        <section id="boarding" className="mx-auto min-h-screen w-5/6 pt-24"> 
            <HText><span className="text-primary-500">Seamless Onboarding &</span> Offboarding Automation</HText>
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
                <ImageSection imageSrc={OnboardingGraphic} altText="OnboardingGraphic" />

                <motion.div
                    className="mt-10 w-full h-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <ProductDescription 
                    number={1}
                    title="Efficiency and Time Savings:"
                    description="Onboarding and offboarding automation streamlines the process,
                    reducing manual paperwork and administrative tasks. It saves HR teams valuable time and resources,
                    enabling them to focus on more strategic initiatives and employee support."
                /> 

                <ProductDescription 
                    number={2}
                    title="Consistency and Compliance:"
                    description="Automation ensures a standardized onboarding
                    and offboarding process, minimizing the risk of errors and ensuring compliance with company policies and legal regulations.
                    It guarantees that all necessary steps are followed consistently for every employee, enhancing the overall employee experience."
                /> 

                <ProductDescription 
                    number={3}
                    title="Enhanced Employee Experience:"
                    description="Automated onboarding creates a positive first
                    impression for new hires, ensuring a smooth and organized introduction to the company. Offboarding automation ensures a respectful
                    exit process, leaving departing employees with a positive last impression, resulting in improved satisfaction and retention rates."
                />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Onboarding
