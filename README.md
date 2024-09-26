# nextjs-tailcast

[Tailcast Theme](https://github.com/matt765/Tailcast) for [Next.js](https://nextjs.org/)<sub>(14+ App Router)</sub>

## Tested Environment

- Debian Bookworm
- Node v20.17.0
- npm 10.8.3

## You May Be Want To Edit

### layout.tsx

`<html lang="ko">` to `<html lang="COUNTRY">`

### if you want to change main font

Remove `pretendard`:

1. remove directory `public/fonts/pretendard`
2. remove all codes related to pretendard in `layout.tsx`
3. remove pretendard fontFamily in `tailwind.config.ts`

Add [Inter](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts) or something else.

this process is same for `nacelle` font too.

### Theming

You can change `styles/theme.css`

e.g. h1, h2, h3 accent font change:

```
/* h1, h2, h3 { font-family: var(--font-nacelle); } */
h1, h2, h3 { font-family: var(--font-inter); }
```

## npm commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | `rm -rf .next && next build`                       |
| `npm run start`        | `next start`                                       |
| `npm run lint`         | `next lint`                                        |
