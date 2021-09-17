export interface Response {
  msg: string;
  data?: any;
}

export interface Structure {
  params?: any;
  body?: any;
  res?: Response;
  errorRes?: Response;
}

export type Params<P extends Structure> = P["params"];
export type BackendParams<P> = Partial<Params<P>>;

export type Body<P extends Structure> = P["body"];
export type BackendBody<P> = Partial<Body<P>>;

export type ErrorRes<P extends Structure> = P["errorRes"];

export type Res<P extends Structure> = P["res"];
