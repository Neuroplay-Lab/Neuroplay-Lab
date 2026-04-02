"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ─── Paste your Rolling Well banner image path here ───────────────────────────
// Copy banner.png from the Rolling Well public/ folder into the Neuroplay Lab
// public/ folder, then reference it below.
const BANNER_IMAGE = "/rolling-well-banner.webp";

// Event date: 29 July 2026 09:00 BST
const EVENT_DATE = new Date("2026-07-29T09:00:00+01:00");

function useCountdown() {
  const calc = () => {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
    return {
      days: Math.ceil(diff / (1000 * 60 * 60 * 24)),
      over: false,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function RollingWellBanner() {
  const { days, over } = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-100">
        <aside
          aria-label="Rolling Well Conference 2026 promotion"
          style={{
            // Outer wrapper — sits naturally in Neuroplay's white layout
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            border: "1px solid rgba(0,0,0,0.07)",
            fontFamily: "inherit",
          }}
          className="flex flex-col lg:flex-row lg:max-h-[350px] max-w-6xl m-10 lg:mx-auto"
        >
          {/* ── Top: banner image with parchment/topo overlay ── */}
          <div className="relative w-100 h-fit">
            <Image
              src={BANNER_IMAGE}
              alt="Rolling Well — Gaming for Health and Wellbeing"
              width={1200}
              height={400}
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            {/* Gradient overlay so text below reads cleanly */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.35) 100%)",
            }} />
            {/* Event label over the image */}
            <div style={{
              position: "absolute", bottom: 16, left: 20,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{
                background: "#29abe2",
                color: "white",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: 99,
              }}>
                Coming July 2026
              </span>
              <span style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(6px)",
                color: "white",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 99,
                border: "1px solid rgba(255,255,255,0.25)",
              }}>
                The Amelia Scott · Tunbridge Wells
              </span>
            </div>
          </div>
        
          {/* ── Bottom: content on parchment ── */}
          <div style={{
            background: "#f5efe0",
            // Subtle topo lines via SVG background
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='200'%3E%3Cg fill='none' stroke='%23c8b890' stroke-width='1' opacity='0.3'%3E%3Cpath d='M-50 40 Q 100 20 200 50 Q 320 75 450 30 Q 580 5 750 60'/%3E%3Cpath d='M-50 70 Q 80 45 180 75 Q 310 105 430 60 Q 570 20 730 80'/%3E%3Cpath d='M-50 100 Q 70 70 160 100 Q 295 130 420 85 Q 565 45 720 105'/%3E%3Cpath d='M-50 130 Q 60 95 145 125 Q 280 160 410 110 Q 555 65 710 132'/%3E%3Cpath d='M-50 160 Q 50 120 130 155 Q 265 192 400 138 Q 545 88 700 160'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100% auto",
            padding: "20px 24px 24px",
          }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "space-between",
            }}
            className="h-full justify-between align-middle">
        
              {/* Left: title + description */}
              <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                  <span style={{
                    fontSize: "1.35rem",
                    fontWeight: 900,
                    color: "#29abe2",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}>
                    Rolling Well
                  </span>
                  <span style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#7a6a50",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}>
                    Conference 2026
                  </span>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                  color: "#4a4030",
                  maxWidth: 380,
                }}>
                  We're co-organising a two-day conference on gaming for health and wellbeing — bringing together researchers, practitioners and community organisers to explore TTRPGs in wellbeing-focused contexts.
                </p>
                {/* Key details */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginTop: 10 }}>
                  {[
                    { icon: "📅", text: "29–30 July 2026" },
                    { icon: "📍", text: "The Amelia Scott, Tunbridge Wells" },
                    { icon: "🎟️", text: "£12 per day" },
                  ].map((d) => (
                    <span key={d.text} style={{ fontSize: "0.75rem", color: "#5a4a30", display: "flex", gap: 4, alignItems: "center" }}>
                      <span>{d.icon}</span>
                      <span style={{ fontWeight: 500 }}>{d.text}</span>
                    </span>
                  ))}
                </div>
              </div>
        
              {/* Right: countdown + CTA */}
              <div className="flex flex-col lg:flex-row items-center mx-auto justify-center"
              style={{ flex: "0 0 auto", gap: 12 }}>
                {/* Countdown */}
                {!over ? (
                  <div style={{
                    background: "rgba(41,171,226,0.10)",
                    border: "1px solid rgba(41,171,226,0.25)",
                    borderRadius: 10,
                    padding: "10px 16px",
                    textAlign: "center",
                    minWidth: 160,
                  }}>
                    <div style={{
                      fontSize: "1.3rem",
                      fontWeight: 900,
                      color: "#29abe2",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                    }}>
                      {days}
                      <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#7a6a50" }}>days</span>
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "#7a6a50", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                      Until the conference
                    </div>
                  </div>
                ) : (
                  <div style={{
                    background: "rgba(41,171,226,0.10)",
                    border: "1px solid rgba(41,171,226,0.25)",
                    borderRadius: 10,
                    padding: "10px 16px",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#29abe2",
                  }}>
                    🎲 It&apos;s happening!
                  </div>
                )}
        
                {/* CTA */}
                < a
                  href="https://rollingwell.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#29abe2",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "10px 20px",
                    borderRadius: 8,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1a8fc2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#29abe2")}
                >
                  Find out more
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </aside>
    </div>
  );
}