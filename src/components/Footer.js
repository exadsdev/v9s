// src/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import siteConfig from '@/config/site';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Trust Badges - Optimized for NLP keywords */}
            <section className="trust-badges" aria-label="ทำไมต้องไว้วางใจ PG Mobile">
                <div className="container">
                    <div className="trust-grid" role="list">
                        <span role="listitem">✓ รับประกันคุณภาพ 30 วัน</span>
                        <span role="listitem">✓ มีบริการเก็บเงินปลายทาง</span>
                        <span role="listitem">✓ จัดส่งด่วนพิเศษทั่วประเทศไทย</span>
                        <span role="listitem">✓ ตรวจสอบสภาพเครื่อง 20 จุดก่อนส่ง</span>
                    </div>
                </div>
            </section>

            {/* Footer - Optimized for E-A-T and Semantic Web */}
            <footer className="footer" role="contentinfo">
                <div className="container">
                    <div className="footer-grid">
                        {/* Column 1: Brand & NLP Summary */}
                        <section className="footer-col">
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{siteConfig.name}</h2>
                            <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
                                ศูนย์รวมสมาร์ทโฟนมือสองคุณภาพดี iPhone และ Android คัดเกรดสภาพสวย
                                ในราคาย่อมเยา พร้อมบริการที่จริงใจและปลอดภัยที่สุดในจังหวัดสกลนคร
                            </p>
                            <nav className="footer-social" aria-label="โซเชียลมีเดียของร้าน">
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem' }}>
                                    <a
                                        href={siteConfig.social.facebookPage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="ติดตาม PG Mobile บน Facebook"
                                    >
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={siteConfig.social.line}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="ติดต่อเราทาง LINE"
                                    >
                                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12,.5C5.66.5.5,4.95.5,10.42c0,4.9,4.34,9,10.23,9.78.4.09.94.27,1.08.61.12.31.08.79.04,1.1l-.17,1c-.05.29-.22,1.16,1.01.63,1.23-.53,6.65-3.92,9.08-6.71h0C23.23,14.8,24,12.69,24,10.42,24,4.95,18.34.5,12,.5Z" />
                                        </svg>
                                    </a>
                                </div>
                            </nav>
                        </section>

                        {/* Column 2: Address with Microdata */}
                        <section className="footer-col" itemScope itemType="https://schema.org/PostalAddress">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ที่ตั้งสำนักงานใหญ่</h3>
                            <p itemProp="streetAddress">183 หมู่ที่ 1 ตำบลคำตากล้า</p>
                            <p>
                                <span itemProp="addressLocality">อำเภอคำตากล้า</span>,
                                <span itemProp="addressRegion">จังหวัดสกลนคร</span>
                                <span itemProp="postalCode">47250</span>
                            </p>
                            <p style={{ marginTop: '8px' }}>
                                <strong>เวลาให้บริการ:</strong> <time>{siteConfig.businessHours}</time>
                            </p>
                        </section>

                        {/* Column 3: Contact Channels */}
                        <section className="footer-col">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ติดต่อสอบถาม</h3>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <a href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`} aria-label={`โทรติดต่อที่เบอร์ ${siteConfig.company.phone}`}>
                                    📞 {siteConfig.company.phone} (สายด่วน)
                                </a>
                                <a href={`mailto:${siteConfig.company.email}`} aria-label="ส่งอีเมลหาเรา">
                                    📧 {siteConfig.company.email}
                                </a>
                                <a href={siteConfig.social.line} target="_blank" rel="noopener noreferrer">
                                    💬 LINE: @mypgphone
                                </a>
                            </nav>
                        </section>

                        {/* Column 4: Quick Links */}
                        <section className="footer-col">
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ข้อมูลนโยบายร้าน</h3>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <Link href="/privacy">นโยบายความเป็นส่วนตัว</Link>
                                <Link href="/terms">ข้อกำหนดและเงื่อนไข</Link>
                                <Link href="/refund-policy">นโยบายคืนเงินและสินค้า</Link>
                                <Link href="/warranty">เงื่อนไขการรับประกัน</Link>
                            </nav>
                        </section>
                    </div>

                    {/* Footer Bottom - E-A-T Transparency & Verification */}
                    <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                        <div style={{ opacity: 0.8 }}>© {currentYear} {siteConfig.company.nameTh} - สงวนลิขสิทธิ์ตามกฎหมาย</div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                flexWrap: 'wrap'
                            }}
                            aria-label="ข้อมูลการจดทะเบียนพาณิชย์"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ opacity: 0.9 }}>จดทะเบียนพาณิชย์เลขที่:</span>
                                <strong style={{ color: 'var(--accent)' }}>{siteConfig.company.registration}</strong>
                            </div>
                            <div className="registration-badge" style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px', lineHeight: 0 }}>
                                <Image
                                    src="/images/pgmobile.jpg"
                                    alt="เครื่องหมายจดทะเบียนพาณิชย์ DBD กรมพัฒนาธุรกิจการค้า"
                                    width={70}
                                    height={44}
                                    style={{ objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
