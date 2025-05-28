"use client";
import Image from "next/image";
import Link from "next/link";

const Forgotpassword: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="shadow-lg w-96">
                <div className="rounded-t-lg bg-black flex flex-col items-center justify-center p-8">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={100}
                        height={60}
                    />
                    <h1 className="mt-4 mb-1 text-lg text-white font-semibold">
                        Forgot Your Password
                    </h1>
                </div>
                <div className="bg-white p-6 rounded-b-lg">
                    <form>
                        <div className="mb-4">
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
                        <button
                            type="submit"
                            className="w-full bg-baseclr text-sm font-semibold text-white py-2 rounded-lg transition h-10 cursor-pointer flex items-center justify-center gap-2.5">
                            <span>Send Reset Link</span>
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

export default Forgotpassword;
