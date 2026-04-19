import { describe, expect, it } from 'vitest';
import { detectLng } from './detect-lng';

const request = (headers: Record<string, string> = {}) => new Request('http://localhost', { headers });

describe('detectLng', () => {
  it('should return result from first matching detector', async () => {
    const result = await detectLng(request(), {
      detectors: [() => 'fr-FR'],
      fallbackLng: 'en-US'
    });

    expect(result).toBe('fr-FR');
  });

  it('should skip detectors that return null', async () => {
    const result = await detectLng(request(), {
      detectors: [() => null, () => 'de-DE'],
      fallbackLng: 'en-US'
    });

    expect(result).toBe('de-DE');
  });

  it('should return fallback when no detector matches', async () => {
    const result = await detectLng(request(), {
      detectors: [() => null],
      fallbackLng: 'en-US'
    });

    expect(result).toBe('en-US');
  });

  it('should return fallback when detectors array is empty', async () => {
    const result = await detectLng(request(), {
      detectors: [],
      fallbackLng: 'en-US'
    });

    expect(result).toBe('en-US');
  });
});
