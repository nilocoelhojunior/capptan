// @flow

type AccessInfo = {
  country: string,
  viewability: string,
  embeddable: boolean,
  publicDomain: boolean,
  textToSpeechPermission: string,
  epub: {
    isAvailable: boolean,
    acsTokenLink: string,
  },
  pdf: {
    isAvailable: boolean,
  },
  accessViewStatus: string,
};

type SaleInfo = {
  country: string,
  saleability: string,
  isEbook: boolean,
  listPrice: {
    amount: number,
    currencyCode: string,
  },
  retailPrice: {
    amount: number,
    currencyCode: string,
  },
  buyLink: string,
};

type IndustryIdentifier = {
  type: string,
  identifier: string,
};

export type BookType = {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: {
    title: string,
    authros: Array<string>,
    publisher: string,
    publishedDate: string,
    description: string,
    industryIdentifiers: Array<IndustryIdentifier>,
    pageCount: number,
    dimensions: {
      height: string,
      width: string,
      thickness: string,
    },
    printType: string,
    mainCategory: string,
    categories: Array<string>,
    averageRating: number,
    ratingsCount: number,
    contentVersion: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string,
      small: string,
      medium: string,
      large: string,
      extraLarge: string,
    },
    language: string,
    infoLink: string,
    canonicalVolumeLink: string,
    saleInfo: SaleInfo,
    accessInfo: AccessInfo,
  },
};
