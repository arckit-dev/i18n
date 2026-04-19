import { describe, expect, it } from 'vitest';
import { fromUrl } from './from-url';

const request = (path: string) => new Request(`http://localhost${path}`);

const detector = fromUrl({ supportedLngs: ['fr-FR', 'en-US', 'de'] });

describe('fromUrl', () => {
  it('should detect exact language from URL path', () => {
    expect(detector(request('/de/page'))).toBe('de');
  });

  it('should detect language with region from prefix', () => {
    expect(detector(request('/fr/page'))).toBe('fr-FR');
  });

  it('should return null when path has no language segment', () => {
    expect(detector(request('/'))).toBeNull();
  });

  it('should return null when language is not supported', () => {
    expect(detector(request('/es/page'))).toBeNull();
  });
});
