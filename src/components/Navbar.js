import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'PRODUCTS', href: '#', current: false },
  { name: 'DOCS', href: '#', current: false },
  { name: 'EXPLORER', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 rounded-full my-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./logo.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-full px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white text-sm font-medium outline-gray-500 outline-1 outline"
                >
                    DASHBOARD
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "../assets/css/Navbar.css";
// import { FaList, FaSign, FaSignOutAlt } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";

// const Navbar = () => {

//   const { theme } = useTheme();

//   const listStyle = {
//     "textDecoration": "none",
//     "color": "black"
//   };

//   const openVault = () => {
//     window.open(window.location.origin+"/vault", "_blank", "noreferrer");
//   }

//   return (
//     <div className={`navbar ${theme} flex text-gray-400`}>
//       <div className="hidden sm:flex sm:flex-row self-center">
//       <Link to="/" className="ml-4">
//         <img className="p-2 self-center hidden lg:block" src="./img/logo.png" style={{height:"50px"}}></img>
//         <img className="p-2 self-center hidden md:block lg:hidden"   style={{height:"50px"}} src="./img/mobile-logo.png"></img>
//       </Link>
//       <Link to="/" className="dropdown ml-1 md:ml-8">Trade
//         <div className="dropdown-content mt-3">
//             <Link to="/" className="rounded-t-md">Exchange</Link>
//             <Link to="/">Liquidity</Link>
//             <Link to="/">Limit Order</Link>
//             <Link to="/">
//               Stable Swap
//               <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//             </Link>
//             <Link to="/">
//               Bridge
//               <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//             </Link>
//             <Link to="/" className="rounded-b-lg">
//               Leverage Trading
//               <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//             </Link>
//         </div>
//       </Link>
//       <Link to="/" className="dropdown">Earn
//         <div className="dropdown-content mt-3">
//             <Link to="/" className="rounded-t-lg">Farms</Link>
//             <Link to="/">Pools</Link>
//             <Link to="/vault" className="rounded-b-lg">
//               Vaults
//             </Link>
//           </div>
//       </Link>
//       <Link to="/" className="dropdown">Defi
//         <div className="dropdown-content mt-3">
//             <Link to="/" className="rounded-t-lg">
//               DawnStar
//               <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//             </Link>
//             <Link to="/" className="rounded-b-lg">
//               MadMex
//               <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//             </Link>
//           </div>
//       </Link>
//       <Link to="/" className="dropdown">Launch</Link>
//       <Link to="/" className="dropdown">Referrals</Link>
//       <Link to="/" className="dropdown">Games</Link>
//       <Link to="/" className="dropdown" style={{paddingRight:"20px"}}>
//         <FaList className="ml-2" style={{height:"24px"}}/>
//         <div className="dropdown-content">
//           <Link to="/" className="rounded-t-lg">Analytics</Link>
//           <Link to="/">
//             MMF Dex (Cronos)
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/">
//             Mad Meerkat NFT
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/">
//             Docs
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/">
//             Apply to list
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/">
//             Dex Screener
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/">
//             CoinMarketCap
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/">
//             CoinGecko
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//           <Link to="/" className="rounded-b-lg">
//             Matic Faucet
//             <FaSignOutAlt className="float-right" style={{height:"30px"}} />
//           </Link>
//         </div>
//       </Link>
//       </div>
//       <div></div>
//       <div className="relative sm:absolute sm:right-0 flex flex-row items-center pt-1" style={{width:"300px"}}>
//         <Link className="flex flex-row w-3/8 px-4 items-center">
//           <img className="p-3 self-center"  style={{height:"50px"}} src="./img/mobile-logo.png"></img>
//           <div className="">$0.010</div>
//         </Link>
//         <Link className="hidden sm:block w-5/8 px-3 mr-2 bg-purple-600 rounded-full text-white font-bold hover:bg-purple-800" style={{ marginRight:"20px"}}>Connect Wallet</Link>
//       </div>
//       <button className="block absolute right-0 sm:hidden bg-purple-600 rounded-full text-white font-bold hover:bg-purple-800 px-2" style={{height:"30px", marginTop:"15px", marginRight:"10px"}}>Connect Wallet</button>
//     </div>
//   );
// };

// export default Navbar;
