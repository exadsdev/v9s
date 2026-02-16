// src/components/ServicesSection.js
'use client';

import { useState } from 'react';
import siteConfig from '@/config/site';

export default function ServicesSection({ faqItems = [] }) {
    const [openIndex, setOpenIndex] = useState(0);

    // Create JSON-LD FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="section section-alt" id="services-faq" aria-label="บริการและคำถามที่พบบ่อย">
            <div className="container">
                {faqItems.length > 0 && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                )}

                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title">บริการและ <span>ความเชื่อมั่น</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0.5rem auto 0', opacity: 0.8, lineHeight: 1.6 }}>
                        PG Mobile ไม่เพียงแต่ขายมือถือมือสอง แต่เรามอบบริการที่ครบวงจร
                        ตั้งแต่การคัดกรดสินค้าไปจนถึงบริการหลังการขายที่จริงใจ เพื่อให้คุณมั่นใจในทุกการสั่งซื้อ
                    </p>
                </header>

                <div className="features-grid">
                    <article className="feature-card">
                        <h3 style={{ marginTop: 0 }}>การรับประกันสินค้ามาตรฐานร้าน</h3>
                        <p style={{ lineHeight: 1.8, margin: '10px 0 0' }}>
                            อุ่นใจด้วยการรับประกันคุณภาพ 30 วัน ครอบคลุมการใช้งานปกติ
                            หากพบปัญหาทางเทคนิค เราพร้อมดูแล ตรวจสอบ และแนะนำแนวทางแก้ไขให้คุณทันที
                            เน้นความซื่อสัตย์ ไม่ทิ้งลูกค้า
                        </p>
                    </article>

                    <article className="feature-card">
                        <h3 style={{ marginTop: 0 }}>การจัดส่งที่รวดเร็วและปลอดภัย</h3>
                        <p style={{ lineHeight: 1.8, margin: '10px 0 0' }}>
                            เราใช้วัสดุกันกระแทกคุณภาพสูงในการแพ็คสินค้า พร้อมระบบตรวจสอบรอยตำหนิก่อนจัดส่ง
                            บริการส่งด่วน 1-3 วันทำการทั่วประเทศไทย เช็คสถานะได้ตลอด 24 ชม.
                        </p>
                    </article>

                    <article className="feature-card">
                        <h3 style={{ marginTop: 0 }}>ช่องทางการชำระเงินที่หลากหลาย</h3>
                        <p style={{ lineHeight: 1.8, margin: '10px 0 0' }}>
                            เลือกชำระได้ตามความสะดวก ทั้งการโอนเงินผ่านธนาคาร หรือบริการเก็บเงินปลายทาง (COD)
                            รวมถึงตัวเลือกการผ่อนชำระสำหรับรุ่นยอดนิยม (สอบถามเงื่อนไขได้ทางแชท)
                        </p>
                    </article>

                    <article className="feature-card">
                        <h3 style={{ marginTop: 0 }}>ปรึกษาฟรีและบริการหลังการขาย</h3>
                        <p style={{ lineHeight: 1.8, margin: '10px 0 0' }}>
                            แอดมินใจดีพร้อมช่วยตั้งค่าเครื่องเบื้องต้น โอนย้ายข้อมูล และแนะนำอุปกรณ์เสริมที่จำเป็น
                            เพื่อให้คุณได้ใช้งานสมาร์ทโฟนเครื่องใหม่ได้อย่างเต็มประสิทธิภาพตั้งแต่วันแรก
                        </p>
                    </article>
                </div>

                <div style={{ marginTop: '24px' }}>
                    <article className="feature-card">
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>
                            คำถามที่พบบ่อย (FAQ) - PG Mobile
                        </h2>

                        <div className="accordion">
                            {faqItems.map((item, index) => (
                                <div key={index} className="accordion-item" itemScope itemType="https://schema.org/Question">
                                    <h3 className="accordion-header" itemProp="name">
                                        <button
                                            className="accordion-button"
                                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                            aria-expanded={openIndex === index}
                                            aria-controls={`faq-content-${index}`}
                                        >
                                            {item.question}
                                            <span aria-hidden="true">{openIndex === index ? '−' : '+'}</span>
                                        </button>
                                    </h3>
                                    {openIndex === index && (
                                        <div
                                            id={`faq-content-${index}`}
                                            className="accordion-body"
                                            itemScope
                                            itemType="https://schema.org/Answer"
                                            itemProp="acceptedAnswer"
                                        >
                                            <div itemProp="text">{item.answer}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '20px', fontSize: '0.95rem', opacity: 0.9, textAlign: 'center' }}>
                            หากคุณมีคำถามอื่นๆ เพิ่มเติมนอกเหนือจากนี้?{' '}
                            <strong>ทักแชทคุยกับเราได้เลย:</strong>{' '}
                            <a href={siteConfig.social.line} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                LINE ID (@mypgphone)
                            </a>{' '}
                            หรือ{' '}
                            <a href={siteConfig.social.facebookPage} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                Facebook Inbox
                            </a>
                        </div>
                    </article>

                    <section className="feature-card" style={{ marginTop: '24px', backgroundColor: 'rgba(251, 191, 36, 0.05)', border: '1px dashed var(--accent)' }}>
                        <h3 style={{ marginTop: 0 }}>รับซื้อ / เทิร์นเครื่องมือสองให้ราคาสูง</h3>
                        <p style={{ lineHeight: 1.8, margin: '12px 0' }}>
                            อยากเปลี่ยนเครื่องใหม่ หรือมีโทรศัพท์เก่าไม่ได้ใช้? <strong>PG Mobile รับประเมินราคาเทิร์นให้สูงที่สุด </strong>
                            เพียงส่งรูปสภาพเครื่องจริง รายละเอียดรุ่น ความจุ และสุขภาพแบตเตอรี่มาให้แอดมินช่วยประเมินราคาเบื้องต้นได้ทันที
                        </p>

                        <div className="cta-buttons" style={{ marginTop: '16px' }}>
                            <a
                                href={siteConfig.social.line}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ส่งรูปมือถือเพื่อประเมินราคาเทิร์นทาง LINE"
                            >
                                ส่งรูปประเมินราคาทาง LINE
                            </a>
                            <a
                                href={siteConfig.social.facebookPage}
                                className="btn btn-outline"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="สอบถามข้อมูลรับซื้อ/เทิร์นทาง Facebook"
                            >
                                คุยทาง Facebook
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
