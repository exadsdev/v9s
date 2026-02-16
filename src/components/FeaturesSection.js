// src/components/FeaturesSection.js
import siteConfig from '@/config/site';

export default function FeaturesSection() {
    const features = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
            ),
            title: 'รับประกันคุณภาพสินค้า',
            desc1: 'PG Mobile สินค้าลิขสิทธิ์แท้ทุกเครื่อง',
            desc2: 'รับประกันการใช้งาน 30 วัน เปลี่ยนเครื่องใหม่หากมีปัญหา',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
            ),
            title: 'จัดส่งด่วนฟรีทั่วไทย',
            desc1: 'PG Mobile เว็บตรง บริการว่องไว',
            desc2: 'จัดส่งฟรีทุกออเดอร์ ถึงมือคุณภายใน 1-3 วันทำการ',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
            ),
            title: 'ราคาเป็นธรรม คุ้มค่า',
            desc1: 'มือถือคัดเกรดคุณภาพระดับสากล',
            desc2: 'ราคาถูกกว่าท้องตลาด ช่วยคุณประหยัดงบได้มากกว่า',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            title: 'ตรวจสอบเข้มงวดก่อนส่ง',
            desc1: 'PG Mobile ตรวจเช็คมาตรฐาน 20 จุด',
            desc2: 'มั่นใจได้ 100% ว่าได้รับเครื่องที่ทำงานได้สมบูรณ์',
        },
    ];

    return (
        <section className="section section-alt" id="why-choose-us">
            <div className="container">
                <header style={{ marginBottom: '32px', textAlign: 'center' }}>
                    <h2 className="section-title">ทำไมต้องเลือก <span>PG Mobile</span></h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, lineHeight: 1.6 }}>
                        เรามุ่งมั่นเป็นที่หนึ่งด้านการจำหน่ายมือถือมือสองคุณภาพดีในจังหวัดสกลนคร และทั่วประเทศไทย
                        ด้วยกระบวนการคัดเกรดที่เข้มงวดและบริการที่จริงใจ
                    </p>
                </header>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p><strong>{feature.desc1}</strong></p>
                            <p>{feature.desc2}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '22px', display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
                    <article className="feature-card" style={{ flex: '1 1 350px' }}>
                        <h3 style={{ marginTop: 0 }}>ประวัติและพันธกิจของ PG Mobile สกลนคร</h3>
                        <p style={{ margin: '10px 0 0', lineHeight: 1.8 }}>
                            ร้าน PG Mobile เริ่มต้นจากความตั้งใจที่จะให้ชาวไทยได้เข้าถึงสมาร์ทโฟนคุณภาพดีในราคาที่จับต้องได้
                            เราคัดสรรเครื่องมือสองคุณภาพสูง ตรวจสอบสภาพการใช้งานทุกจุดอย่างละเอียด
                            พร้อมให้คำแนะนำรุ่นที่เหมาะสมกับงบประมาณและการใช้งานจริงของคุณ
                            ยืนหยัดด้วยความซื่อสัตย์ การันตีด้วยรีวิวจากลูกค้าตัวจริงทั่วประเทศ
                        </p>
                        <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <span className="badge">✔ คัดเกรด A+</span>
                            <span className="badge">✔ ตรวจเช็คละเอียด</span>
                            <span className="badge">✔ มีตัวตน เชื่อถือได้</span>
                        </div>
                    </article>

                    <aside className="feature-card" style={{ flex: '1 1 300px' }}>
                        <h3 style={{ marginTop: 0 }}>ข้อมูลการติดต่อ PG Mobile</h3>
                        <div style={{ marginTop: '10px', lineHeight: 1.9 }}>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>สายด่วนโทร:</strong>{' '}
                                <a href={`tel:${siteConfig.company.phone.replace(/-/g, '')}`} aria-label={`โทรติดต่อร้านที่เบอร์ ${siteConfig.company.phone}`}>
                                    {siteConfig.company.phone}
                                </a>
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>LINE Official:</strong>{' '}
                                <a href={siteConfig.social.line} target="_blank" rel="noopener noreferrer" aria-label="สอบถามผ่านไลน์ออฟฟิเชียล">
                                    @mypgphone
                                </a>
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Facebook Page:</strong>{' '}
                                <a href={siteConfig.social.facebookPage} target="_blank" rel="noopener noreferrer">
                                    PG Mobile มือถือหลุดจำนำ
                                </a>
                            </div>
                            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)', fontSize: '14px', opacity: 0.9 }}>
                                <strong>สำนักงานใหญ่:</strong><br />
                                183 หมู่ที่ 1 ต.คำตากล้า อ.คำตากล้า จ.สกลนคร 47250
                            </div>
                            <div style={{ marginTop: '10px', fontSize: '14px', opacity: 0.9 }}>
                                <strong>เวลาทำการ:</strong> <time>{siteConfig.businessHours}</time>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
