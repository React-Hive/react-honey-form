import type { Nullable } from './generic.types';

type DateFrom = Nullable<Date | undefined>;
type DateTo = Nullable<Date | undefined>;

export type CustomDateRangeForm<DateFromKey extends string, DateToKey extends string> = {
  [K in DateFromKey]: K extends DateToKey ? never : DateFrom;
} & {
  [K in DateToKey]: K extends DateFromKey ? never : DateTo;
};
