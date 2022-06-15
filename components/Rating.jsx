import Image from 'next/image'
import star from '../public/icon-star.svg';

export default function Rating(props) {
  const { handleSubmit, handleClickSelected, selected } = props;

  return (
    <div className="flex flex-col w-full sm:max-w-md md:max-w-md px-6 py-8 md:py-12 md:px-8 items-start justify-center bg-darkBlue rounded-3xl">
      <div className="flex mb-6 md:mb-8 p-4 rounded-full bg-mediumGrey">
        <Image alt="Star" src={star} />
      </div>
      <span className="text-white text-2xl tracking-wide font-normal md:text-3xl ">How did we do?</span>
      <span className="text-lightGrey font-normal mt-3 text-sm tracking-wide md:text-base">
        Please let us know how we did with your support request. All feedback is appreciated to help us improver our offering!
      </span>
      <div className="flex flex-row justify-between items-center w-full mt-6 md:mt-8">
        {[1, 2, 3, 4, 5].map(item => {
            return (
              <button
                key={item}
                onClick={(e) => handleClickSelected(e, item)}
                className={`group flex flex-row w-full justify-center items-center cursor-pointer rounded-full md:hover:bg-primary w-[3.25rem] h-[3.25rem] ${selected === item ? 'bg-lightGrey' : 'bg-mediumGrey'}`}
              >
                <span className={`md:group-hover:text-white md:text-lg tracking-wide ${selected === item ? 'text-white' : 'text-lightGrey'}`}>{item}</span>
              </button>
            )
        })}
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        className="group flex flex-row justify-center items-center w-full cursor-pointer bg-primary text-white rounded-full mt-6 py-3 md:mt-8 md:hover:bg-white md:hover:text-primary"
        disabled={!selected}
      >
        <span className="text-white md:group-hover:text-primary text-sm md:text-base">SUBMIT</span>
      </button>
    </div>
  )
}
