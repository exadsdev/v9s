// src/components/PromoSection.js
'use client';

import { useState, useEffect } from 'react';
import { saveClick } from '@/components/VisitorTracker';
import siteConfig from '@/config/site';

export default function PromoSection() {
    const [shopUrl, setShopUrl] = useState('');

    useEffect(() => {
        // ดึงค่า shopUrl จาก Settings API (JSON File)
        const loadSettings = async () => {
            try {
                const response = await fetch('/api/settings');
                if (response.ok) {
                    const settings = await response.json();
                    if (settings.shopUrl) {
                        const cleanUrl = settings.shopUrl.replace(/\/+$/, '');
                        setShopUrl(cleanUrl);
                    }
                }
            } catch (e) {
                console.error('Error fetching settings:', e);
            }
        };
        loadSettings();
    }, []);

    const handleLinkClick = (type, extra) => {
        // type: 'line' | 'facebook' | 'shopImage'
        saveClick(`promo-${type}`, extra);
    };

    return (
        <section className="section section-alt" id="special-offers" aria-label="โปรโมชั่นและข้อเสนอพิเศษ">
            <div className="container">
                <article
                    className="feature-card"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '24px',
                        flexWrap: 'wrap',
                        padding: '32px'
                    }}
                >
                    <div style={{ flex: '1 1 350px' }}>
                        <header>
                            <div className="badge" style={{ marginBottom: '12px', display: 'inline-block' }}>🎁 โปรโมชั่นจำกัดเวลา</div>
                            <h2 style={{ margin: '0 0 12px', fontSize: '1.8rem' }}>
                                รับคูปองส่วนลด <span style={{ color: '#fbbf24' }}>10%</span> สำหรับลูกค้าใหม่
                            </h2>
                        </header>
                        <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.8 }}>
                            พบกับดีลที่ดีที่สุดสำหรับ iPhone และมือถือ Android มือสองภาพสวยที่ PG Mobile
                            เพียงทักแชทเพื่อรับโค้ดส่วนลดพิเศษ แจ้งรุ่นที่ต้องการ ทีมงานผู้เชี่ยวชาญพร้อมแนะนำรุ่นที่คุ้มค่าที่สุดในงบของคุณ
                            <strong> รับสิทธิ์ได้ทันทีผ่านช่องทางช่องทางด้านล่างนี้:</strong>
                        </p>
                        <div className="cta-buttons" style={{ marginTop: '20px' }}>
                            <a
                                href={siteConfig.social.line}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleLinkClick('line')}
                                aria-label="กดรับคูปองส่วนลด 10% ผ่านทาง LINE"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }} aria-hidden="true">
                                    <path d="M24 10.3c0-4.6-5.4-8.3-12-8.3s-12 3.7-12 8.3c0 4.1 4.3 7.5 10.1 8.2.4.1.9.3 1.1.7l.4 1.2c.1.4.1.7-.1.9-.2.2-.5.3-.9.2-2.1-.2-3.8-.5-5.1-.9-.3-.1-.6-.1-.9.1-.3.2-.5.5-.4.9.1.4.5.6.9.5 1.5.4 3.5.8 5.8 1.1.2.1.4 0 .5-.1.1-.1.2-.3.2-.5v-4c0-.3.1-.5.3-.7.2-.2.5-.3.8-.2 5.5.7 9.8-2.5 9.8-6.6z" />
                                </svg>
                                รับคูปองทาง LINE
                            </a>
                            <a
                                href={siteConfig.social.facebookPage}
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleLinkClick('facebook')}
                                aria-label="สอบถามโปรโมชั่นผ่าน Facebook Messenger"
                            >
                                ทัก Facebook Messenger
                            </a>
                        </div>
                    </div>

                    <aside style={{ flex: '0 1 250px', textAlign: 'center', borderLeft: '1px solid var(--border)', paddingLeft: '24px' }} className="promo-highlight">
                        <div
                            className="badge"
                            style={{ display: 'inline-block', padding: '10px 14px', fontSize: '14px', marginBottom: '10px' }}
                        >
                            PG Mobile Exclusive
                        </div>
                        <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '1px', color: '#fbbf24', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            10% OFF
                        </div>
                        <p style={{ opacity: 0.75, marginTop: '8px', fontSize: '14px' }}>* เงื่อนไขเป็นไปตามที่บริษัทกำหนด <br />สำหรับเครื่องที่ร่วมรายการ</p>
                    </aside>
                </article>
            </div>
        </section>
    );
}
