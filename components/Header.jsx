import Image from "next/image";
import { MagnifyingGlassIcon, HomeIcon } from "@heroicons/react/24/solid"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* {Left} */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" 
            fill
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" 
            fill
            className="object-contain"
          />
        </div>
      {/* {Miidle} */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500"/>
          </div>
          <input type="text" placeholder="Search" className=" bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:border-black" />
        </div>
      {/* {Right} */}
        <div className="flex space-x-4 items-center">
          
            <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 duration-150 ease-out"/>
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 duration-150" />
            <div className="h-6 w-6 rounded-full overflow-hidden">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Note_Logo_symbol_WhiteOnGreen.png" width={200} height={200} className="object-contain" />
            </div>
            
        </div>
      
      </div>
    </div>

  )
}
