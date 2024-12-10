export default function AboutSection() {
    return (
        <section id="about" className="text-center max-w-4xl mx-auto px-6 space-y-8 pt-12 sm:pt-20 pb-12 sm:pb-20">
            <div>
                <div className="inline-block">
                    <h2 className="inline text-xl sm:text-2xl text-primary-700 font-bold mb-4">Tentang Kami</h2>
                    <div className="mt-4 h-1 w-full bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-sm sm:text-lg mt-4">
                    LPK Pejuang Pertiwi indonesia adalah Lembaga Pelatihan Kerja, tempat belajar bahasa dan keterampilan untuk mempersiapkan tenaga
                    kerja yang handal untuk bekerja di luar negri.
                </p>
            </div>
            <div>
                <div className="inline-block">
                    <h2 className="inline text-xl sm:text-2xl text-primary-700 font-bold mb-4">Visi</h2>
                    <div className="mt-4 h-1 w-full bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-sm sm:text-lg mt-4">
                    “Menjadikan lembaga pendidikan dan pelatihan yang profesional, mandiri berkarakter dan kompeten di bidangnya”.
                </p>
            </div>
            <div>
                <div className="inline-block">
                    <h2 className="inline text-xl sm:text-2xl text-primary-700 font-bold mb-4">Misi</h2>
                    <div className="mt-4 h-1 w-full bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-sm sm:text-lg mt-4 space-y-3">
                    <span className="block">
                        Menyelenggarakan program pendidikan dan pelatihan Bahasa Cantonis, Bahasa Mandarin dan Bahsa Inggris secara profesional.
                    </span>
                    <span className="block">
                        Mendidik generasi muda agar mempunyai skill yang mumpuni untuk bekerja di Luar Negeri, memeliki semangat kerja yang tinggi,
                        disiplin dan mandiri.
                    </span>
                    <span className="block">
                        Meningkatkan hubungan kerjasama bidang tenaga kerja antara Indonesia, Hongkong, Taiwan, Singapore dan Malaysia.
                    </span>
                </p>
            </div>
        </section>
    );
}
