import Head from 'next/head'
import { useState } from 'react'
import Rating from '../components/Rating';
import ThankYou from '../components/ThankYou';

export default function Home() {
  const [values, setValues] = useState();
  const {selected, isValid} = values || {};

  const handleClickSelected = (e, val) => {
    e.preventDefault();
    return setValues((prev) => ({...prev, selected: val}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected) return;

    return setValues((prev) => ({...prev, isValid: true}))
  }

  return (
    <div>
      <Head>
        <title>Interactive Rating</title>
        <meta name="description" content="Interactive Rating" />
        <link rel="icon" href="/star.ico" />
      </Head>

      <main className="flex flex-row w-full h-screen items-center justify-center bg-veryDarkBlue px-4 md:px-8 md:px-0 font-overpass">
        {!isValid && <Rating handleSubmit={handleSubmit} handleClickSelected={handleClickSelected} selected={selected} />}
        {isValid && <ThankYou selected={selected} />}
      </main>
    </div>
  )
}
