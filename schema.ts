import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Startseite
 *
 *
 */
export interface Start extends SanityDocument {
  _type: "start";

  /**
   * Title — `string`
   *
   * Titel - nur für die Redaktion
   */
  title?: string;

  /**
   * hero — `reference`
   *
   *
   */
  hero?: SanityReference<Hero>;

  /**
   * advantage — `advantage`
   *
   *
   */
  advantage?: Advantage;
}

/**
 * Hero
 *
 *
 */
export interface Hero extends SanityDocument {
  _type: "hero";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Calltoaction — `string`
   *
   *
   */
  calltoaction?: string;

  /**
   * Main image — `image`
   *
   * wähle ein Bild aus. Wenn leer, dann wird unser Teaser video abgespielt
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Service
 *
 *
 */
export interface Service extends SanityDocument {
  _type: "service";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Beschreibungstitel — `string`
   *
   *
   */
  descriptionTitle?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Inahlt — `array`
   *
   *
   */
  body?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Price
 *
 *
 */
export interface Price extends SanityDocument {
  _type: "price";

  /**
   * Titel — `string`
   *
   *
   */
  heading?: string;

  /**
   * Ab Preis? — `boolean`
   *
   *
   */
  ab?: boolean;

  /**
   * Preis — `number`
   *
   *
   */
  price?: number;

  /**
   * Vorteile — `array`
   *
   * hier auf Listen was in dem Preis dabei ist oder andere wichtige Informationen
   */
  services?: Array<SanityKeyed<string>>;

  /**
   * Kategorien — `reference`
   *
   * bitte eine Kategorie aussuchen
   */
  categories?: SanityReference<Category>;

  /**
   * Übergeordneter Service — `reference`
   *
   * bitte übergeordneten Service aussuchen
   */
  service?: SanityReference<Service>;

  /**
   * Terminlink — `object`
   *
   *
   */
  terminlink?: {
    _type: "terminlink";
    /**
     * URL — `url`
     *
     *
     */
    href?: string;

    /**
     * Open in new tab — `boolean`
     *
     * Termine für die Leistung
     */
    blank?: boolean;
  };
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * descriptionTitle — `string`
   *
   *
   */
  descriptionTitle?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Settings
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Footer Info — `array`
   *
   * This is a block of text that will be displayed at the bottom of the page.
   */
  footer?: Array<SanityKeyed<SanityBlock>>;
}

export type Advantage = {
  _type: "advantage";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Liste der Vorteilen — `array`
   *
   *
   */
  advantages?: Array<
    SanityKeyed<{
      _type: "inline";
      /**
       * title — `string`
       *
       *
       */
      title?: string;

      /**
       * description — `string`
       *
       *
       */
      description?: string;
    }>
  >;

  /**
   * Anzahl der angezeigten vorteile — `number`
   *
   *
   */
  amount?: number;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Documents = Start | Hero | Service | Price | Category | Settings;
