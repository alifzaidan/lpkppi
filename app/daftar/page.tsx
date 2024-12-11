import Header from '@/components/Header';

export default function page() {
    return (
        <>
            <Header />

            <section className="bg-primary-600">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center gap-1 text-sm text-white">
                            <li>
                                <a href="/" className="block transition hover:text-gray-700">
                                    <span className="sr-only"> Home </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                                </svg>
                            </li>

                            <li>
                                <p className="block">Daftar Online</p>
                            </li>
                        </ol>
                    </nav>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <div className="inline-block">
                            <h2 className="inline text-xl sm:text-3xl font-bold mb-4">Lengkapi Data Diri Anda</h2>
                            <div className="mt-4 h-1 w-full bg-primary-600 rounded-full"></div>
                        </div>
                        <form action="#" className=" mt-6">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="nama" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        name="nama"
                                        placeholder="Tulis nama lengkap Anda"
                                        className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nik" className="block text-sm sm:text-base font-medium text-gray-700">
                                        NIK <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nik"
                                        name="nik"
                                        placeholder="Tulis NIK Anda"
                                        className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div>
                                        <label htmlFor="tempat-lahir" className="block text-sm sm:text-base font-medium text-gray-700">
                                            Tempat Lahir <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="tempat-lahir"
                                            name="tempat-lahir"
                                            placeholder="Tulis tempat lahir Anda"
                                            className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="tanggal-lahir" className="block text-sm sm:text-base font-medium text-gray-700">
                                            Tanggal Lahir <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="tanggal-lahir"
                                            name="tanggal-lahir"
                                            className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="jenis-kelamin" className="block text-sm sm:text-base font-medium text-gray-700">
                                            Jenis Kelamin <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="jenis-kelamin"
                                            id="jenis-kelamin"
                                            className="mt-1.5 p-3 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
                                            required
                                        >
                                            <option value="" disabled selected>
                                                Pilih jenis kelamin
                                            </option>
                                            <option value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="tempat-tinggal" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Tempat tinggal <span className="text-red-500">*</span>
                                    </label>

                                    <textarea
                                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Tulis alamat Anda"
                                        id="tempat-tinggal"
                                        name="tempat-tinggal"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <label htmlFor="blk" className="block text-sm sm:text-base font-medium text-gray-700">
                                        BLK <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="blk"
                                        id="blk"
                                        className="mt-1.5 p-3 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Pilih BLK
                                        </option>
                                        <option value="LPK Pejuan Pertiwi">LPK Pejuan Pertiwi</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Tulis email Anda"
                                        className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="pendidikan" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Pendidikan <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="pendidikan"
                                        id="pendidikan"
                                        className="mt-1.5 p-3 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Pilih pendidikan Anda
                                        </option>
                                        <option value="SD">SD</option>
                                        <option value="SMP">SMP</option>
                                        <option value="SMA">SMA</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="tanggal-uji" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Tanggal Uji <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="tanggal-uji"
                                        name="tanggal-uji"
                                        className="mt-1 p-3 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tujuan" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Tujuan <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="tujuan"
                                        id="tujuan"
                                        className="mt-1.5 p-3 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Pilih tujuan
                                        </option>
                                        <option value="Hongkong">Hongkong</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Malaysia">Malaysia</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="nama-pt" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Nama PT <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="nama-pt"
                                        id="nama-pt"
                                        className="mt-1.5 p-3 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Pilih nama PT
                                        </option>
                                        <option value="NSP">NSP</option>
                                        <option value="ARJ">ARJ</option>
                                        <option value="ABCD">ABCD</option>
                                        <option value="MUKN">MUKN</option>
                                        <option value="PU">PU</option>
                                        <option value="OKDO">OKDO</option>
                                        <option value="POKDO">POKDO</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="skema" className="block text-sm sm:text-base font-medium text-gray-700">
                                        Skema <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="skema"
                                        id="skema"
                                        className="mt-1.5 p-3 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Pilih skema
                                        </option>
                                        <option value="House Keeper">House Keeper</option>
                                        <option value="Care Taker">Care Taker</option>
                                        <option value="Baby Sitter">Baby Sitter</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-full bg-primary-600 px-8 py-3 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring active:bg-primary-500 sm:w-auto transition"
                                >
                                    KIRIM
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
