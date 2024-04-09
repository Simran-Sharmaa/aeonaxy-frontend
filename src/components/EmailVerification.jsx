import Header from "./Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Footer from "./Footer"
function EmailVerification() {
  return (
    // <div>EmailVerification</div>
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center mb-20 px-10">
    <div className="pt-16 font-bold text-xl sm:text-2xl">
      Please verify your email...
    </div>
    <div  className="relative">
      <FontAwesomeIcon icon={faEnvelope} className="sm:h-20 h-10 p-5 text-gray-400" />
      <svg xmlns="http://www.w3.org/2000/svg" className=" fill-pink-500 stroke-white absolute top-4 sm:right-1 right-3 sm:h-8 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2l4 -4" />
      </svg> 
    </div>
    <div className="text-center text-gray-500 font-medium text-xs sm:text-sm">
      <div className=" mb-2">Please verify your email address. We&apos;ve sent a confirmation email to:</div>
      <div className="font-bold text-center mb-2  text-black">account@refero.design</div>
      <div className=" mb-2">Click the confirmatin link in that email to begin using Dribble.</div>
      <div className=" mb-2 w-2/3 m-auto">Didn&apos;t receive the email? Check your Spam folder, it may have been caught by a filter. If you still don&apos;t see it, you can <span className="text-pink-500">resend the confirmation email.</span></div>
      <div className="mb-2">Wrong email address? <span className="text-pink-500">Change it.</span></div>

    </div>
  </div>
  <Footer/>
    </>
  )
}

export default EmailVerification