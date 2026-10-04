"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    requirement: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Optionally trigger WhatsApp message
      const text = `*New Website Enquiry - Pradeep Trading Co.*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Company:* ${encodeURIComponent(formData.company || 'N/A')}%0A*Requirement:* ${encodeURIComponent(formData.requirement || 'General Enquiry')}%0A*Message:* ${encodeURIComponent(formData.message)}`;
      window.open(`https://wa.me/919589790997?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <footer
      className="main-footer"
      style={{
        backgroundColor: '#1E120A',
        color: '#FFFFFF',
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ============================================================== */}
      {/* 1. CONTACT US FOR ENQUIRY & LIVE GOOGLE MAP SECTION */}
      {/* ============================================================== */}
      <section
        id="footer-enquiry"
        style={{
          borderBottom: '1px solid rgba(229, 168, 59, 0.25)',
          backgroundColor: '#160E08',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: '520px' }}>
          
          {/* LEFT 6 COLUMNS: CONTACT ENQUIRY FORM */}
          <div
            className="lg:col-span-6 flex flex-col justify-center"
            style={{
              padding: 'clamp(36px, 5vw, 60px) clamp(24px, 4vw, 56px)',
              backgroundColor: '#160E08',
            }}
          >
            <div style={{ maxWidth: '560px', width: '100%', margin: '0 auto' }}>
              
              {/* Header Title */}
              <div style={{ marginBottom: '26px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading), "DM Serif Display", serif',
                    fontSize: 'clamp(1.5rem, 2.4vw, 1.9rem)',
                    color: '#E5A83B',
                    display: 'block',
                    fontStyle: 'italic',
                    lineHeight: 1.2,
                  }}
                >
                  Contact Us
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading), "DM Serif Display", serif',
                    fontSize: 'clamp(2.1rem, 3.6vw, 2.9rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '2px 0 8px',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                  }}
                >
                  For Enquiry
                </h2>
                <p style={{ fontSize: '13.5px', color: '#BCA898', margin: 0, lineHeight: 1.6 }}>
                  Direct procurement &amp; export dispatch from Shivpuri (M.P.). Send us your export specifications or container requirements.
                </p>
              </div>

              {isSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid #25D366',
                    borderRadius: '16px',
                    padding: '28px',
                    textAlign: 'center',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <CheckCircle2 size={44} style={{ color: '#25D366', margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                    Enquiry Received Successfully!
                  </h4>
                  <p style={{ fontSize: '13px', color: '#c9b8aa', marginBottom: '16px' }}>
                    Our export desk has been notified. We will connect with CIF quotes and lot specifications within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ requirement: '', name: '', email: '', phone: '', company: '', message: '' });
                    }}
                    style={{
                      padding: '8px 20px',
                      backgroundColor: '#E5A83B',
                      color: '#2C170A',
                      fontWeight: 700,
                      fontSize: '12.5px',
                      borderRadius: '20px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  
                  {/* Field: Product / Requirement */}
                  <div>
                    <input
                      type="text"
                      placeholder="Requirement (e.g., Bold Peanuts 40/50, 1 FCL, Mundra CIF)"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      style={{
                        width: '100%',
                        height: '44px',
                        padding: '0 14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(229, 168, 59, 0.3)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '13.5px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#E5A83B')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(229, 168, 59, 0.3)')}
                    />
                  </div>

                  {/* Row 2: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', color: '#BCA898', fontWeight: 600, marginBottom: '4px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        style={{
                          width: '100%',
                          height: '42px',
                          padding: '0 14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(229, 168, 59, 0.3)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          outline: 'none',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#E5A83B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(229, 168, 59, 0.3)')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', color: '#BCA898', fontWeight: 600, marginBottom: '4px' }}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="buyer@company.com"
                        style={{
                          width: '100%',
                          height: '42px',
                          padding: '0 14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(229, 168, 59, 0.3)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          outline: 'none',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#E5A83B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(229, 168, 59, 0.3)')}
                      />
                    </div>
                  </div>

                  {/* Row 3: Phone Number & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', color: '#BCA898', fontWeight: 600, marginBottom: '4px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 / +971 / +1 ..."
                        style={{
                          width: '100%',
                          height: '42px',
                          padding: '0 14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(229, 168, 59, 0.3)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          outline: 'none',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#E5A83B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(229, 168, 59, 0.3)')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', color: '#BCA898', fontWeight: 600, marginBottom: '4px' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Importing Co. Ltd."
                        style={{
                          width: '100%',
                          height: '42px',
                          padding: '0 14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(229, 168, 59, 0.3)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          outline: 'none',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#E5A83B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(229, 168, 59, 0.3)')}
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', color: '#BCA898', fontWeight: 600, marginBottom: '4px' }}>
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share port of delivery, expected shipment date, and required packaging..."
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(229, 168, 59, 0.3)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        outline: 'none',
                        resize: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#E5A83B')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(229, 168, 59, 0.3)')}
                    />
                  </div>

                  {/* Send Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        backgroundColor: '#E5A83B',
                        color: '#2C170A',
                        padding: '12px 32px',
                        borderRadius: '6px',
                        fontSize: '13.5px',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 18px rgba(229, 168, 59, 0.35)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#F5B84C';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#E5A83B';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      <Send size={15} />
                      <span>{isSubmitting ? 'Sending...' : 'SEND MESSAGE'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* RIGHT 6 COLUMNS: LIVE GOOGLE MAP OF FACTORY HEADQUARTERS */}
          <div
            className="lg:col-span-6 relative min-h-[380px] lg:min-h-full"
            style={{
              backgroundColor: '#0E0804',
              borderLeft: '1px solid rgba(229, 168, 59, 0.2)',
            }}
          >
            {/* Interactive Embedded Google Maps iframe pointing to Bhonti, Shivpuri */}
            <iframe
              title="Pradeep Trading Company Factory Location"
              src="https://maps.google.com/maps?q=Bhonti,+Shivpuri,+Madhya+Pradesh+473551,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '420px',
                border: 0,
                display: 'block',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlaid Factory Badge */}
            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '18px',
                backgroundColor: 'rgba(26, 15, 8, 0.94)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(229, 168, 59, 0.4)',
                borderRadius: '12px',
                padding: '12px 18px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                maxWidth: '280px',
                pointerEvents: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#25D366' }}></span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#E5A83B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Processing &amp; Storage Unit
                </span>
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 2px' }}>
                M/s Pradeep Trading Co.
              </h4>
              <p style={{ fontSize: '11px', color: '#c9b8aa', margin: 0, lineHeight: 1.4 }}>
                Bhonti, Shivpuri, Madhya Pradesh - 473551, India
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN DECENT FOOTER LINKS & COMPANY DETAILS */}
      {/* ============================================================== */}
      <div
        className="site-container"
        style={{
          maxWidth: '1320px',
          width: '100%',
          margin: '0 auto',
          padding: '64px 20px 28px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '36px',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Company Profile */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/images/logo/logo-light.png" alt="Pradeep Trading Company" style={{ maxHeight: '54px', width: 'auto' }} />
                <div>
                  <span style={{ fontSize: '17px', fontWeight: 800, color: '#FFFFFF', display: 'block', lineHeight: 1.15 }}>
                    PRADEEP TRADING
                  </span>
                  <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#C88A2E', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Agro Export Caliber
                  </span>
                </div>
              </Link>
            </div>
            <p style={{ fontSize: '13px', color: '#BCA898', lineHeight: 1.7, marginBottom: '20px' }}>
              Established in Shivpuri (M.P.), processing and exporting double-sortex Bold &amp; Java groundnuts, blanched kernels, and in-shell pods to 40+ nations worldwide.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
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
                <i className="fab fa-whatsapp" style={{ fontSize: '15px' }}></i>
              </a>
              <a
                href="mailto:pradeeptradingcomp@gmail.com"
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
                aria-label="Email"
              >
                <i className="fa fa-envelope" style={{ fontSize: '13px' }}></i>
              </a>
              <a
                href="tel:+919589790997"
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
                aria-label="Phone"
              >
                <i className="fa fa-phone-alt" style={{ fontSize: '13px' }}></i>
              </a>
            </div>
          </div>

          {/* Column 2: Highlighted Products */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
                borderLeft: '3px solid #E5A83B',
                paddingLeft: '8px',
              }}
            >
              Highlighted Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><Link href="/products#bold-peanuts" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Bold Peanuts (38/42 to 70/80)</Link></li>
              <li><Link href="/products#java-peanuts" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Java Confectionery Kernels</Link></li>
              <li><Link href="/products#blanched-peanuts" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Whole Blanched Peanuts</Link></li>
              <li><Link href="/products#split-blanched" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Split Blanched Cotyledons</Link></li>
              <li><Link href="/products#inshell" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Groundnuts In-Shell Pods</Link></li>
              <li><Link href="/products#roasted" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Roasted &amp; Salted Peanuts</Link></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
                borderLeft: '3px solid #E5A83B',
                paddingLeft: '8px',
              }}
            >
              Important Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><Link href="/about" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>About Our Company</Link></li>
              <li><Link href="/nut-journey" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Processing &amp; Sortex Journey</Link></li>
              <li><Link href="/health-benefits" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Nutrition &amp; Health Profile</Link></li>
              <li><Link href="/#global-presence" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Our Global Presence (Map)</Link></li>
              <li><Link href="/contact" style={{ color: '#BCA898', textDecoration: 'none', transition: 'color 0.2s' }}>Contact &amp; Factory Tour</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Desk */}
          <div>
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
                borderLeft: '3px solid #E5A83B',
                paddingLeft: '8px',
              }}
            >
              Export Desk &amp; Plant
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#BCA898' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#E5A83B', flexShrink: 0, marginTop: '2px' }} />
                <span>Bhonti, Shivpuri, Madhya Pradesh - 473551, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#E5A83B', flexShrink: 0 }} />
                <a href="tel:+919589790997" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700 }}>
                  +91-9589790997
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#E5A83B', flexShrink: 0 }} />
                <a href="mailto:pradeeptradingcomp@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  pradeeptradingcomp@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={16} style={{ color: '#E5A83B', flexShrink: 0 }} />
                <span>Mon – Sat: 9:00 AM – 7:30 PM (IST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & CERTIFICATIONS BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '50px',
            paddingTop: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <p style={{ margin: 0, color: '#8E7D70', fontSize: '12.5px' }}>
            © {new Date().getFullYear()} <strong>Pradeep Trading Company</strong>. All rights reserved. Registered Peanut Exporter.
          </p>
          <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#BCA898', flexWrap: 'wrap' }}>
            <span>APEDA Reg. 221849</span>
            <span>•</span>
            <span>FSSAI Lic. 11422850004123</span>
            <span>•</span>
            <span>ISO 22000 Certified</span>
            <span>•</span>
            <span>Mundra &amp; JNPT Port Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
