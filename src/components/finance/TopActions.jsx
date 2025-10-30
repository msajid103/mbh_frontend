import React, { useState } from "react";

/* ==== Inline dummy SVGs (replace paths with yours anytime) ==== */
const ExcelIcon = ({ className }) => (
 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_149)">
<path d="M9.99756 1.33301H3.99902C3.64549 1.33301 3.30643 1.47345 3.05644 1.72344C2.80646 1.97342 2.66602 2.31248 2.66602 2.66602V13.3301C2.66602 13.6836 2.80646 14.0227 3.05644 14.2727C3.30643 14.5226 3.64549 14.6631 3.99902 14.6631H11.9971C12.3506 14.6631 12.6897 14.5226 12.9396 14.2727C13.1896 14.0227 13.3301 13.6836 13.3301 13.3301V4.66553L9.99756 1.33301Z" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33105 1.33301V3.99902C9.33105 4.35256 9.4715 4.69161 9.72148 4.9416C9.97147 5.19159 10.3105 5.33203 10.6641 5.33203H13.3301" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33203 8.66455H6.66504" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33105 8.66455H10.6641" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33203 11.3306H6.66504" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33105 11.3306H10.6641" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_149">
<rect width="15.9961" height="15.9961" fill="white"/>
</clipPath>
</defs>
</svg>

);

const PdfIcon = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_158)">
<path d="M9.99756 1.33301H3.99902C3.64549 1.33301 3.30643 1.47345 3.05644 1.72344C2.80646 1.97342 2.66602 2.31248 2.66602 2.66602V13.3301C2.66602 13.6836 2.80646 14.0227 3.05644 14.2727C3.30643 14.5226 3.64549 14.6631 3.99902 14.6631H11.9971C12.3506 14.6631 12.6897 14.5226 12.9396 14.2727C13.1896 14.0227 13.3301 13.6836 13.3301 13.3301V4.66553L9.99756 1.33301Z" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33105 1.33301V3.99902C9.33105 4.35256 9.4715 4.69161 9.72148 4.9416C9.97147 5.19159 10.3105 5.33203 10.6641 5.33203H13.3301" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66504 5.99854H5.33203" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6641 8.66455H5.33203" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6641 11.3306H5.33203" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_158">
<rect width="15.9961" height="15.9961" fill="white"/>
</clipPath>
</defs>
</svg>

);

const ShareIcon = ({ className }) => (
 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_166)">
<path d="M11.9971 5.33203C13.1014 5.33203 13.9966 4.43682 13.9966 3.33252C13.9966 2.22822 13.1014 1.33301 11.9971 1.33301C10.8928 1.33301 9.99756 2.22822 9.99756 3.33252C9.99756 4.43682 10.8928 5.33203 11.9971 5.33203Z" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99902 9.99756C5.10332 9.99756 5.99854 9.10235 5.99854 7.99805C5.99854 6.89375 5.10332 5.99854 3.99902 5.99854C2.89472 5.99854 1.99951 6.89375 1.99951 7.99805C1.99951 9.10235 2.89472 9.99756 3.99902 9.99756Z" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9971 14.6631C13.1014 14.6631 13.9966 13.7679 13.9966 12.6636C13.9966 11.5593 13.1014 10.6641 11.9971 10.6641C10.8928 10.6641 9.99756 11.5593 9.99756 12.6636C9.99756 13.7679 10.8928 14.6631 11.9971 14.6631Z" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.72522 9.00447L10.2774 11.6572" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2708 4.33894L5.72522 6.99163" stroke="#0A0A0A" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_166">
<rect width="15.9961" height="15.9961" fill="white"/>
</clipPath>
</defs>
</svg>

);

/* ==== Segmented toggle + icon buttons ==== */
const TopActions = () => {
  const [mode, setMode] = useState("Simple");

  const SegButton = ({ label }) => {
    const selected = mode === label;
    return (
      <button
        onClick={() => setMode(label)}
        className={`px-4 py-1.5 rounded text-sm transition
          ${selected ? "bg-white shadow-sm text-gray-900" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        aria-pressed={selected}
      >
        {label}
      </button>
    );
  };

  // unified icon button: pass icon + text; no duplicate labels
  const IconGhostBtn = ({ icon: Icon, text }) => (
    <button
      className="flex items-center gap-2 px-3 py-1.5 bg-white border rounded-lg text-sm text-gray-700 hover:bg-gray-50"
      aria-label={text}
      title={text}
    >
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex bg-gray-100 p-1 rounded-xl border">
        <SegButton label="Simple" />
        <SegButton label="Advanced" />
      </div>

      <IconGhostBtn icon={ExcelIcon} text="Excel" />
      <IconGhostBtn icon={PdfIcon} text="PDF" />
      <IconGhostBtn icon={ShareIcon} text="Share" />
    </div>
  );
};

export default TopActions;
