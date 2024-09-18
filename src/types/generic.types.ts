export type Nullable<T> = T | null;

interface JSONObject {
  [key: string]: JSONValue;
}

export type JSONValue = Nullable<string | number | boolean | JSONObject | JSONValue[]>;

export type KeysWithArrayValues<T> = {
  [K in keyof T]: T[K] extends unknown[] ? K : never;
}[keyof T];
