import { describe, expect, it } from 'vitest';
import { fromCookie } from './from-cookie';

const request = (cookie?: string) => new Request('http://localhost', { headers: cookie ? { Cookie: cookie } : {} });

const detector = fromCookie({ cookieName: 'locale', supportedLngs: ['fr-FR', 'en-US'] });

describe('fromCookie', () => {
  it('should detect language from cookie', () => {
    expect(detector(request('locale=fr-FR'))).toBe('fr-FR');
  });

  it('should return null when cookie is missing', () => {
    expect(detector(request())).toBeNull();
  });

  it('should return null when cookie name does not match', () => {
    expect(detector(request('lang=fr-FR'))).toBeNull();
  });

  it('should return null when language is not supported', () => {
    expect(detector(request('locale=de-DE'))).toBeNull();
  });

  it('should handle multiple cookies', () => {
    expect(detector(request('theme=dark; locale=en-US; session=abc'))).toBe('en-US');
  });
});
