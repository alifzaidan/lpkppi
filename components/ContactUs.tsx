import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
    return (
        <section id="contact-us" className="bg-primary-600 px-6 py-12 sm:py-18 flex flex-col items-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">Hubungi Kami</h1>
            <Link
                href={'https://web.whatsapp.com/send?phone=6281233997703'}
                target="_blank"
                className="bg-white flex gap-2 rounded-full mt-4 items-center px-8 py-3 hover:bg-primary-700 hover:text-white transition"
            >
                <Image src="/assets/img/wa.png" alt="House Keeper" height={100} width={100} className="h-8 w-8" />
                <p>+62 812-3399-7703</p>
            </Link>
        </section>
    );
}
