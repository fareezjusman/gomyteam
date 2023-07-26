import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { RectangleGroupIcon, PresentationChartLineIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <ClipboardDocumentListIcon className="h-8 w-8" />,
        title: "Efficient HR Management",
        description: "GoMyTeam offers a user-friendly platform that streamlines HR processes, including payroll, leave management, and claims. It optimizes efficiency, saving valuable time and resources for your organization."
    },
    {
        icon: <RectangleGroupIcon className="h-8 w-8" />,
        title: "Comprehensive Features",
        description: "With a wide array of tools, from seamless onboarding to performance evaluations and training resources, GoMyTeam covers all aspects of HR management. It ensures a holistic approach to workforce development and engagement."
    },
    {
        icon: <PresentationChartLineIcon className="h-8 w-8" />,
        title: "Empower Workforce Success",
        description: "GoMyTeam empowers your employees to excel at work and fosters effective teamwork. By providing the necessary resources, it promotes employee growth, productivity, and overall satisfaction, contributing to your organization's success."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    },

}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="aboutus"
    className="mx-auto min-h-screen w-5/6 pt-24">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
            {/* HEADER */}
            <div className="md:my-5 md:w-4/5">
                <HText><span className="text-primary-500">All-In-One</span> HR Management Solution</HText>
                <p className="my-5 text-md text-justify">
                GoMyTeam provides a comprehensive HR management solution, streamlining payroll, leave management, 
                and claims processes. With seamless onboarding, evaluations, and training resources, 
                it empowers your workforce for success, ensuring efficient, engaged, and productive operations.
                </p>
            </div>
            {/* WHY US (BENEFITS) */}
            <motion.div className="mt-5 md:flex items-center justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benefits