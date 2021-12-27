import { ChevronRightIcon } from "@heroicons/react/solid"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="h-screen flex items-center lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            <Link
                                href="/contact"
                            >
                                <a
                                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                >
                                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full">
                                        Become a Partner?
                                    </span>
                                    <span className="ml-4 text-sm">Visit our contact page</span>
                                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true"/>
                                </a>
                            </Link>

                            <h1 className="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">Looking for a</span>
                                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-500 sm:pb-5">
                                    Hottest Parties and shows
                                </span>
                            </h1>

                            <div className="">
                                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                    <div className="sm:flex">
                                        <div className="min-w-0 flex-1">
                                            <label htmlFor="email" className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                            />
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <button
                                                type="submit"
                                                className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-indigo-400 to-cyan-500 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                            >
                                                Search Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <p className="mt-6 sm:mt-8text-base text-gray-300 text-sm">
                                Find all the parties and musical events near you. Never miss the Theatrics, events and parties. Buy and sell the tickets online.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                            {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                            <img
                                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
