
export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-12 ml-10">
      <img className="h-16 rounded-full border p-[2px]" src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Note_Logo_symbol_WhiteOnGreen.png" alt="user-image" />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">username</h2>
        <h3 className="text-gray-400 text-sm">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 font-semibold text-sm">Sign Out</button>
      
    </div>
  )
}
