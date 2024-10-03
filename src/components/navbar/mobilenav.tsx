import React from 'react'
import { Link } from 'react-router-dom'

interface MobileNavProps {
    setMobileNavHandler: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav:React.FC<MobileNavProps> = ({setMobileNavHandler}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 py-8 px-8 bg-white shadow-lg rounded-md">
        <div className="relative">
            <button className="absolute top-0 right-0" onClick={()=>{setMobileNavHandler((prev)=>{return !prev})}}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#333]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>

          <ul className="px-5 py-14">
            <li className="mb-5" onClick={()=>{setMobileNavHandler((prev)=>{return !prev})}}>
              <Link to="/" className="text-[#333]">
                Home
              </Link>
            </li>
            <li onClick={()=>{setMobileNavHandler((prev)=>{return !prev})}}>
              <Link to="/contact-us" className="text-[#333]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

  )
}

export default MobileNav