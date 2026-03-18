import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "transparent",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <svg
          width="448"
          height="320"
          viewBox="0 0 448 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "flex",
            overflow: "visible",
          }}
        >
          <path
            d="M154 84L40 160L154 236"
            stroke="#FFFFFF"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M294 84L408 160L294 236"
            stroke="#FFFFFF"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M252 44L196 276"
            stroke="#FFFFFF"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
