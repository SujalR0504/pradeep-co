"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const handleOpenQuote = (productName = 'Bold Peanuts (Singdana)') => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: productName }));
    }
  };

  return (
    <footer
      className="main-footer"
      style={{
        backgroundColor: '#281409',
        color: '#ffffff',
        paddingTop: '80px',
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        className="site-container"
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* 5-Column Clean Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Col 1: Brand & Overview */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/images/logo/logo-light.png" alt="Pradeep Trading Company" style={{ maxHeight: '56px', width: 'auto' }} />
                <div>
                  <span style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', display: 'block', lineHeight: 1.15 }}>
                    PRADEEP TRADING
                  </span>
                  <span style={{ fontSize: '9px', fontWeight: 600, color: '#C88A2E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Benchmark Peanut Exporter
                  </span>
                </div>
              </Link>
            </div>
            <p style={{ fontSize: '13.5px', color: '#c9b8aa', lineHeight: 1.7, marginBottom: '20px' }}>
              India&apos;s benchmark processor and global exporter of Double-Sortex Bold Peanuts (Singdana), Java Confectionery Kernels, Blanched Whole &amp; Splits, and In-Shell Groundnuts from Central India&apos;s primary mandi hub.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#E5A83B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" style={{ fontSize: '13px' }}></i>
              </a>
              <a
                href="https://wa.me/919589790997"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '14px' }}></i>
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#E5A83B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                }}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" style={{ fontSize: '13px' }}></i>
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
              }}
            >
              Peanut Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li><Link href="/products#bold-peanuts" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Bold Peanuts (Singdana)</Link></li>
              <li><Link href="/products#java-peanuts" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Java Confectionery Kernels</Link></li>
              <li><Link href="/products#blanched-peanuts" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Whole Blanched Peanuts</Link></li>
              <li><Link href="/products#split-blanched" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Split Blanched Cotyledons</Link></li>
              <li><Link href="/products#inshell" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Groundnuts In-Shell Pods</Link></li>
              <li><Link href="/products#roasted" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Roasted Salted Peanuts</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Processing */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
              }}
            >
              Company &amp; Flow
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li><Link href="/about" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>About Pradeep Trading</Link></li>
              <li><Link href="/nut-journey" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Our Processing Journey</Link></li>
              <li><Link href="/health-benefits" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Health &amp; Nutritional Facts</Link></li>
              <li><Link href="/contact" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Central Mandi Sourcing</Link></li>
              <li><Link href="/contact" style={{ color: '#c9b8aa', textDecoration: 'none', transition: 'color 0.2s' }}>Certificate of Analysis</Link></li>
            </ul>
          </div>

          {/* Col 4: Export Corridor */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
              }}
            >
              Export Corridor
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li style={{ color: '#c9b8aa' }}><strong style={{ color: '#ffffff' }}>Processing Plant:</strong> Bhonti, Shivpuri (M.P.)</li>
              <li style={{ color: '#c9b8aa' }}><strong style={{ color: '#ffffff' }}>Primary Ports:</strong> Mundra (INMUN1) • Nhava Sheva (INNSA1)</li>
              <li style={{ color: '#c9b8aa' }}><strong style={{ color: '#ffffff' }}>Global Destinations:</strong> 35+ Nations Worldwide</li>
              <li style={{ color: '#c9b8aa' }}><strong style={{ color: '#ffffff' }}>Standards:</strong> APEDA, FSSAI, ISO 22000, HACCP</li>
            </ul>
          </div>

          {/* Col 5: Export Desk & Contact */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
              }}
            >
              Export Desk
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              <li>
                <div style={{ fontSize: '11.5px', color: '#C88A2E', fontWeight: 600, textTransform: 'uppercase' }}>Phone &amp; WhatsApp</div>
                <a href="tel:+919589790997" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>+91-9589790997</a>
              </li>
              <li>
                <div style={{ fontSize: '11.5px', color: '#C88A2E', fontWeight: 600, textTransform: 'uppercase' }}>Direct Export Desk</div>
                <a href="mailto:pradeeptradingcomp@gmail.com" style={{ color: '#c9b8aa', textDecoration: 'none' }}>pradeeptradingcomp@gmail.com</a>
              </li>
              <li>
                <button
                  onClick={() => handleOpenQuote('Bold Peanuts (Singdana)')}
                  style={{
                    backgroundColor: '#C88A2E',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 18px',
                    borderRadius: '24px',
                    fontWeight: 600,
                    fontSize: '12.5px',
                    cursor: 'pointer',
                    marginTop: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#b07724')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#C88A2E')}
                >
                  <i className="fa fa-file-invoice"></i> Request Container RFQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '56px',
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ margin: 0, color: '#9e8c7e', fontSize: '13px' }}>
            © 2026 <strong>Pradeep Trading Company</strong>. All rights reserved. Sourcing &amp; Exporting Benchmark Indian Groundnuts.
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '12.5px' }}>
            <span style={{ color: '#9e8c7e' }}>APEDA Reg. No. 221849</span>
            <span style={{ color: '#9e8c7e' }}>•</span>
            <span style={{ color: '#9e8c7e' }}>FSSAI Lic. 11422850004123</span>
            <span style={{ color: '#9e8c7e' }}>•</span>
            <span style={{ color: '#9e8c7e' }}>ISO 22000 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
