import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center px-5 py-8 lg:px-10 xl:px-16 lg:py-6 text-center gap-6 border-t-2 border-black">
            <div className="flex gap-6 justify-center">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
            <div className="text-xs text-neutral-600">
                <p><a href="#">FAQ</a> | <a href="#">Events</a> | <a href="#">Contact Us</a> | <a href="#">Guidelines</a> | <a href="#">Investors</a> <br/>| <a href="#">Careers</a> | <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a> </p>
            </div>
            <div className="text-xs text-neutral-600">
                <p>We use cookies to make our site work better. This include analytics cookies and advertising cookies. For more information, please check our <a className=" text-blue-600 underline" href="#">Cookies Policy</a></p>
            </div>
        </div>
    )
}