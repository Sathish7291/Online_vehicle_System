import { Button, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import useLogout from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import avathar from '../assets/avathar.png'


 function TopBar() {
    const role = sessionStorage.getItem("role");
  const logout = useLogout() 
  
  

    const navigation = [
        {
            value:'Home',
            path:'/home',
            role:["admin","user"],
        },
        {
          value:'Dashboard',
          path:'/dashboard',
          role:["admin","user"],
        },
        {
            value:'My Trips',
            path:'/bookings',
            role:["user","admin"],
           
          },
          {
            value:'My Listings',
            path:'/mylistings',
            role:["user","admin"],
           
          },
          {
            value:'Users Management',
            path:'/allusers',
            role:["admin"],
            
          },
          {
            value:'Vehicles Management',
            path:'/allvehicles',
            role:["admin"],
           
          },
          {
            value:'Contact Us',
            path:'/contactus',
            role:["user"]
          }
          
    ]
    
    const userNavigation = [
        {
            value:'Your Profile',
            path:'/profile',
            role:["admin","user"]
        },
        {
            value:'My Bookings',
            path:'/bookings',
            role:["admin","user"]
        },
        {
            value:'Signout',
            role:["admin","user"]
        }
    ]

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Drivezy"
                    src={logo}
                    className="h-10 w-15"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 ">
                    {navigation.filter((option)=>option.role.includes(role)).map((item) => (
                      <Link
                        key={item.value}
                        to={item.path}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white text-decoration-line: none' : 'text-decoration-line: none text-gray-300 hover:bg-gray-700 hover:text-white',
                          'text-decoration-line: none rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.value}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={avathar} className="h-8 w-8 rounded-full" />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.filter((option)=>option.role.includes(role)).map((item) => (
                        <MenuItem key={item.value}>
                          <Link
                            to={item.path}
                            className="text-decoration-line: none block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.value}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>logout()}>Logout</button>
                </div>
              </div>
             
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.filter((option)=>option.role.includes(role)).map((item) => (
                <Link
                  key={item.value}
                  as="a"
                  to={item.path}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.value}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img alt="" src={avathar} className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white"></div>
                  <div className="text-sm font-medium leading-none text-gray-400"></div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.filter((option)=>option.role.includes(role)).map((item) => (
                  <Link
                    key={item.value}
                    as="a"
                    to={item.path}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.value}
                  </Link>
                ))}
               
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{navigation.value}</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}

export default TopBar