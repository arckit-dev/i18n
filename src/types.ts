/* v8 ignore file */
import type { TFunction } from 'i18next';
import type { LngDetector } from './detectors';

export type Namespace = string;

export type TypedTFunction<N extends Namespace[]> = TFunction<N, undefined>;

export type I18nConfig = {
  detectors: LngDetector[];
  fallbackLng: string;
  supportedLngs: string[];
};
