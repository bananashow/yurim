export const QUERY_KEY = {
  GET_INQUIRY_LIST: 'getgetInquiryList',
  GET_CAROUSEL_DATA: 'getCarouselData',
  GET_HOME_INTERIOR: 'getHomeInterior',
  GET_STORE_INTERIOR: 'getStoreInterior',
  GET_POINT_INTERIOR: 'getPointInterior',
  GET_POST_DETAIL: 'getPostDetail',
} as const;

export const TABLE = {
  CONTACT: 'contact',
  CAROUSEL: 'carousel',
  HOME_INTERIOR: 'home_interior',
  STORE_INTERIOR: 'store_interior',
  POINT_INTERIOR: 'point_interior',
} as const;

export const BUCKET = {
  YURIM: 'yurim',
} as const;

export const STORAGE = {
  CAROUSEL: 'carousel',
} as const;
