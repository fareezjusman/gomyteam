import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
    return (
        <AnchorLink
        className= "rounded-md bg-primary-500 px-5 py-2 hover:bg-secondary-400 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton