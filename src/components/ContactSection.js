// src/components/ContactSection.js
import siteConfig from '@/config/site';

export default function ContactSection() {
    return (
        <section id="contact-details" className="section" aria-label="ช่องทางการติดต่อ PG Mobile">
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 className="section-title">ติดต่อ <span>PG Mobile</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0.5rem auto 0', opacity: 0.8, lineHeight: 1.6 }}>
                        สอบถามข้อมูลเครื่องมือสอง เช็คสต็อกสินค้าล่าสุด หรือต้องการประเมินราคาเทิร์นเครื่อง
                        เราพร้อมให้บริการทุกวันด้วยความรวดเร็วและจริงใจ
                    </p>
                </header>

                <div className="contact-grid">
                    <article className="feature-card">
                        <h3 style={{ marginTop: 0 }}>ส่งข้อความด่วนสอบถามแอดมิน</h3>

                        <form style={{ marginTop: '16px' }} action="#" method="POST">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                                <div>
                                    <label className="form-label" htmlFor="contact-name">ชื่อ - นามสกุล</label>
                                    <input type="text" id="contact-name" name="name" className="form-input" placeholder="กรุณากรอกชื่อของคุณ" required />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="contact-phone">เบอร์โทรศัพท์ติดต่อ</label>
                                    <input type="tel" id="contact-phone" name="phone" className="form-input" placeholder="เช่น 09x-xxx-xxxx" required />
                                </div>
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <label className="form-label" htmlFor="contact-message">สิ่งที่ท่านต้องการสอบถาม</label>
                                <textarea id="contact-message" name="message" className="form-input" rows={4} placeholder="ระบุรุ่นที่สนใจหรืองบประมาณที่ท่านต้องการ..." required />
                            </div>

                            <div className="cta-buttons" style={{ marginTop: '20px' }}>
                                <button type="submit" className="btn btn-primary" style={{ minWidth: '150px' }}>ส่งข้อความสอบถาม</button>
                                <a
                                    href={siteConfig.social.line}
                                    className="btn btn-outline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="ติดต่อร้านผ่านทาง LINE Official เพื่อความรวดเร็วสูงสุด"
                                >
                                    ทัก LINE ตอบไวที่สุด
                                </a>
                            </div>

                            <p style={{ marginTop: '15px', opacity: 0.7, fontSize: '0.85rem', lineHeight: 1.6 }}>
                                <em>* ข้อมูลของท่านจะถูกส่งไปยังทีมงาน PG Mobile ภายในจังหวัดสกลนคร เพื่อดำเนินการตอบกลับโดยเร็วที่สุด</em>
                            </p>
                        </form>
                    </article>

                    <aside className="feature-card" itemScope itemType="https://schema.org/LocalBusiness">
                        <meta itemProp="name" content={siteConfig.name} />
                        <h3 style={{ marginTop: 0 }}>ข้อมูลติดต่อสำนักงานใหญ่</h3>
                        <div style={{ marginTop: '16px', lineHeight: 2 }}>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>ร้าน:</strong> {siteConfig.company.nameTh}
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>สายด่วนโทร:</strong>{' '}
                                <a href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`} itemProp="telephone">
                                    {siteConfig.company.phone}
                                </a>
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Line ID:</strong>{' '}
                                <a href={siteConfig.social.line} target="_blank" rel="noopener noreferrer">
                                    @mypgphone
                                </a>
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Facebook:</strong>{' '}
                                <a href={siteConfig.social.facebookPage} target="_blank" rel="noopener noreferrer">
                                    PG Mobile มือถือมือสอง
                                </a>
                            </div>

                            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                <strong>ที่ตั้งร้าน:</strong><br />
                                <span itemProp="streetAddress">183 หมู่ที่ 1 ตำบลคำตากล้า</span><br />
                                <span itemProp="addressLocality">อำเภอคำตากล้า</span>, <span itemProp="addressRegion">จังหวัดสกลนคร</span> <span itemProp="postalCode">47250</span>
                            </div>

                            <div style={{ marginTop: '10px', opacity: 0.9 }}>
                                <strong>เวลาให้บริการ:</strong> <time>{siteConfig.businessHours}</time>
                            </div>
                        </div>

                        <div
                            style={{
                                marginTop: '20px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                        >
                            <iframe
                                title="พิกัดร้าน PG Mobile สาขาคำตากล้า สกลนคร"
                                width="100%"
                                height="240"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps?q=${siteConfig.googleMaps.latitude},${siteConfig.googleMaps.longitude}&z=16&output=embed`}
                                style={{ border: 0 }}
                                allowFullScreen
                            />
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
