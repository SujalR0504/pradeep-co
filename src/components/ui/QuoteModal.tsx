"use client";

import React, { useState, useEffect } from 'react';

const PRODUCT_OPTIONS = [
  "Bold Peanuts",
  "TJ Peanuts",
  "Blanched Peanuts",
  "Blanched Splits",
  "In-Shell Groundnuts",
  "Groundnut Oil",
  "Peanut Butter",
  "Mahua Flower",
  "Wheat & Barley",
  "Mustard Seeds",
  "Groundnut DOC",
  "Other Agri Products"
];

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('Bold Peanuts');

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (e.detail) {
        const match = PRODUCT_OPTIONS.find(
          (opt) => opt.toLowerCase() === String(e.detail).toLowerCase()
        );
        setProductName(match || e.detail);
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
        backgroundColor: 'rgba(20, 10, 4, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div
        className="rounded-2xl"
        style={{
          backgroundColor: '#ffffff',
          maxWidth: '440px',
          width: '100%',
          padding: '22px 24px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0,0,0,0.22)',
          animation: 'fadeInDown 0.25s ease-out',
          border: '1px solid rgba(229, 215, 201, 0.6)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close quote modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#F6EFE7',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#5C341B',
            cursor: 'pointer',
            lineHeight: 1,
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#E9DDD0')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#F6EFE7')}
        >
          &times;
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '16px', textAlign: 'left', paddingRight: '28px' }}>
          <span
            style={{
              fontSize: '10.5px',
              fontWeight: 800,
              color: '#B87820',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              backgroundColor: '#FAF3E8',
              padding: '3px 9px',
              borderRadius: '12px',
              display: 'inline-block',
              border: '1px solid rgba(200, 138, 46, 0.25)',
              marginBottom: '6px',
            }}
          >
            Instant Price
          </span>
          <h3
            style={{
              fontSize: '18.5px',
              fontWeight: 800,
              color: '#2C170A',
              margin: '0 0 2px',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            Request our products
          </h3>
          <p
            style={{
              fontSize: '11.5px',
              color: '#7A6B63',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Direct container specifications &amp; quick export pricing
          </p>
        </div>

        {/* Clean 4-Field Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const selectedProduct = (form.elements.namedItem('product') as HTMLSelectElement)?.value || productName;
            const quantity = (form.elements.namedItem('quantity') as HTMLInputElement)?.value;
            const buyerName = (form.elements.namedItem('buyerName') as HTMLInputElement)?.value;
            const country = (form.elements.namedItem('country') as HTMLInputElement)?.value;

            const message = `Hello Pradeep Trading! I would like to request an export quote.%0A%0A*Product:* ${selectedProduct}%0A*Quantity:* ${quantity}%0A*Name:* ${buyerName}%0A*Country:* ${country}`;
            window.open(`https://wa.me/919589790997?text=${message}`, '_blank');
            setIsOpen(false);
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {/* 1. Variety of Products (Dropdown) */}
            <div>
              <label
                htmlFor="quote-product-select"
                style={{
                  display: 'block',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#4A3B32',
                  marginBottom: '4px',
                }}
              >
                Variety of Products
              </label>
              <select
                id="quote-product-select"
                name="product"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={{
                  width: '100%',
                  height: '38px',
                  padding: '0 10px',
                  borderRadius: '9px',
                  border: '1px solid #D9C9B8',
                  backgroundColor: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: '#2C170A',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                {PRODUCT_OPTIONS.map((prod) => (
                  <option key={prod} value={prod}>
                    {prod}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 2: Quantity & Country Side-by-Side (2 Columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {/* 2. Quantity */}
              <div>
                <label
                  htmlFor="quote-quantity"
                  style={{
                    display: 'block',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#4A3B32',
                    marginBottom: '4px',
                  }}
                >
                  Quantity
                </label>
                <input
                  id="quote-quantity"
                  type="text"
                  name="quantity"
                  required
                  placeholder="e.g. 20 MT / 1 FCL"
                  style={{
                    width: '100%',
                    height: '38px',
                    padding: '0 10px',
                    borderRadius: '9px',
                    border: '1px solid #D9C9B8',
                    fontSize: '12px',
                    outline: 'none',
                    color: '#2C170A',
                    backgroundColor: '#ffffff',
                  }}
                />
              </div>

              {/* 3. Country */}
              <div>
                <label
                  htmlFor="quote-country"
                  style={{
                    display: 'block',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: '#4A3B32',
                    marginBottom: '4px',
                  }}
                >
                  Country
                </label>
                <input
                  id="quote-country"
                  type="text"
                  name="country"
                  required
                  placeholder="e.g. UAE / India"
                  style={{
                    width: '100%',
                    height: '38px',
                    padding: '0 10px',
                    borderRadius: '9px',
                    border: '1px solid #D9C9B8',
                    fontSize: '12px',
                    outline: 'none',
                    color: '#2C170A',
                    backgroundColor: '#ffffff',
                  }}
                />
              </div>
            </div>

            {/* 4. Name / Company */}
            <div>
              <label
                htmlFor="quote-buyer-name"
                style={{
                  display: 'block',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#4A3B32',
                  marginBottom: '4px',
                }}
              >
                Name / Company
              </label>
              <input
                id="quote-buyer-name"
                type="text"
                name="buyerName"
                required
                placeholder="Your Name or Business Entity"
                style={{
                  width: '100%',
                  height: '38px',
                  padding: '0 10px',
                  borderRadius: '9px',
                  border: '1px solid #D9C9B8',
                  fontSize: '12px',
                  outline: 'none',
                  color: '#2C170A',
                  backgroundColor: '#ffffff',
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#5C341B',
                color: '#ffffff',
                border: 'none',
                height: '42px',
                borderRadius: '21px',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                boxShadow: '0 4px 12px rgba(92, 52, 27, 0.22)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#7A4322';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#5C341B';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: '15px' }}></i>
              <span>Submit RFQ to Export Desk</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
