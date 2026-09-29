# RTU Voice — Phase 1 (landing + authentication)

Next.js (App Router) · React · TypeScript · plain CSS.

    npm install
    npm run dev      # http://localhost:3000

Routes: `/` `/register` `/verify` `/login` `/forgot` `/verify-code` `/reset`

Mock flow (no backend): register → verify → login; login → forgot → verify-code → reset → login.
The code screens accept any 6 digits. Dashboard and later screens are intentionally not included.

Assets: `public/provided-assets/` (logo cropped from the supplied `rtu_voice_logo.png`, original and palette kept alongside).
Fonts: none were supplied, so Noto Serif (headings) and Inter (body) are loaded through `next/font/google`.
