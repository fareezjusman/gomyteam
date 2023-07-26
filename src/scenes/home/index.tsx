import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageTextGo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HomePageGraphics from '@/assets/HomeGo.png';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div className="md:flex mx-auto h-full w-5/6 items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-8 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0},
                    }}>
                        <div>
                            <div>
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className='ml-5 text-md text-justify'>
                        MyGoTeam offers a seamless HR Management System,
                        empowering clients with payroll, leave, claims, onboarding, evaluations, and training features. 
                        Elevate workforce performance, streamline processes, and achieve excellence with our user-friendly, 
                        all-in-one solution. Simplify HR management and unlock your team's potential with MyGoTeam.
                        </p>
                    </motion.div>
                    {/* Action */}
                    <motion.div className='ml-5 mt-8 flex items-center gap-8'
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
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGE */}
                <motion.div className='flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.3, duration: 0.5}}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0},
                    }}
                >
                    <img src={HomePageGraphics} alt="home-pageGraphics" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Home
