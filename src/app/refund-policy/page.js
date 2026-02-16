// src/app/refund-policy/page.js
import Link from 'next/link';
import siteConfig from '@/config/site';

export const metadata = {
    title: `นโยบายการเปลี่ยนและคืนสินค้า - ${siteConfig.name}`,
    description: 'รายละเอียดนโยบายการคืนสินค้า เปลี่ยนสินค้า และการคืนเงินของ PG Mobile เพื่อความโปร่งใสและสิทธิประโยชน์สูงสุดของลูกค้าสมาร์ทโฟนมือสอง',
    keywords: 'นโยบายคืนเงิน, เปลี่ยนเครื่องใหม่, เคลมสินค้า PG Mobile, Refund Policy Thailand, รับประกันคืนเงิน',
    alternates: {
        canonical: `${siteConfig.baseUrl}/refund-policy`,
    },
};

export default function RefundPolicyPage() {
    const warrantyConditions = [
        {
            title: 'ระยะเวลาการคุ้มครอง',
            items: [
                'รับประกันเปลี่ยนเครื่องใหม่หรือคืนเงินภายใน 30 วัน',
                'เริ่มนับเวลาตั้งแต่วันที่ลูกค้าเซ็นรับพัสดุจากขนส่ง',
            ],
        },
        {
            title: 'กรณีที่รองรับการเคลม',
            items: [
                'เครื่องมีปัญหาทางเทคนิคที่ไม่สามารถใช้งานได้ปกติ',
                'สินค้าไม่ตรงตามรุ่น ความจุ หรือสีที่ระบุตอนสั่งซื้อ',
                'ตัวเครื่องมีตำหนิใหญ่ที่ไม่ได้แจ้งไว้ล่วงหน้า',
            ],
        },
        {
            title: 'กรณีที่ไม่รับคืน/เปลี่ยน',
            items: [
                'ลูกค้าเปลี่ยนใจโดยไม่มีเหตุผลทางเทคนิครองรับ',
                'เกิดอุบัติเหตุหลังรับเครื่อง เช่น ตกน้ำ จอแตก บุบงอ',
                'วอยด์ประกันหรือสติกเกอร์ร้านถูกแกะหรือทำลาย',
            ],
        },
    ];

    const exchangeConditions = [
        'ต้องแจ้งเจ้าหน้าที่ภายใน 7 วันแรกเพื่อขอเปลี่ยนรุ่นหรือคืน (หากพบปัญหา)',
        'สินค้าและอุปกรณ์เสริมต้องอยู่ในสภาพเดิม 100% พร้อมกล่อง (ถ้ามี)',
        'ไม่มีความต้องการเปลี่ยนเครื่องที่เกิดจากความประมาทเลินเล่อของผู้ใช้งาน',
        'แสดงหลักฐานเป็นแชทการสั่งซื้อหรือวิดีโอแกะกล่อง (Unboxing)',
    ];

    const claimProcess = [
        { step: 1, title: 'แจ้งเรื่อง', desc: 'ทักแชทแจ้งแอดมินพร้อมแนบรายละเอียดปัญหา' },
        { step: 2, title: 'พิจารณา', desc: 'ทีมงานเช็คข้อมูลเบื้องต้นและตอบกลับใน 24 ชม.' },
        { step: 3, title: 'ส่งกลับ', desc: 'แพ็คเครื่องส่งมายังที่อยู่ที่แอดมินแจ้งไว้' },
        { step: 4, title: 'ตรวจสอบ', desc: 'ช่างเทคนิคตรวจสอบสภาพเครื่องจริง 1-3 วัน' },
        { step: 5, title: 'จบงาน', desc: 'ดำเนินการโอนเงินคืนหรือส่งเครื่องใหม่ให้ลูกค้า' },
    ];

    const shippingCosts = [
        { condition: 'สินค้าทำงานผิดปกติจากร้าน/การผลิต', send: 'ร้านรับผิดชอบ', return: 'ร้านรับผิดชอบ' },
        { condition: 'สินค้าไม่ตรงสเปคที่สั่งซื้อ', send: 'ร้านรับผิดชอบ', return: 'ร้านรับผิดชอบ' },
        { condition: 'เปลี่ยนรุ่นโดยที่เครื่องเดิมปกติ', send: 'ลูกค้าดูแล', return: 'ลูกค้าดูแล' },
    ];

    return (
        <main id="refund-policy-page">
            {/* Page Header */}
            <header className="page-header">
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>นโยบายคืนเงินและเปลี่ยนสินค้า</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Refund & Return Policy for PG Mobile Customers</p>
                </div>
            </header>

            {/* Warranty & Conditions Grid */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">ขอบเขต <span>การรับประกันและคืนเงิน</span></h2>
                    <div className="warranty-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        {warrantyConditions.map((condition, index) => (
                            <article key={index} className="warranty-card">
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--accent)' }}>{condition.title}</h3>
                                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                                    {condition.items.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', display: 'flex', gap: '8px', lineHeight: 1.6 }}>
                                            <span style={{ color: 'var(--accent)' }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exchange Conditions */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">หลักเกณฑ์ <span>การพิจารณาเปลี่ยนเครื่อง</span></h2>
                    <article className="feature-card" style={{ marginTop: '30px' }}>
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                            {exchangeConditions.map((item, index) => (
                                <li key={index} style={{ marginBottom: '15px', display: 'flex', gap: '12px', lineHeight: 1.8 }}>
                                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            {/* Claim Process Hierarchy */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">5 ขั้นตอน <span>การเคลมสินค้าที่ชัดเจน</span></h2>
                    <div className="features-grid" style={{ marginTop: '30px' }}>
                        {claimProcess.map((item) => (
                            <article key={item.step} className="feature-card" style={{ textAlign: 'center' }}>
                                <div
                                    className="feature-icon"
                                    aria-hidden="true"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        margin: '0 auto 1.5rem',
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        backgroundColor: 'var(--accent)',
                                        color: '#000',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping Costs Table - Optimized for SEO */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">ความรับผิดชอบ <span>ด้านค่าธรรมเนียมการส่ง</span></h2>
                    <div className="feature-card" style={{ marginTop: '30px', overflowX: 'auto', padding: '0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                <tr>
                                    <th style={{ padding: '20px' }}>กรณีการเคลม/เปลี่ยนสินค้า</th>
                                    <th style={{ padding: '20px', textAlign: 'center' }}>ค่าส่งกลับมาที่ร้าน</th>
                                    <th style={{ padding: '20px', textAlign: 'center' }}>ค่าส่งไปหาลูกค้า</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shippingCosts.map((row, index) => (
                                    <tr key={index} style={{ borderTop: '1px solid var(--border)' }}>
                                        <td style={{ padding: '20px' }}><strong>{row.condition}</strong></td>
                                        <td style={{ padding: '20px', textAlign: 'center' }}>{row.send}</td>
                                        <td style={{ padding: '20px', textAlign: 'center' }}>{row.return}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA & Contact */}
            <section className="cta-section" style={{ padding: '60px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>มีข้อสงสัยเกี่ยวกับนโยบายการคืนเงิน?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>สอบถามแอดมินเพื่อความชัดเจนก่อนดำเนินการส่งสินค้ากลับ</p>
                    <div className="cta-buttons" style={{ justifyContent: 'center', gap: '20px' }}>
                        <a href={siteConfig.social.line} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            ทัก LINE สอบถามเจ้าหน้าที่
                        </a>
                        <Link href="/warranty" className="btn btn-outline">
                            ตรวจสอบเงื่อนไขรับประกัน
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "หน้าแรก",
                                "item": siteConfig.baseUrl
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "นโยบายคืนสินค้า",
                                "item": `${siteConfig.baseUrl}/refund-policy`
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
