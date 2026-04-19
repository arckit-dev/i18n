import type { LngDetector } from './types';

type FromUrlOptions = {
  supportedLngs: string[];
};

export const fromUrl =
  ({ supportedLngs }: FromUrlOptions): LngDetector =>
  (request) => {
    const firstSegment = new URL(request.url).pathname.split('/')[1];
    return supportedLngs.find((lng) => lng === firstSegment || lng.startsWith(`${firstSegment}-`)) ?? null;
  };
