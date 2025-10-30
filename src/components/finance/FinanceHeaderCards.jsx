import React from "react";

/** small corner icons — dummy svgs so you can replace */
const DollarGlyph = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_15_204)">
      <path d="M7.99805 1.33301V14.6631" stroke="#0092B8" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3306 3.33252H6.33179C5.7131 3.33252 5.11975 3.57829 4.68227 4.01577C4.2448 4.45325 3.99902 5.0466 3.99902 5.66528C3.99902 6.28397 4.2448 6.87732 4.68227 7.3148C5.11975 7.75227 5.7131 7.99805 6.33179 7.99805H9.66431C10.283 7.99805 10.8763 8.24382 11.3138 8.6813C11.7513 9.11878 11.9971 9.71212 11.9971 10.3308C11.9971 10.9495 11.7513 11.5428 11.3138 11.9803C10.8763 12.4178 10.283 12.6636 9.66431 12.6636H3.99902" stroke="#0092B8" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_15_204">
        <rect width="15.9961" height="15.9961" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DollarGlyph2 = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_15_178)">
<path d="M7.99805 1.33301V14.6631" stroke="#99A1AF" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3306 3.33252H6.33179C5.7131 3.33252 5.11975 3.57829 4.68227 4.01577C4.2448 4.45325 3.99902 5.0466 3.99902 5.66528C3.99902 6.28397 4.2448 6.87732 4.68227 7.3148C5.11975 7.75227 5.7131 7.99805 6.33179 7.99805H9.66431C10.283 7.99805 10.8763 8.24382 11.3138 8.6813C11.7513 9.11878 11.9971 9.71212 11.9971 10.3308C11.9971 10.9495 11.7513 11.5428 11.3138 11.9803C10.8763 12.4178 10.283 12.6636 9.66431 12.6636H3.99902" stroke="#99A1AF" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_15_178">
<rect width="15.9961" height="15.9961" fill="white"/>
</clipPath>
</defs>
</svg>

);

const TrendUp = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_15_189)">
      <path d="M10.6641 4.66553H14.6631V8.66455" stroke="#FF6900" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6631 4.66553L8.9978 10.3308L5.66528 6.99829L1.33301 11.3306" stroke="#FF6900" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_15_189">
        <rect width="15.9961" height="15.9961" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const NoteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_15_217)">
      <path d="M9.99756 1.33301H3.99902C3.64549 1.33301 3.30643 1.47345 3.05644 1.72344C2.80646 1.97342 2.66602 2.31248 2.66602 2.66602V13.3301C2.66602 13.6836 2.80646 14.0227 3.05644 14.2727C3.30643 14.5226 3.64549 14.6631 3.99902 14.6631H11.9971C12.3506 14.6631 12.6897 14.5226 12.9396 14.2727C13.1896 14.0227 13.3301 13.6836 13.3301 13.3301V4.66553L9.99756 1.33301Z" stroke="#F0B100" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33105 1.33301V3.99902C9.33105 4.35256 9.4715 4.69161 9.72148 4.9416C9.97147 5.19159 10.3105 5.33203 10.6641 5.33203H13.3301" stroke="#F0B100" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66504 5.99854H5.33203" stroke="#F0B100" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6641 8.66455H5.33203" stroke="#F0B100" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6641 11.3306H5.33203" stroke="#F0B100" strokeWidth="1.33301" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_15_217">
        <rect width="15.9961" height="15.9961" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/* 
--------------------------------------------
| 💡 GAP CONTROL — change this to adjust spacing between text items
--------------------------------------------
*/
const cardGap = "31.97px";

const baseCardStyle = {
  width: "278.57px",
  height: "200.37px",
  border: "1.25px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "14px",
  padding: "15.9961px 0 0 15.9961px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

/** Generic card that supports an optional subIcon before the subtext */
const Card = ({ title, value, sub, subIcon, cornerIcon, bg, subClass }) => (
  <div className="shadow-sm" style={{ ...baseCardStyle, background: bg }}>
    <div className="w-full pr-4 flex flex-col" style={{ gap: cardGap }}>
      {/* Title */}
      <div className="flex items-center justify-between pr-2">
        <p className="text-[13px] text-gray-600 font-medium">{title}</p>
        <div className="mr-3">{cornerIcon}</div>
      </div>

      {/* Value */}
      <p className="text-[28px] leading-8 font-semibold text-gray-900">{value}</p>

      {/* Subtext with optional icon */}
      {sub && (
        <p className={`text-sm flex items-center gap-1 ${subClass || "text-gray-500"}`}>
          {subIcon && <span className="inline-block">{subIcon}</span>}
          {sub}
        </p>
      )}
    </div>
  </div>
);

const SpendCard = () => (
  <div className="shadow-sm" style={{ ...baseCardStyle, background: "#CBE6ED" }}>
    <div className="w-full pr-4 flex flex-col" style={{ gap: cardGap }}>
      {/* Title */}
      <div className="flex items-center justify-between pr-2">
        <p className="text-[13px] text-gray-700 font-medium">Spend to Date</p>
        <div className="mr-3">
          <DollarGlyph />
        </div>
      </div>

      {/* Value */}
      <p className="text-[28px] leading-8 font-semibold text-gray-900">$280,000</p>

      {/* Progress and utilization */}
      <div className="flex flex-col gap-2">
        <div className="mr-4">
          <div className="h-2 rounded-full bg-gray-300 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-gray-800"
              style={{ width: "33%" }}
            />
          </div>
        </div>
        <p className="text-sm text-gray-700 pl-[2px]">32.9% utilized</p>
      </div>
    </div>
  </div>
);

/** Example tiny red trend arrow for subtext */
const SmallTrendIcon = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 10L8 6L12 10"
      stroke="#DC2626"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FinanceHeaderCards = () => {
  return (
    <div className="flex flex-wrap gap-6">
      <Card
        title="Total Budget"
        value="$850,000"
        sub="Original allocation"
        cornerIcon={<DollarGlyph2 />}
        bg="#EEEEEE"
      />

      <Card
        title="Forecast Final Cost"
        value="$999,000"
        sub="+$149,000 over"
        subIcon={<TrendUp />}  // 👈 added here
        subClass="text-red-600"
        cornerIcon={<TrendUp />}
        bg="#EDDDDE"
      />

      <SpendCard />

      <Card
        title="Variations"
        value="$45,000"
        sub="2 pending approval"
        cornerIcon={<NoteIcon />}
        bg="F6F6E4"
      />
    </div>
  );
};

export default FinanceHeaderCards;
