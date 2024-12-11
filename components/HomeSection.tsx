export default function HomeSection() {
    return (
        <section
            id="#"
            className="bg-primary bg-cover bg-center bg-no-repeat min-h-screen relative"
        >
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r bg-cover" ></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-3xl text-center sm:text-left">
                    <p className="text-sm sm:text-lg mb-3">Lembaga Pelatihan Kerja untuk bekerja di luar negri</p>
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        LPK <span className="font-extrabold text-primary-700">Pejuang Pertiwi Indonesia.</span>
                    </h1>

                    <p className="mt-4 max-w-xl text-sm sm:text-lg/relaxed">
                        Perum Pondok Mutiara Asri Blok F1 No. 1 Desa Pandanlandung, Kecamatan Wagir, Kabupaten Malang.
                    </p>

                    <div className="mt-8 flex">
                        <a
                            href="#about"
                            className="block w-full rounded-full bg-primary-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring active:bg-primary-500 sm:w-auto transition"
                        >
                            Info Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
