"use client";
import Image from "next/image";
import Link from "next/link";

const Register: React.FC = () => {
    return (
        <div className="md:min-h-screen md:flex items-center justify-center md:bg-gray-100 bg-white">
            <div className="md:shadow-lg md:w-96">
                <div className="md:rounded-t-lg bg-black flex flex-col items-center justify-center p-8">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={100}
                        height={60}
                    />
                    <h1 className="mt-4 mb-1 text-lg text-white font-semibold">
                        Create an account
                    </h1>
                    <h5 className="text-gray-400 text-sm">
                        Enter your detail to Create your account today.
                    </h5>
                </div>
                <div className="bg-white p-6 md:rounded-b-lg max-md:max-w-96 mx-auto">
                    <form>
                        <div className="mb-2">
                            <label className="text-sm mb-1 font-medium text-gray-600 block">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full border border-baseclr py-2 px-3 text-sm rounded-lg bg-none h-10 focus:outline-0"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm mb-1 font-medium text-gray-600 block">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full border border-baseclr py-2 px-3 text-sm rounded-lg bg-none h-10 focus:outline-0"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm mb-1 font-medium text-gray-600 block">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                className="w-full border border-baseclr py-2 px-3 text-sm rounded-lg bg-none h-10 focus:outline-0"
                                required
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
                            />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm mb-1 font-medium text-gray-600 block">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Confirm Password"
                                className="w-full border border-baseclr py-2 px-3 text-sm rounded-lg bg-none h-10"
                                required
                            />
                        </div>
                        <div className="my-4">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                <span className="text-xs font-medium text-gray-600">
                                    By registering you agree to the Rizz{" "}
                                    <Link href={"/"} className="text-baseclr">
                                        Terms of Use
                                    </Link>
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-baseclr text-sm font-semibold text-white py-2 rounded-lg transition h-10 cursor-pointer flex items-center justify-center gap-2.5">
                            <span>Register</span>
                        </button>
                        <div className="mt-6">
                            <p className="text-sm text-gray-500 text-center">
                                Already have an account? &nbsp;
                                <Link href={"/"} className="text-baseclr">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
