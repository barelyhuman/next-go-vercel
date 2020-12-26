import Head from 'next/head';
import {useState,useEffect} from 'react';

export default function Home() {
  const [date, setDate] = useState(null);

  useEffect(()=>{
    async function getDate(){
      const response = await fetch('api/ping');
      setDate(await response.text());
    }
    getDate();
  },[])

  return (
    <>
      <main>
        <h1 align="center">NextJS + Go API Structure for Vercel</h1>
        <p align="center">{!date ? 'loading....' : date }</p>
      </main>
    </>
  );
}
