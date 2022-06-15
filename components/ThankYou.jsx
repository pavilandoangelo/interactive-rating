import Image from 'next/image'
import IllustrationThankYou from '../public/illustration-thank-you.svg';

export default function ThankYou(props) {
  const { selected } = props;

  return (
    <div className="flex flex-col w-full sm:max-w-md md:max-w-md px-6 py-8 md:py-12 md:px-8 items-center justify-center bg-darkBlue rounded-3xl">
      <div className="flex flex-row w-full justify-center items-center mb-8 md:mb-8">
        <Image alt="Thank you" src={IllustrationThankYou} />
      </div>
      <div className="flex flex-row w-max-m justify-center items-center rounded-full bg-mediumGrey px-5 py-1.5 mb-6 md:px-5 md:py-1.5 md:mb-10">
        <span className="text-primary font-light tracking-wide text-sm md:text-base">{`You selected ${selected} out of 5`}</span>
      </div>
      <div className="flex flex-row w-max-m justify-center items-center mb-4 md:mb-6">
        <span className="text-white text-2xl md:text-3xl">Thank you!</span>
      </div>
      <div className="flex flex-row w-max-m justify-center items-center">
        <span className="text-lightGrey text-center tracking-wide text-sm md:text-base">
          We appreciate you taking the time to give a rating.
          If you ever need more support, don&apos;t hesitate to
          get in touch.
        </span>
      </div>
    </div>
  )
}
