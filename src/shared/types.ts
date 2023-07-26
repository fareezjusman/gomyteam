export enum SelectedPage {
    Home = "home",
    AboutUs = "aboutus",
    OurProducts = "ourproducts",
    ContactUs = "contactus",
    Boarding = "boarding",
    Payroll = "payroll",
    Performance= "performance"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }