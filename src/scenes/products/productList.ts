import ProductImageBoarding from "@/assets/onboarding.png";
import ProductImagePayroll from "@/assets/payroll.png";
import ProductImageLeave from "@/assets/leave.png";
import ProductImageClaim from "@/assets/claim.png";
import ProductImagePerformance from "@/assets/performance.png";


export const productLists = [
    {
        id: 'boarding',
        imgUrl: ProductImageBoarding,
        title: 'Boarding System', 
        link: 'boarding'
    },
    {
        id: 'payroll',
        imgUrl: ProductImagePayroll,
        title: 'E-Payroll System',
        link: 'payroll' 
    },
    {
        id: 'leave',
        imgUrl: ProductImageLeave,
        title: 'E-Leave System', 
        link: 'leave'
    },
    {
        id: 'claim',
        imgUrl: ProductImageClaim,
        title: 'E-Claim System',
        link: 'claim'
    },
    {
        id: 'performance',
        imgUrl: ProductImagePerformance,
        title: 'Performance Tracker',
        link: 'performance'
    },
]