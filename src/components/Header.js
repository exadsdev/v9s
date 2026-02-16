// src/components/Header.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import siteConfig from '@/config/site';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'หน้าแรก' },
        { href: '/videos', label: 'รีวิววิดีโอ' },
        { href: '/blog', label: 'บทความ/ความรู้' },
        { href: '/about', label: 'เกี่ยวกับ PG Mobile' },
        { href: '/warranty', label: 'เงื่อนไขประกัน' },
        { href: '/contact', label: 'ติดต่อร้าน' },
    ];

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <header className="header" role="banner">
            <nav className="nav container" aria-label="เมนูหลักของเว็บไซต์">
                <Link href="/" className="logo" aria-label={`${siteConfig.name} - แหล่งรวมมือถือมือสองคุณภาพดี กลับสู่หน้าแรก`}>
                    <Image
                        src={siteConfig.images.logo}
                        alt={`โลโก้ร้าน ${siteConfig.name}`}
                        width={120}
                        height={40}
                        priority
                        style={{ objectFit: 'contain' }}
                    />
                </Link>

                <button
                    className="nav-toggle"
                    aria-label={isMenuOpen ? "ปิดเมนูนำทาง" : "เปิดเมนูนำทาง"}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-nav-menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>

                <ul
                    id="main-nav-menu"
                    className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
                    role="menubar"
                >
                    {navLinks.map((link) => (
                        <li key={link.href} role="none" className="nav-item">
                            <Link
                                href={link.href}
                                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                                role="menuitem"
                                aria-current={isActive(link.href) ? 'page' : undefined}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
