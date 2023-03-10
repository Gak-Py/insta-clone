import { useSession, signOut } from "next-auth/react";

export default function MiniProfile() {
  const {data: session} = useSession();
  return (
    <div className="flex items-center justify-between mt-12 ml-10">
      <img className="h-16 rounded-full border p-[2px]" src={session?.user.image} alt="user-image" />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-gray-400 text-sm">Welcome to Instagram</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 font-semibold text-sm">Sign Out</button>
      
    </div>
  )
}
