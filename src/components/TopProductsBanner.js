// src/components/TopProductsBanner.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { saveClick } from "@/components/VisitorTracker";

// สร้าง cache version จาก timestamp (เพื่อให้รูปภาพอัปเดตทันทีทุกครั้งที่รีเฟรช)
function getCacheVersion() {
  return Date.now().toString();
}

// บังคับ URL ให้เป็น absolute เสมอ (กัน 404 แบบ /orderedshop.pgmobile.shop/...)
function toAbsoluteUrl(url) {
  if (!url) return "";

  let u = String(url).trim();

  // ลบช่องว่างในสตริง + ตัด / ท้าย
  u = u.replace(/\s+/g, "").replace(/\/+$/, "");

  // ถ้าไม่มี protocol ให้เติม https://
  if (!/^https?:\/\//i.test(u)) {
    u = `https://${u}`;
  }

  return u;
}

export default function TopProductsBanner() {
  const [shopUrl, setShopUrl] = useState("");
  const [cacheVersion, setCacheVersion] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCacheVersion(getCacheVersion());

    // ตรวจจับขนาดหน้าจอ
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // ดึงค่า shopUrl จาก Settings API (JSON File)
    const loadSettings = async () => {
      try {
        const response = await fetch("/api/settings", { cache: "no-store" });
        if (!response.ok) return;

        const settings = await response.json();
        const cleanUrl = toAbsoluteUrl(settings?.shopUrl);

        if (cleanUrl) {
          setShopUrl(cleanUrl);
        } else {
          setShopUrl("");
        }
      } catch (e) {
        console.error("Error fetching settings:", e);
        setShopUrl("");
      }
    };

    loadSettings();

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageClick = (id) => {
    saveClick("topBanner-shopImage", `product-${id}`);
  };

  // สร้าง URL สำหรับรูปภาพ (ใช้ img-proxy.php)
  const getImageUrl = (id) => {
    return `${shopUrl}/img-proxy.php?f=${id}.gif&v=${cacheVersion}`;
  };

  // สร้าง URL สำหรับลิงก์คลิก
  const getCartUrl = (id) => {
    return `${shopUrl}/cart.php?id=${id}`;
  };

  // สร้าง array สำหรับ 6 รูป (id 1-6)
  const productImages = [1, 2, 3, 4, 5, 6];

  // กันกระพริบ/กัน mismatch ก่อน mount และก่อนมี shopUrl
  if (!mounted) return null;

  // ไม่แสดงถ้ายังไม่มี shopUrl
  if (!shopUrl) return null;

  // === แสดงผลสำหรับมือถือ ===
  if (isMobile) {
    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {productImages.map((id) => (
            <a
              key={id}
              href={getCartUrl(id)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleImageClick(id)}
              style={{
                display: "block",
                width: "100%",
                cursor: "pointer",
                lineHeight: 0,
                position: "relative",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getImageUrl(id)}
                alt={`สินค้าแนะนำ PG Mobile รุ่นที่ ${id}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                loading={id <= 2 ? "eager" : "lazy"}
                width={600}
                height={400}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }

  // === แสดงผลสำหรับ PC (แบบเดิม) ===
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "12px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 10px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {productImages.map((id) => (
          <a
            key={id}
            href={getCartUrl(id)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleImageClick(id)}
            style={{
              flex: "0 0 auto",
              width: "140px",
              height: "90px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              background: "#fff",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getImageUrl(id)}
              alt={`สินค้าแนะนำ PG Mobile รุ่นที่ ${id}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              loading="eager"
              width={140}
              height={90}
            />
            <span
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                background: id <= 3 ? "#ef4444" : "#22c55e",
                color: "#fff",
                fontSize: "10px",
                fontWeight: "bold",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              {id <= 3 ? "🔥 HOT" : "✓ ส่งฟรี"}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
