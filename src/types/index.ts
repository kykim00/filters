export interface Product {
  id: number; //상품 고유번호
  name: string; //상품명
  image: string; //상품 이미지 url
  category_id: number; //카테고리 번호
  brand: string; //브랜드명
  color: string; //색상명 ex) 'black'
  original_price: number; //정가
  sales_price: number; //판매가
  retailer_id: number;
}

export interface Products {
  products: Product[];
  total: number; //요청 조건에 맞는 전체 상품 수
}

export interface Brands
  extends Array<{
    name: string; //브랜드 이름입니다.
  }> {}

export interface Categories
  extends Array<{
    id: number; //해당 카테고리의 id입니다.
    parent_id: number; //상위 카테고리의 id입니다. null인 경우 root 카테고리입니다.
    name: string; //카테고리명입니다.
  }> {}

export interface Colors
  extends Array<{
    name: string; //브랜드 이름입니다.
  }> {}

export interface QueryParams {
  page?: number; //요청 페이지 번호, 미입력시 1페이지 기준 응답
  color?: string; //색상명
  maxPrice?: number; //최고 가격
  minPrice?: number; //최저 가격
  brand?: string; //브랜드명
  categoryId?: number; //카테고리 번호
}
