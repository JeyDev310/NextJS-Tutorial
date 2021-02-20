import Link from 'next/link'
import tw from "tailwind-styled-components"

const Nav = () => (
  <div className="flex items-center justify-between p-4">
    <div className="font-bold text-blue-400">HEALTH EXPLORE</div>
    <div className="flex items-center space-x-4">
      <span className="text-sm">PROFILE</span>
      <span className="text-sm">JOBS</span>
      <span className="text-sm">PROFESSIONAL NETWORK</span>
      <span className="text-sm">LOUNGE</span>
      <span className="text-sm">SALLARY</span>
    </div>
    <div className="flex items-center space-x-4">
      <button className="p-1 text-sm rounded border border-blue-400 text-blue-400 focus:outline-none hover:border-blue-600 hover:text-blue-600">CREATE JOB</button>
      <div className="w-7 h-7 relative flex items-center justify-center rounded-full bg-blue-400 text-white text-sm font-semibold">
        JO
        <span className="w-4 h-4 absolute left-4 bottom-4 rounded-full border-2 border-white bg-red-500 text-1 flex items-center justify-center">2</span>
      </div>
      <span className="text-sm">LOGOUT</span>
    </div>
  </div>
)

export default Nav