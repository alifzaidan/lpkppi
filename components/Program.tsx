import Image from 'next/image';

export default function Program() {
    return (
        <section id="program" className="max-w-6xl mx-auto px-6 pb-12 sm:pb-20">
            <div className="text-center">
                <div className="inline-block">
                    <h2 className="inline text-2xl sm:text-4xl font-bold mb-4">Pendidikan Bahasa</h2>
                    <div className="mt:2 sm:mt-4 h-1 w-full bg-primary-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 my-16 mx-auto  pt-2">
                    <div className="flex items-center gap-5">
                        <div className="flex-shrink-0 h-16 w-16 p-2 bg-primary-600 rounded-full">
                            <Image src="/assets/img/kantonis.png" alt="Baby Sitter" height={100} width={100} />
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <h3 className="text-xl sm:text-2xl font-medium text-primary-600">Bahasa Cantonis</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex-shrink-0 h-16 w-16 pt-2 bg-primary-600 rounded-full">
                            <Image src="/assets/img/mandarin.png" alt="House Keeper" height={100} width={100} />
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <h3 className="text-xl sm:text-2xl font-medium text-primary-600">Bahasa Mandarin</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex-shrink-0 h-16 w-16 px-1 bg-primary-600 rounded-full">
                            <Image src="/assets/img/inggris.png" alt="Care Taker" height={100} width={100} />
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <h3 className="text-xl sm:text-2xl font-medium text-primary-600">Bahasa Inggris</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="inline-block">
                    <h2 className="inline text-2xl sm:text-4xl font-bold mb-4">Jenis Pelatihan</h2>
                    <div className="mt:2 sm:mt-4 h-1 w-full bg-primary-600 rounded-full"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-8 pt-2">
                <div className="flex gap-5">
                    <div className="flex-shrink-0 h-16 w-16 p-2 bg-primary-600 rounded-full">
                        <Image src="/assets/img/babysitter.png" alt="Baby Sitter" height={100} width={100} />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <h3 className="text-xl sm:text-2xl font-medium text-primary-600">Baby Sitter</h3>
                        <p className="text-sm sm:text-base">
                            Pelatihan ini mengajarkan keterampilan membersihkan rumah, mencuci, menyetrika, dan menata ruangan sesuai standar
                            internasional.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex-shrink-0 h-16 w-16 p-2 bg-primary-600 rounded-full">
                        <Image src="/assets/img/housekeeper.png" alt="House Keeper" height={100} width={100} />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <h3 className="text-xl sm:text-2xl font-medium text-primary-600">House Keeper</h3>
                        <p className="text-sm sm:text-base">
                            Pelatihan ini mengajarkan keterampilan membersihkan rumah, mencuci, menyetrika, dan menata ruangan sesuai standar
                            internasional.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex-shrink-0 h-16 w-16 p-2 bg-primary-600 rounded-full">
                        <Image src="/assets/img/caretaker.png" alt="Care Taker" height={100} width={100} />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <h3 className="text-xl sm:text-2xl font-medium text-primary-600">Care Taker</h3>
                        <p className="text-sm sm:text-base">
                            Pelatihan ini mengajarkan keterampilan membersihkan rumah, mencuci, menyetrika, dan menata ruangan sesuai standar
                            internasional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
