"use client";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <>
            <div className="md:min-h-screen md:flex items-center justify-center md:bg-gray-100 bg-white">
                <div className="md:shadow-lg md:w-96">
                    <div className="md:rounded-t-lg bg-black flex flex-col items-center justify-center p-8">
                        <Image
                            src="/images/logo.svg"
                            alt="logo"
                            width={100}
                            height={60}
                            className="w-24"
                            priority
                        />
                        <h1 className="mt-4 mb-1 text-lg text-white font-semibold">
                            Let's Get Started Name
                        </h1>
                        <h5 className="text-gray-400 text-sm">
                            Sign in to continue to Name.
                        </h5>
                    </div>
                    <div className="bg-white p-6 md:rounded-b-lg max-md:max-w-96 mx-auto">
                        <form>
                            <div className="mb-2">
                                <label className="text-sm mb-1 font-medium text-gray-600 block">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    className="w-full border border-baseclr py-2 px-3 text-sm rounded-lg bg-none h-10 focus:outline-0"
                                    required
                                    autoComplete="Username"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="text-sm mb-1 font-medium text-gray-600 block">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full border border-baseclr py-2 px-3 text-sm rounded-lg bg-none h-10"
                                    required
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <div className="w-full lg:w-1/2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" />
                                        <span className="text-sm font-medium text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <div className="w-full lg:w-1/2 text-right">
                                    <Link
                                        href="/Forgotpassword"
                                        className="text-sm text-gray-400 transition hover:text-gray-600">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-baseclr text-sm font-semibold text-white py-2 rounded-lg transition h-10 cursor-pointer flex items-center justify-center gap-2.5">
                                <span>Login</span>
                                <FontAwesomeIcon icon={faSignIn} />
                            </button>
                            <div className="mt-6">
                                <p className="text-sm text-gray-500 text-center">
                                    Don't have an account? &nbsp;
                                    <Link
                                        href={"/Register"}
                                        className="text-baseclr">
                                        Resister
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
