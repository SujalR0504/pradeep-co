"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuote = (productName = 'Bold Peanuts (Singdana)') => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: productName }));
    }
  };

  return (
    <>
      <header
        className="main-header header-style-one"
        style={{
          position: 'relative',
          zIndex: 9999,
          backgroundColor: '#ffffff',
          fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* ROW 1: Top Information Bar (40px) */}
        <div
          className="header-top"
          style={{
            backgroundColor: '#361C0D',
            color: '#ffffff',
            height: '40px',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className="site-container"
            style={{
              maxWidth: '1320px',
              width: '100%',
              margin: '0 auto',
              padding: '0 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div className="top-left">
              <ul
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '22px',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  fontSize: '12.5px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <i className="fa fa-map-marker-alt" style={{ color: '#E5A83B', fontSize: '13.5px' }}></i>
                  <span style={{ color: '#ffffff' }}>Bhonti, Shivpuri, Madhya Pradesh - 473551, India</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <i className="fa fa-envelope" style={{ color: '#E5A83B', fontSize: '13.5px' }}></i>
                  <a href="mailto:export@pradeeptrading.in" style={{ color: '#e0d6cb', textDecoration: 'none' }}>
                    export@pradeeptrading.in
                  </a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <i className="fa fa-phone-alt" style={{ color: '#E5A83B', fontSize: '13.5px' }}></i>
                  <a href="tel:+918450016454" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                    +91-8450016454
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-right" style={{ display: 'flex', alignItems: 'center', gap: '16px', whiteSpace: 'nowrap' }}>
              <a
                href="https://wa.me/918450016454?text=Hello%20Pradeep%20Trading,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  height: '30px',
                  padding: '0 14px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(37, 211, 102, 0.25)',
                }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '14px' }}></i> WhatsApp Inquiry
              </a>
              <ul style={{ display: 'flex', alignItems: 'center', gap: '12px', listStyle: 'none', margin: 0, padding: 0 }}>
                <li>
                  <a href="#" style={{ color: '#e0d6cb', fontSize: '13.5px', display: 'flex' }} aria-label="LinkedIn">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#e0d6cb', fontSize: '13.5px', display: 'flex' }} aria-label="Twitter">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#e0d6cb', fontSize: '13.5px', display: 'flex' }} aria-label="Facebook">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 2: Main Navigation Bar (84px, shrinks to 70px on scroll) */}
        <div
          className={`header-upper ${isSticky ? 'fixed-header is-sticky' : ''}`}
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 9999,
            backgroundColor: '#ffffff',
            height: isSticky ? '70px' : '84px',
            borderBottom: '1px solid #efe8dc',
            boxShadow: isSticky ? '0 4px 20px rgba(92, 52, 27, 0.08)' : 'none',
            transition: 'height 0.3s ease-out, box-shadow 0.3s ease-out',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            className="site-container"
            style={{
              maxWidth: '1320px',
              width: '100%',
              margin: '0 auto',
              padding: '0 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <div style={{ padding: 0, width: 'auto', flexShrink: 0 }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <img
                  src="/images/logo/logo.png"
                  alt="Pradeep Trading Company"
                  style={{
                    maxHeight: isSticky ? '45px' : '52px',
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'max-height 0.3s ease-out',
                  }}
                />
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: isSticky ? '16px' : '17.5px',
                      fontWeight: 700,
                      color: '#5C341B',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.15,
                      transition: 'font-size 0.3s ease-out',
                    }}
                  >
                    PRADEEP TRADING
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '9.5px',
                      fontWeight: 600,
                      color: '#C88A2E',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Benchmark Peanut Exporter
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Menu (Single Line, 24px spacing, font Manrope 500) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
              <nav className="header-nav" style={{ display: 'flex', alignItems: 'center' }}>
                <ul
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <li style={{ padding: 0, margin: 0 }}>
                    <Link
                      href="/"
                      style={{
                        color: '#5C341B',
                        textDecoration: 'none',
                        borderBottom: '2px solid #C88A2E',
                        paddingBottom: '3px',
                        fontWeight: 600,
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ padding: 0, margin: 0 }}>
                    <Link
                      href="/about"
                      style={{
                        color: '#361C0D',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.2s',
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li style={{ padding: 0, margin: 0 }}>
                    <Link
                      href="/products"
                      style={{
                        color: '#361C0D',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Peanut Products <i className="fa fa-angle-down" style={{ fontSize: '11px', color: '#C88A2E' }}></i>
                    </Link>
                  </li>
                  <li style={{ padding: 0, margin: 0 }}>
                    <Link
                      href="/nut-journey"
                      style={{
                        color: '#361C0D',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Our Process
                    </Link>
                  </li>
                  <li style={{ padding: 0, margin: 0 }}>
                    <Link
                      href="/health-benefits"
                      style={{
                        color: '#361C0D',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Health Benefits
                    </Link>
                  </li>
                  <li style={{ padding: 0, margin: 0 }}>
                    <Link
                      href="/contact"
                      style={{
                        color: '#361C0D',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Request Quote Button (48px height, 26px radius, padding 0 25px) */}
              <button
                onClick={() => handleOpenQuote('Bold Peanuts (Singdana)')}
                style={{
                  height: isSticky ? '42px' : '48px',
                  padding: isSticky ? '0 20px' : '0 25px',
                  borderRadius: '24px',
                  backgroundColor: '#5C341B',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 3px 10px rgba(92, 52, 27, 0.18)',
                  transition: 'all 0.3s ease-out',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
              >
                <i className="fa fa-file-invoice" style={{ color: '#E5A83B' }}></i> Request Quote
              </button>

              {/* Mobile Menu Toggler */}
              <div
                className="mobile-nav-toggler"
                onClick={() => setMobileMenuOpen(true)}
                style={{ cursor: 'pointer', fontSize: '20px', color: '#5C341B', display: 'none' }}
                aria-label="Open Mobile Menu"
              >
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex' }}>
          <div
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(40,20,9,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            style={{
              position: 'relative',
              width: '85%',
              maxWidth: '340px',
              backgroundColor: '#361C0D',
              color: '#fff',
              height: '100%',
              padding: '30px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              zIndex: 1,
              borderRight: '1px solid rgba(200, 138, 46, 0.3)',
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <img src="/images/logo/logo-light.png" alt="Pradeep Trading" style={{ maxHeight: '52px' }} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}
                  aria-label="Close Mobile Menu"
                >
                  &times;
                </button>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '16px', fontWeight: 600 }}>
                <li><Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#E5A83B', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link href="/products" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Peanut Products</Link></li>
                <li><Link href="/nut-journey" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Our Process</Link></li>
                <li><Link href="/health-benefits" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Health Benefits</Link></li>
                <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
              <p style={{ fontSize: '12px', color: '#c3d2ce', marginBottom: '6px' }}>Direct Export Desk:</p>
              <a href="tel:+918450016454" style={{ color: '#E5A83B', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'block', marginBottom: '14px' }}>
                +91-8450016454
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenQuote('Bold Peanuts (Singdana)');
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#C88A2E',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '24px',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                }}
              >
                Request Fast RFQ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
