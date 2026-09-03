# LandingUK Agent Guidelines

## Purpose

- Build the UK-focused Errazuriz Estate campaign hub in this folder.
- Treat the existing MAX landing at `../Landing Page MAX/` as the implementation reference; do not edit that sibling project.
- Keep the user-facing campaign copy in English, even when discussing implementation notes in Spanish.

## Product Requirements

- Use `https://www.errazuriz.com/estate` as the content reference: preserve the wine section and its product information.
- Replace the Estate page header/hero with the supplied reading image treatment, while keeping the rest of the Estate storytelling coherent.
- Remove the “Find Our Wines” section and replace it with the competition form pattern used by the MAX landing at `https://vivir-a-lo-max.vercel.app/`.
- Competition message: “Bring Errazuriz to your book club! Discover Great Stories with Great Wine”.
- Prize copy must state: one case of Errazuriz Estate Reserva Sauvignon Blanc, one case of Errazuriz Estate Reserva Merlot, and a £100 Waterstones voucher for the next book-club read.
- Form fields: first name, surname, email address, required Terms & Conditions consent, and optional Errazuriz marketing-email opt-in.

## Assets And Legal Source

- Use `Recursos/CARRUSEL MOMENTO PERFECTO_25.jpg` in place of the MAX `kv_web.jpg` hero asset.
- Incorporate `Recursos/Estate_662.jpg` meaningfully in the Estate page design; do not leave it as an unused asset.
- Treat `Recursos/Errazuriz Our Story, Your Discovery TCs Final.pdf` as the authoritative competition terms source. Link the terms from the required consent control and relevant footer/legal area.
- The DOCX with the same title is an editable companion, but the final PDF controls published legal text.
- Do not invent eligibility, dates, privacy language, winner selection, or submission handling. Extract them from the PDF or make the missing dependency explicit before launch.

## Implementation Conventions

- Start by inspecting the MAX files and its form submission approach before choosing a framework or adding dependencies.
- Keep the landing deployable as a small static site unless the repository gains an established build system; avoid adding infrastructure without need.
- Preserve accessible labels, keyboard navigation, visible validation, responsive image sizing, and UK spelling/currency.
- Reuse the MAX form flow only after checking its endpoint/configuration. Never commit secrets or silently point Estate entries at an unapproved production sheet.
- When a command or toolchain is introduced, document the install, build, and test commands in the project README.

## Verification

- Test the form for required fields, invalid email, both checkbox states, terms-link access, and successful/error submission states.
- Check the hero, Estate image, wine section, and form at mobile and desktop widths; confirm images do not distort or overlap text.
- Validate that legal copy matches the authoritative PDF and that no “Find Our Wines” section remains.