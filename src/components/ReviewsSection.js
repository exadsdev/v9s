// src/components/ReviewsSection.js
import Image from 'next/image';
import siteConfig from '@/config/site';

export default function ReviewsSection({ reviews = [] }) {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "currentColor" : "rgba(255,255,255,0.2)"}
                aria-hidden="true"
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ));
    };

    if (!reviews || reviews.length === 0) return null;

    return (
        <section className="section" id="reviews-section" aria-label="รีวิวและความประทับใจจากลูกค้า">
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title">รีวิวจาก <span>ลูกค้าตัวจริง</span></h2>
                    <p style={{ maxWidth: '700px', margin: '0.5rem auto 0', opacity: 0.85, lineHeight: 1.6 }}>
                        ฟังเสียงสะท้อนจากความประทับใจของลูกค้าที่ไว้วางใจเลือกซื้อสมาร์ทโฟนจาก PG Mobile
                        เรามุ่งมั่นรักษามาตรฐานคุณภาพและบริการให้ดีที่สุดเสมอ
                    </p>
                </header>

                <div className="features-grid">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="review-card"
                            itemScope
                            itemType="https://schema.org/Review"
                        >
                            <div className="review-img-wrapper">
                                <Image
                                    src={review.image}
                                    alt={`รีวิวจากลูกค้าในจังหวัด ${review.province} ที่ซื้อ ${review.product}`}
                                    width={400}
                                    height={220}
                                    loading="lazy"
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="review-content">
                                <div className="review-stars" aria-label={`คะแนน ${review.rating} จาก 5 ดาว`}>
                                    {renderStars(review.rating)}
                                </div>

                                <span className="review-product" itemProp="itemReviewed" itemScope itemType="https://schema.org/Product">
                                    <span itemProp="name">{review.product}</span>
                                </span>

                                <blockquote itemProp="reviewBody" className="review-text">
                                    &quot;{review.text}&quot;
                                </blockquote>

                                <footer className="review-meta">
                                    <span itemProp="author" itemScope itemType="https://schema.org/Person">
                                        <span itemProp="name">ลูกค้า PG Mobile</span>
                                    </span>
                                    {' | '}
                                    <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                                        <meta itemProp="name" content={siteConfig.name} />
                                    </span>
                                    📍 <span>{review.province}</span>
                                    {' | '}
                                    <time itemProp="datePublished" dateTime={review.date.includes('2025') ? '2025-05-15' : '2024-12-29'}>
                                        {review.date}
                                    </time>
                                </footer>

                                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" style={{ display: 'none' }}>
                                    <meta itemProp="worstRating" content="1" />
                                    <meta itemProp="ratingValue" content={String(review.rating)} />
                                    <meta itemProp="bestRating" content="5" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px dashed rgba(255,255,255,0.2)' }}>
                    <p style={{ opacity: 0.7, fontSize: '0.85rem', marginBottom: '0.8rem', fontStyle: 'italic' }}>
                        * ข้อมูลรีวิวจริงจากหน้าเพจ Facebook และ LINE Official ของทางร้าน PG Mobile
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        ต้องการดูรีวิวเพิ่มเติมและวิดีโอแกะกล่อง?{' '}
                        <a
                            href={siteConfig.social.facebookPage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                            style={{ fontWeight: 600, textDecoration: 'underline' }}
                        >
                            เข้าชมได้ที่ Facebook Page ของเรา
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
