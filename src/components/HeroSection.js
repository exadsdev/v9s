// src/components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '@/config/site';

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="badge">🔥 พร้อมส่งทั่วไทย - PG Mobile มืออาชีพ</span>
                        <h1>
                            แหล่งรวมมือถือมือสองคุณภาพดี <br />
                            <span style={{ color: '#fbbf24' }}>คัดเกรดสภาพสวย ราคาสุดคุ้ม</span>
                        </h1>
                        <p className="hero-subtitle">
                            รับประกันทุกเครื่อง ตรวจสอบอย่างละเอียดก่อนส่ง ของแท้แน่นอน<br />
                            สต็อกแน่น ครบทุกรุ่นที่ PG Mobile
                        </p>

                        <div className="cta-buttons">
                            <a
                                href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`}
                                className="btn btn-primary"
                                aria-label={`โทรติดต่อสอบถามที่เบอร์ ${siteConfig.company.phone}`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                โทรเลย {siteConfig.company.phone}
                            </a>
                            <a href="#products" className="btn btn-outline">เลือกเลือกชมสินค้า</a>
                        </div>

                        <div className="cta-buttons" style={{ marginTop: '12px', gap: '10px' }}>
                            <a
                                href={siteConfig.social.line}
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="แอดไลน์ PG Mobile เพื่อสอบถามข้อมูลเพิ่มเติม"
                            >
                                แอดไลน์ @mypgphone
                            </a>
                            <a
                                href={siteConfig.social.facebookPage}
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ติดตามรีวิวและสินค้าใหม่บน Facebook"
                            >
                                ดูรีวิวบน Facebook
                            </a>
                        </div>

                        <ul style={{ marginTop: '14px', opacity: 0.9, fontSize: '14px', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                            <li>✅ <strong>ส่งฟรีทั่วประเทศ:</strong> รอรับสินค้าที่บ้านได้ใน 1-3 วัน</li>
                            <li>✅ <strong>ทางเลือกการชำระเงิน:</strong> เก็บเงินปลายทาง / โอน / ผ่อนชำระ (บางรุ่น)</li>
                            <li>✅ <strong>คุณภาพที่วางใจได้:</strong> เช็คสุขภาพแบตเตอรี่และระบบการใช้งาน 100%</li>
                        </ul>
                    </div>

                    <div className="hero-image-wrapper">
                        <Image
                            src="/images/main.png"
                            alt="สมาร์ทโฟนมือสอง iPhone และ Android สภาพดีที่ร้าน PG Mobile"
                            className="hero-image"
                            width={400}
                            height={400}
                            priority
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
