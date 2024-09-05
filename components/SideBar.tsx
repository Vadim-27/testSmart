'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname();
    return (
        <aside className="h-screen w-[332px] bg-[#151515] pl-12 pr-12 pt-11">
            <Link href={'/'}>
                <div className="mb-12 flex items-center justify-center gap-2">
                    <Image src={'/imgPng/logo.png'} alt="" width={60} height={70} />
                    <p className="font-poppins text-5xl font-semibold text-white">Logo</p>
                </div>
            </Link>
            <ul>
                <li className="mb-4">
                    <Link
                        className={`flex gap-3 rounded-[10px] px-4 py-3 ${
                            pathname.includes('users') ? 'bg-black' : ''
                        }`}
                        href={'/users'}
                    >
                        <Image src={'/icons/darhboard.svg'} alt="" width={24} height={25} />
                        <p className="font-poppins text-[21px] font-medium leading-[25.2px] text-white">
                            Users
                        </p>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        className={`flex gap-3 rounded-[10px] px-4 py-3 ${
                            pathname.includes('any') ? 'bg-black' : ''
                        }`}
                        href={''}
                    >
                        <Image src={'/icons/Chart_alt_light.svg'} alt="" width={24} height={25} />
                        <p className="font-poppins text-[21px] font-medium leading-[25.2px] text-white">
                            Another link
                        </p>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        className={`flex gap-3 rounded-[10px] px-4 py-3 ${
                            pathname.includes('any') ? 'bg-black' : ''
                        }`}
                        href={''}
                    >
                        <Image src={'/icons/Chart_alt_light.svg'} alt="" width={24} height={25} />
                        <p className="font-poppins text-[21px] font-medium leading-[25.2px] text-white">
                            Another link
                        </p>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link
                        className={`flex gap-3 rounded-[10px] px-4 py-3 ${
                            pathname.includes('any') ? 'bg-black' : ''
                        }`}
                        href={''}
                    >
                        <Image src={'/icons/Chart_alt_light.svg'} alt="" width={24} height={25} />
                        <p className="font-poppins text-[21px] font-medium leading-[25.2px] text-white">
                            Another link
                        </p>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};
export default SideBar;
