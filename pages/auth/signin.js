import React from 'react'
import Header from '../../components/Header'
import { getProviders, signIn } from "next-auth/react";
export default function signin({providers}) {
  return (
    <>
        <Header/>
        <div className="flex flex-col items-center" >
          {Object.values(providers).map(provider => (
            <div key={provider.name} className="">
            <img src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png" alt="google logo" className="w-52 object-cover"></img>
            <p className='text-sm italic my-10 text-center'>This site is created for learning purposes</p>
            <button className="bg-red-600 rounded-lg text-white p-3 hover:bg-red-700" onClick={()=>signIn(provider.id, {callbarckUrl: "/" })}>Sign in with {provider.name}</button>
            </div>
          ))}
        </div>
    </>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: { providers }
    }
}
