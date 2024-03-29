import { IUser } from '@/entities/User';

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export enum ArticleSortField {
  VIEWS = 'views',
  CREATED_AT = 'createdAt',
  TITLE = 'title',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;

}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;

}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  NEWS = 'NEWS',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  SPORT = 'SPORT',
  PRODUCTIVITY = 'PRODUCTIVITY',
  HEALTH = 'HEALTH',
}

export enum ArticleView {
  LIST = 'LIST',
  GRID = 'GRID',
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  user: IUser;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
