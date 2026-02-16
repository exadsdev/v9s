// src/components/StatsSection.js
export default function StatsSection() {
    const stats = [
        { number: '5,000+', label: 'เครื่องที่ขายไปแล้ว', desc: 'ได้รับความไว้วางใจจากลูกค้าทั่วไทย' },
        { number: '4.9/5', label: 'คะแนนความพึงพอใจ', desc: 'จากการรีวิวของลูกค้าตัวจริง' },
        { number: '5+', label: 'ปีประสบการณ์', desc: 'เชี่ยวชาญด้านมือถือคัดเกรด' },
        { number: '24/7', label: 'บริการตอบแชท', desc: 'ดูแลและให้คำปรึกษาตลอดเวลา' },
    ];

    return (
        <section className="section" id="business-stats" aria-label="สถิติและความสำเร็จของ PG Mobile">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <article key={index} className="stat-item">
                            <div className="stat-number" aria-label={`${stat.number} ${stat.label}`}>
                                {stat.number}
                            </div>
                            <h3 className="stat-label" style={{ fontSize: '1.1rem', margin: '4px 0' }}>{stat.label}</h3>
                            <p style={{ margin: 0, opacity: 0.8, fontSize: '0.85rem' }}>{stat.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
