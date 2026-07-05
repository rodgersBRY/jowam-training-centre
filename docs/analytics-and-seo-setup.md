# Analytics & SEO setup — Jowam Coffee Training Centre

Everything below is wired in code already. You just supply values and complete
the external steps.

---

## 1. Umami analytics

### 1a. Get an instance

- **Fastest:** Umami Cloud — sign up at https://cloud.umami.is, click **+ Add website**,
  enter the domain (`jowamtrainingcentre.co.ke`). It gives you a **Website ID** (a UUID)
  and the script URL `https://cloud.umami.is/script.js`.
- **Self-host (free):** deploy Umami (Docker/Vercel/Railway) against a Postgres/MySQL DB,
  then add the website in the dashboard. Script URL becomes `https://<your-host>/script.js`.

### 1b. Plug it in

Add to `.env.local` (and to the host's env vars in production):

```
NEXT_PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Leaving them blank disables analytics entirely (no script loads). The loader lives in
`components/analytics/Umami.tsx` and is mounted in `app/layout.tsx`.

### 1c. What's already tracked (custom events)

Umami auto-tracks **page views** (including client route changes). On top of that, these
conversion events fire automatically — names are defined once in `lib/utils/analytics.ts`:

| Event | Fires when | Extra data |
|---|---|---|
| `whatsapp-click` | sticky WhatsApp button tapped | `source`, `label` |
| `enroll-click` | "Enroll" tapped on course hero or pricing block | `course`, `format`, `source` |
| `course-format-toggle` | In-person / Online toggle switched | `course`, `format` |
| `phone-call-click` | a phone number tapped on Contact | — |
| `contact-submit` | contact message form sent successfully | — |
| `registration-submit` | enrollment form submitted successfully | `course`, `format` |

### 1d. Reading the dashboard for real insight

- **Overview** → traffic trend + top referrers. Watch which of **Instagram / Facebook /
  TikTok / Google** actually drives visits (the whole site is built for those two channels).
- **Events** (left nav) → this is your funnel. The story to read each week:
  `page view (course page)` → `course-format-toggle` → `enroll-click` → `registration-submit`.
  Big drop-offs tell you where prospects stall.
- **`enroll-click` vs `registration-submit`** → how many start vs finish the form. A wide
  gap means the registration form needs simplifying.
- **Event data breakdown** → filter `enroll-click` by `course` to see which course sells,
  and by `format` to see online vs in-person demand (informs the online pricing you still
  need to finalise).
- **`whatsapp-click` + `phone-call-click`** → these are your "talk to us now" conversions;
  count them alongside form submits when judging what's working.
- Set up a **Report → Funnel** (Umami Cloud) with steps
  `/courses/*` → `enroll-click` → `registration-submit` for a single conversion-rate number.
- **UTM tags:** when posting links on socials, add `?utm_source=instagram&utm_campaign=aug-intake`
  etc. Umami reads UTM params automatically, so you'll see exactly which post converts.

---

## 2. Google Business Profile (GBP)

Critical for a local CBD business — this is what shows up in Google Maps and the local pack.

1. Go to https://business.google.com → **Manage now** → search "Jowam Coffee Training
   Centre". If it exists (unverified), claim it; otherwise **Add your business**.
2. **Category:** primary = *Training centre* (or *Coffee shop*/*Vocational school* if a
   better fit); add secondary categories like *Barista school*.
3. **NAP — must match the website footer exactly** (this consistency is a ranking factor):
   - Name: `Jowam Coffee Training Centre`
   - Address: `Pension Towers, 4th Floor, Loita Street, Nairobi`
   - Phone: `+254 722 938 905`
4. **Verify** — Google will offer video/postcard/phone verification. Complete it; you can't
   appear on Maps until verified.
5. Fill everything: hours (Mon–Fri 8–5, Sat 9–1, Sun closed — matches the site), website URL,
   a short description using "barista training" / "coffee roasting" keywords, and **real
   photos** (facility, classes, roaster — reuse the gallery shots).
6. Add **Services** = your three courses, and post monthly **"Updates"** announcing each
   intake (mirrors the site's "Next intake" pill).
7. **Reviews:** after each cohort graduates, send them your GBP review link. Steady monthly
   review velocity is the single biggest local-ranking lever.

---

## 3. Google Search Console (get all pages indexed)

The site already ships `sitemap.xml`, `robots.txt`, canonical tags, and per-page metadata,
so indexing is mostly a matter of registering and submitting.

1. Go to https://search.google.com/search-console → **Add property**.
2. Choose **Domain** property (`jowamtrainingcentre.co.ke`) if you can add a DNS TXT record
   at your registrar — it covers http/https and all subdomains. Otherwise choose **URL
   prefix** (`https://jowamtrainingcentre.co.ke`).
3. **Verify ownership.** Easiest for this codebase is the **HTML tag** method:
   - Google shows a tag like `<meta name="google-site-verification" content="ABC123..." />`.
   - Copy the `content` value into env: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ABC123...`
     (already wired in `app/layout.tsx`), redeploy, then click **Verify**.
   - (Domain property instead needs the DNS TXT record Google provides — no code change.)
4. **Submit the sitemap:** Search Console → **Sitemaps** → enter `sitemap.xml` → Submit.
   It lists the homepage, all course pages, blog posts, and the static pages.
5. **Speed up indexing:** use **URL Inspection** on the homepage and each course page →
   **Request indexing**. Do the key pages manually; the rest get picked up via the sitemap.
6. **Confirm over the next 1–2 weeks:** **Pages** (Indexing) report should show your URLs as
   *Indexed*. Fix anything under "Not indexed" (usually just "Discovered – not yet crawled",
   which resolves itself).
7. **Rich results:** run the course and FAQ pages through
   https://search.google.com/test/rich-results — the site emits `EducationalOrganization`,
   `Course` (with price offers + online/onsite instances), and `FAQPage` schema, so they
   should validate.
8. **Link GBP + Search Console + Umami** mentally as your loop: GBP brings local discovery,
   Search Console shows what you rank for, Umami shows what those visitors do on-site.

### Before launch — don't forget
- Set the real production origin in `lib/data/site.ts` (`url`) so canonical/sitemap URLs and
  `metadataBase` are correct.
- Replace the two **placeholder online prices** in `lib/data/courses.ts`.
- Add `google-site-verification` and the Umami env vars to the **production** environment,
  not just `.env.local`.
