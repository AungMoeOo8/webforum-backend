import { Send } from "express-serve-static-core";

export interface MyRequest<T> extends Express.Request {
  body: T;
}

export interface MyResponse<ResBody> extends Express.Response {
  json: Send<ResBody, this>;
}

export interface Database<T> {
  connect(): Promise<T>;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
  ownerId: string;
  forumId: string;
  createdAt: Date;
  updatedAt: Date;
}
