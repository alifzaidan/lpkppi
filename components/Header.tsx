'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-primary-600" href="#">
                            <span className="sr-only">Home</span>
                            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78..."
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#program">
                                        Program
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#contact-us">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            aria-label="Global"
                            className={`${
                                isMenuOpen ? 'block' : 'hidden'
                            } absolute top-16 right-4 bg-white shadow-lg rounded-md w-48 md:hidden md:w-auto`}
                        >
                            <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 md:p-0 text-sm">
                                <li className="w-full">
                                    <Link className="text-gray-500 transition hover:text-primary-500/75" href="#">
                                        <p className="w-full">Home</p>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <a className="text-gray-500 transition hover:text-primary-500/75 w-full" href="#about">
                                        <p className="w-full">About</p>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a className="text-gray-500 transition hover:text-primary-500/75 w-full" href="#program">
                                        <p className="w-full">Program</p>
                                    </a>
                                </li>
                                <li className="w-full">
                                    <a className="text-gray-500 transition hover:text-primary-500/75 w-full" href="#contact-us">
                                        <p className="w-full">Contact Us</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a className="rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow" href="/">
                                    DAFTAR ONLINE
                                </a>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    onClick={() => setMenuOpen(!isMenuOpen)}
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
