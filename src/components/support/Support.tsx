import Image from "next/image";
import Img from "./img/image_Contact_us.jpg";
import X from "./img/icone_X.svg";
import Instagram from "./img/icone_Instagram.svg";
import Facebook from "./img/icone_Facebook.svg";

function Support() {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row my-16 items-center lg:gap-5 gap-9 lg:w-[90%] w-[95%] sm:w-[60%] mx-auto"
        style={{ marginTop: "170px" }}
      >
        <div className="flex gap-2 flex-col w-[100%] lg:w-[50%] xl:w-[45%]  lg:mx-0">
          <div className="flex flex-col gap-5 lg:max-w-[70%] w-full">
            <h1 className="font-Sora text-[24px] md:text-[48px] font-[600] leading-[24px] md:leading-[40px] text-[#18181B]">
              Contact Us
            </h1>
            <p className="font-Sora text-[16px] font-[400] leading-[26px] text-[#3F3F46]">
              Our online shop is available 24-hours daily. We can be reach at
              the contacts below for any support issues between 8 AM to 8 PM
              daily.
            </p>
          </div>

          <h3 className="font-Sora text-[16px] font-[600] leading-[26px] text-[#3F3F46]">
            Our address
          </h3>
          <p className="font-Sora text-[16px] font-[400] leading-[26px] text-[#3F3F46]">
            Andover, MA 01810
          </p>
          <h3 className="font-Sora text-[16px] font-[600] leading-[26px] text-[#3F3F46]">
            24 Hours Online Store Everyday
          </h3>
          <p className="font-Sora text-[16px] font-[400] leading-[26px] text-[#3F3F46]">
            Support Calls: 8 AM to 8 PM EST Everyday
          </p>
          <h3 className="font-Sora text-[16px] font-[600] leading-[26px] text-[#3F3F46]">
            Contact info
          </h3>
          <h5 className="font-Sora text-[16px] font-[400] leading-[26px] underline text-[#3F3F46]">
            (978) 886-6807
          </h5>
          <h5 className="font-Sora text-[16px] font-[400] leading-[26px] underline text-[#3F3F46]">
            ldoan@ecyberforce.com
          </h5>
          <div className="flex gap-[10%] mt-10 ">
            <Image src={X} className="cursor-pointer" alt="" />
            <Image src={Instagram} className="cursor-pointer" alt="" />
            <Image src={Facebook} className="cursor-pointer" alt="" />
          </div>
        </div>
        <div className="xl:w-[55%] lg:w-[50%] w-[100%] ">
          <Image src={Img} className="w-full max-h-[600px]" alt="" />
        </div>
      </div>
      <div className="my-60 mx-auto flex lg:flex-row flex-col bg-[#E3E5FA] px-2 sm:px-16 lg:px-20  xl:px-36 py-5 gap-24 rounded-[24px] sm:w-[90%]  w-[95%]">
        <div className="flex flex-col gap-5 w-[100%]  lg:w-[50%] mx-auto">
          <h2 className="font-Sora text-[24px] md:text-[48px] font-[600] leading-[24px] md:leading-[40px] text-[#18181B]">
            Delivery & Returns
          </h2>
          <p className="font-Sora text-[16px] font-[400] leading-[26px] text-[#3F3F46]">
            When you completed your payment, you will receive a link for
            download the software (ISO Image) along with all the documentations
            (PDF). You have up to 72-Hours and 5-trials to download the Software
            and Documentations. You can then burn the ISO Image on a DVD and
            follow the MacroProbe System Administrator Guide to build the
            MacroProbe v.1.2 on your qualified dedicate machine. You can then
            license the product by sending an email to ldoan@ecyberforce.com to
            license your MacroProbe v.1.2 with the followings:
            <br />
            1) IP Address (IPv4 Address Only) of the Manage Interface (For
            Access License it is the Wireless wlo1 interface IP Address, for the
            Distribute and Core License, it is the em1 interface IP Address)
            <br />
            2) License Type (Access License or Distribute License or Core
            License)
            <br />
            3) Licensing Period (1-Month One Time or Subscribe)
            <br />
            <br />
            Your will receive the MacroProbeLicense.properties that you can put
            into the MacroProbe and start running the MacroProbe to monitor your
            Network, Online Services and Cybersecurity.
            <br />
            <br />
            You have 30-days money back guarantee to try out the MacroProbe
            v.1.2. Please email to{" "}
            <span className="font-Sora text-[16px] font-[600] leading-[26px] text-[#3F3F46]">
              ldoan@ecyberforce.com
            </span>{" "}
            ldoan@ecyberforce.com for any issue or return or refund.
            <br />
            <br />
            <span className="font-Sora text-[16px] font-[600] leading-[26px] text-[#3F3F46]">
              Email
            </span>{" "}
            : ldoan@ecyberforce.com
            <br />
            <span className="font-Sora text-[16px] font-[600] leading-[26px] text-[#3F3F46]">
              Phone
            </span>{" "}
            Phone: (978) 886-6807
          </p>
        </div>
        <div className="flex flex-col gap-5 w-[100%]  lg:w-[50%] mx-auto">
          <h2 className="font-Sora text-[24px] md:text-[48px] font-[600] leading-[24px] md:leading-[40px] text-[#18181B]">
            Payment Info
          </h2>
          <p className="font-Sora text-[16px] font-[400] leading-[26px] text-[#3F3F46]">
            We accept credit card and Paypal. We do not accept cash payment or
            check.
            <br />
            You can be assured that your personal details are secure and payment
            processing is safe and reliable. It is done by a reputable 3rd Party
            PayPal and Stripe. Customer Satisfaction is guaranteed or your money
            back. We will refund your money if for any reason you are not
            satisfy with using the MacroProbe v1.2 within 30-days of purchase.
          </p>
        </div>
      </div>
    </>
  );
}

export default Support;
