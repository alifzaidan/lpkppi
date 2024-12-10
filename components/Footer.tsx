export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <h1 className="text-lg font-medium sm:text-2xl text-center sm:text-left">
                            Lembaga Pelatihan Kerja Terbaik untuk kerja ke luar negri.
                        </h1>

                        <p className="mt-6 max-w-md text-sm sm:text-base text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Perum Pondok Mutiara Asri Blok F1 No. 1 Desa Pandanlandung, Kecamatan Wagir, Kabupaten Malang.
                        </p>
                    </div>

                    <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78..."
                            fill="currentColor"
                        />
                    </svg>

                    <div className="justify-self-center">
                        <div className="text-center">
                            <p className="text-lg font-medium text-gray-900">Menu</p>

                            <ul className="mt-5 space-y-3 text-sm">
                                <li>
                                    <a className="text-gray-700 transition hover:text-primary-500/75" href="#">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-primary-500/75" href="#about">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-primary-500/75" href="#program">
                                        Program
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-primary-500/75" href="#contact-us">
                                        Contact Us
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-primary-500/75" href="/">
                                        Daftar Program
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-100 py-6 bg-primary-600">
                <div className="text-center">
                    <p className="text-sm text-white">Copyright &copy; 2024 LPK Pejuang Pertiwi Indonesia</p>
                </div>
            </div>
        </footer>
    );
}
