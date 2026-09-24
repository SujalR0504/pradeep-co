"use client";

import React, { useState, useEffect } from 'react';

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('Bold Peanuts');

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e.detail) {
        setProductName(e.detail);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-quote-modal', handleOpen);
    return () => window.removeEventListener('open-quote-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        backgroundColor: 'rgba(25, 12, 5, 0.65)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        className="p-5 sm:p-8 rounded-3xl"
        style={{
          backgroundColor: '#ffffff',
          maxWidth: '540px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          animation: 'fadeInDown 0.3s ease-out',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close quote modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'none',
            border: 'none',
            fontSize: '26px',
            color: '#797f7d',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        <div style={{ marginBottom: '22px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#C88A2E', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Instant Price &amp; Container Specification
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#2C170A', marginTop: '4px', letterSpacing: '-0.01em' }}>
            Request Peanut Export Quote
          </h3>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const buyerName = (form.elements.namedItem('buyerName') as HTMLInputElement)?.value;
            const buyerPhone = (form.elements.namedItem('buyerPhone') as HTMLInputElement)?.value;
            const containerSize = (form.elements.namedItem('containerSize') as HTMLSelectElement)?.value;
            const port = (form.elements.namedItem('destPort') as HTMLInputElement)?.value;

            const message = `Hello Pradeep Trading! I would like to request an export quote.%0A%0A*Product:* ${productName}%0A*Container:* ${containerSize}%0A*Destination Port:* ${port}%0A*Buyer:* ${buyerName}%0A*Contact:* ${buyerPhone}`;
            window.open(`https://wa.me/919589790997?text=${message}`, '_blank');
            setIsOpen(false);
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#361C0D', marginBottom: '5px' }}>
                Selected Peanut Variety
              </label>
              <input
                type="text"
                readOnly
                value={productName}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: '1px solid #d5c8b5',
                  backgroundColor: '#f7f4ee',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: '#5C341B',
                  outline: 'none',
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#361C0D', marginBottom: '5px' }}>
                  Container Format
                </label>
                <select
                  name="containerSize"
                  defaultValue="1 x 20ft FCL (~19 MT)"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #d5c8b5',
                    fontSize: '13px',
                    backgroundColor: '#ffffff',
                    color: '#361C0D',
                    outline: 'none',
                  }}
                >
                  <option value="1 x 20ft FCL (~19 MT)">1 x 20ft FCL (~19 MT)</option>
                  <option value="2 x 20ft FCL (~38 MT)">2 x 20ft FCL (~38 MT)</option>
                  <option value="5+ FCLs Contract">5+ FCLs Contract</option>
                  <option value="Sample LCL (Evaluation)">Sample LCL (Evaluation)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#361C0D', marginBottom: '5px' }}>
                  Destination Port
                </label>
                <input
                  type="text"
                  name="destPort"
                  required
                  placeholder="e.g. Jebel Ali / Rotterdam"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #d5c8b5',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#361C0D', marginBottom: '5px' }}>
                  Buyer / Company Name
                </label>
                <input
                  type="text"
                  name="buyerName"
                  required
                  placeholder="Your Name / Entity"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #d5c8b5',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#361C0D', marginBottom: '5px' }}>
                  WhatsApp / Phone
                </label>
                <input
                  type="tel"
                  name="buyerPhone"
                  required
                  placeholder="+Country-Number"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #d5c8b5',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#5C341B',
                color: '#ffffff',
                border: 'none',
                height: '48px',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B')}
            >
              <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: '16px' }}></i> Submit RFQ to Export Desk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
