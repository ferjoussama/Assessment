import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/svg/sidebar/logo.svg'
import { ReactComponent as Dashboardicon } from '../../images/svg/sidebar/dashboardicon.svg'
import { ReactComponent as Caricon } from '../../images/svg/sidebar/car.svg'
import { ReactComponent as Logout } from '../../images/svg/sidebar/logout.svg'
import { ReactComponent as Settings } from '../../images/svg/sidebar/Settings.svg'
import { ReactComponent as Notification } from '../../images/svg/sidebar/notification.svg'
import { ReactComponent as Search } from '../../images/svg/sidebar/Search.svg'
import Avatar from '../../images/img/avatar.png'
export default function Layout(props) {
  const [show, setShow] = useState(false)
  const [Active, setToggleActive] = useState(1)
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}
          <div className="absolute lg:relative w-80 h-screen shadow bg-white hidden lg:block">
            <div className="h-16 w-full flex items-center px-8">
              <Logo />
              <p className="ml-2 text-3xl font-medium"> Motiv. </p>
            </div>
            <div className="flex justify-between flex-col siderbarul-list">
              <div>
                <ul aria-orientation="vertical" className=" py-6">
                  <li
                    onClick={() => setToggleActive(1)}
                    className={
                      'pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-2 pt-3 text-indigo-700 focus:text-indigo-700 focus:outline-none' +
                      (Active == 1 ? ' activeli' : '')
                    }
                  >
                    <div className="flex items-center li-links">
                      <div>
                        <Dashboardicon />
                      </div>
                      <span className="ml-2 li-routes">Dashboard</span>
                    </div>
                  </li>
                  <li
                    onClick={() => setToggleActive(2)}
                    className={
                      'pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-2 pt-3 text-indigo-700 focus:text-indigo-700 focus:outline-none' +
                      (Active == 2 ? ' activeli' : '')
                    }
                  >
                    <div className="flex items-center li-links">
                      <div>
                        <Caricon />
                      </div>
                      <span className="ml-2 li-routes">Cars</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul aria-orientation="vertical" className=" py-6">
                  <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <div>
                        <Settings />
                      </div>
                      <span className="ml-2 li-routes">Settings</span>
                    </div>
                  </li>
                  <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <div>
                        <Logout />
                      </div>
                      <span className="ml-2 li-routes">Logout</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              show
                ? 'w-full h-full absolute z-40  transform  translate-x-0 '
                : '   w-full h-full absolute z-40  transform -translate-x-full'
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
              onClick={() => setShow(!show)}
            />
            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-white lg:hidden transition duration-150 ease-in-out h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between px-6">
                    <div className="h-16 w-full flex items-center">
                      <Logo />
                      <p className="ml-2 text-3xl font-medium"> Motiv. </p>
                    </div>
                    <div
                      id="closeSideBar"
                      className="flex items-center justify-center h-10 w-10"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                  <ul aria-orientation="vertical" className=" py-6">
                    <li
                      onClick={() => setToggleActive(1)}
                      className={
                        'pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-2 pt-3 text-indigo-700 focus:text-indigo-700 focus:outline-none' +
                        (Active == 1 ? ' activeli' : '')
                      }
                    >
                      <div className="flex items-center li-links">
                        <div className="w-6 md:w-8 md:h-8">
                          <Dashboardicon />
                        </div>
                        <span className="ml-2 xl:text-base md:text-2xl text-base li-routes">
                          Dashboard
                        </span>
                      </div>
                    </li>
                    <li
                      onClick={() => setToggleActive(2)}
                      className={
                        'pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-2 pt-3 text-indigo-700 focus:text-indigo-700 focus:outline-none' +
                        (Active == 2 ? ' activeli' : '')
                      }
                    >
                      <div className="flex items-center li-links">
                        <div className="w-6  md:w-8 md:h-8">
                          <Caricon />
                        </div>
                        <span className="ml-2 xl:text-base md:text-2xl text-base li-routes">
                          Cars
                        </span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="w-6  md:w-8 md:h-8">
                          <Settings />
                        </div>
                        <span className="ml-2 xl:text-base md:text-2xl text-base li-routes">
                          Settings
                        </span>
                      </div>
                    </li>
                    <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8">
                          <Logout />
                        </div>
                        <span className="ml-2 xl:text-base md:text-2xl text-base li-routes">
                          Logout
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <div className="flex justify-center mb-4 w-full px-6">
                    <div className="relative w-full">
                      <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <Search />
                      </div>
                      <input
                        className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                        type="text"
                        placeholder="Search or Type"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-300">
                    <div className="w-full flex items-center justify-between px-6 pt-1">
                      <ul>
                        <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                          <img
                            className="rounded-full h-10 w-10 object-cover"
                            src={Avatar}
                            alt="avatar"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Navigation starts */}
            <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
              <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                  <div className="relative w-full">
                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <Search />
                    </div>
                    <input
                      className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                      type="text"
                      placeholder="Search or Type"
                    />
                  </div>
                </div>
                <div className="w-1/2 hidden lg:flex">
                  <div className="w-full flex items-center pl-8 justify-end">
                    <div className="h-full w-20 flex items-center justify-center">
                      <div className="relative cursor-pointer text-gray-600">
                        <Notification />
                        <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                      </div>
                    </div>

                    <div className="flex items-center relative cursor-pointer">
                      <div className="rounded-full">
                        <div className="relative">
                          <img
                            className="rounded-full h-10 w-10 object-cover"
                            src={Avatar}
                            alt="avatar"
                          />
                          <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="text-gray-600 visible lg:hidden relative mobile-nav"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ''
                ) : (
                  <div className="h-16 w-full flex items-center">
                    <Logo />
                    <p className="ml-2 text-3xl font-medium"> Motiv. </p>
                  </div>
                )}
                {show ? (
                  ' '
                ) : (
                  <svg
                    aria-label="Main Menu"
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu cursor-pointer"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
            </nav>
            <div className="container mx-auto p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
