import {getProviders, signIn} from "next-auth/react"
import Header from "../../components/Header";

export default function signin({ providers}) {
  return (
    <>
    <Header />
    <div className="flex justify-center md:space-x-7 mt-10 items-center">
      <img className="hidden object-cover rotate-6 w-4/12 md:inline-flex" src="https://designacademy-hub.com/wp-content/themes/wp-hub/image/promotion_mainvisual.png" />
      <div className="md:w-4/12 w-full ">
        {Object.values(providers).map((provider)=> (
            <div key={provider.name} className="flex flex-col items-center">
              <img className="w-32 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCintT2Z2AaOkr7R4EEsekPB90LisnNK7tPg&usqp=CAU" alt="" />
              <p className="text-sm italic my-10">This app is created for learning pu</p>
              <button onClick={()=> signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white">Sign in with {provider.name}</button>
            </div>
          ))}
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {providers}
  }
}