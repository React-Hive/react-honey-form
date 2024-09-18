import type { ChildHoneyFormBaseForm } from './common.types';

/**
 * Utility type that extracts an array of child forms from a given field value.
 */
export type HoneyFormExtractChildForms<FieldValue> = FieldValue extends (infer ChildForm extends
  ChildHoneyFormBaseForm)[]
  ? ChildForm[]
  : never;

/**
 * Utility type that extracts a single child form from a given field value.
 */
export type HoneyFormExtractChildForm<FieldValue> = FieldValue extends (infer ChildForm extends
  ChildHoneyFormBaseForm)[]
  ? ChildForm
  : never;
