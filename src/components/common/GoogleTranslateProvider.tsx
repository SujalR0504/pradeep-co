"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslateProvider() {
  useEffect(() => {
    // 1. Define initialization callback
    window.googleTranslateElementInit = () => {
      try {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,ar,es,ru,fr,de,vi,id,ms,th,tl,zh-CN,zh-TW,ja,ko,tr,nl,it,pt,pl,el,fa,uk,af,sw,hi,gu,ta,bn",
              autoDisplay: false,
              layout: window.google.translate.TranslateElement?.InlineLayout?.SIMPLE,
            },
            "google_translate_element"
          );
        }
      } catch (err) {
        console.warn("Google Translate initialization notice:", err);
      }
    };

    // 2. Load Google Translate script if not already added
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // 3. Listener to apply language when dispatched from any UI component
    const handleLanguageChange = (e: CustomEvent<string>) => {
      const langCode = e.detail;
      const hostname = window.location.hostname;

      if (langCode === "en") {
        // Reset translation
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
        if (hostname.includes(".")) {
          const rootDomain = "." + hostname.split(".").slice(-2).join(".");
          document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
        }
        localStorage.removeItem("selected_language");
      } else {
        // Set translation cookie for root domain & current host
        document.cookie = `googtrans=/en/${langCode}; path=/;`;
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
        if (hostname.includes(".")) {
          const rootDomain = "." + hostname.split(".").slice(-2).join(".");
          document.cookie = `googtrans=/en/${langCode}; path=/; domain=${rootDomain};`;
        }
        localStorage.setItem("selected_language", langCode);
      }

      // Try triggering existing dropdown if present
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      } else {
        // Reload page to apply translation cookies immediately
        window.location.reload();
      }
    };

    window.addEventListener("app-change-language" as any, handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener("app-change-language" as any, handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <>
      {/* Hidden element required by Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }} aria-hidden="true" />
    </>
  );
}
