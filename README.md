# @arckit/i18n

Internationalization with i18next, language detection, and React provider support.

[![npm version](https://img.shields.io/npm/v/@arckit/i18n)](https://www.npmjs.com/package/@arckit/i18n)
[![npm downloads](https://img.shields.io/npm/dm/@arckit/i18n)](https://www.npmjs.com/package/@arckit/i18n)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@arckit/i18n)](https://bundlephobia.com/package/@arckit/i18n)
[![codecov](https://codecov.io/gh/arckit-dev/i18n/graph/badge.svg)](https://codecov.io/gh/arckit-dev/i18n)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 📑 Table of Contents

- 🪧 [About](#about)
- 📦 [Installation](#installation)
- 🚀 [Usage](#usage)
- 📖 [API](#api)
- 🤗 [Contributing](#contributing)
- 📝 [License](#license)

<h2 id="about">🪧 About</h2>

Framework-agnostic i18n library built on [i18next](https://www.i18next.com/) with pluggable language detectors, resource loaders, and React provider support. Includes a Next.js subpath for server-side language detection and metadata translation.

<h2 id="installation">📦 Installation</h2>

```bash
pnpm add @arckit/i18n
```

<h2 id="usage">🚀 Usage</h2>

### Core — language detection

```typescript
import { detectLng } from '@arckit/i18n';
import { fromCookie, fromHeader } from '@arckit/i18n/detectors';

const lng = await detectLng(request, {
  detectors: [fromCookie({ cookieName: 'locale', supportedLngs }), fromHeader({ supportedLngs })],
  fallbackLng: 'en-US'
});
```

### Client — React provider

```typescript
import { I18nProvider } from '@arckit/i18n/client';

<I18nProvider locale={locale} namespaces={namespaces} resources={resources}>
  {children}
</I18nProvider>
```

### Next.js — server-side integration

```typescript
import { withI18n, withLang, metadataTranslation } from '@arckit/i18n/nextjs';

// In a layout
export default layoutBuilder()
  .use(withLang(i18n))
  .use(withI18n(i18n)('namespace'))
  .render(async ({ lang }, { children }) => <html lang={lang}>...</html>);

// Metadata from translations
export const generateMetadata = metadataTranslation(i18n)('namespace');
```

<h2 id="api">📖 API</h2>

### Core (`@arckit/i18n`)

| Export | Description |
|--------|-------------|
| `detectLng(request, options)` | Detect language from request using pluggable detectors |
| `RESOURCE_LOADER` | Injection key for the resource loader function |
| `TRANSLATION` | Injection key for the translation function |
| `withTranslation(Component)` | HOC that injects the `t` function as prop |

### Client (`@arckit/i18n/client`)

| Export | Description |
|--------|-------------|
| `I18nProvider` | React provider for client-side i18n context |

### Detectors (`@arckit/i18n/detectors`)

| Export | Description |
|--------|-------------|
| `fromCookie(options)` | Detect language from a cookie |
| `fromHeader(options)` | Detect language from Accept-Language header |
| `fromUrl(options)` | Detect language from URL path |

### Next.js (`@arckit/i18n/nextjs`)

| Export | Description |
|--------|-------------|
| `withI18n(config)(namespaces)` | Layout/page middleware for server-side i18n setup |
| `withLang(config)` | Layout middleware for language detection |
| `getLang(config)` | Get current language on the server |
| `metadataTranslation(config)(namespace)` | Generate page metadata from translation files |

<h2 id="contributing">🤗 Contributing</h2>

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<h2 id="license">📝 License</h2>

[MIT](LICENSE) &copy; Marc Gavanier
