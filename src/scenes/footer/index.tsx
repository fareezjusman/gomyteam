import Logo from "@/assets/LogoMain.png"
import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage} : Props) => {
    return (
        <footer className="bg-primary-300 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                    GoMyTeam: Your ultimate HR solution, simplifying operations,
                    empowering success. Streamline HR management and elevate your workforce to excellence.
                    </p>
                    <p>&copy; GoMyTeam All Right Reserve</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5" onClick={() => setSelectedPage(SelectedPage.Home)}>
                        Home
                    </p>
                    <p className="my-5" onClick={() => setSelectedPage(SelectedPage.Benefits)}>
                        Benefit
                    </p>
                    <p className="my-5" onClick={() => setSelectedPage(SelectedPage.OurProducts)}>
                        Our Products
                    </p>
                    </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Address: Kuala Lumpur</p>
                    <p className="my-5">Phone Number : 03 - 3000 3000</p>
                </div>
            </div>
        </footer>
    )
}

export default index
