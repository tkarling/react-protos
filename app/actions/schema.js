import { Schema, arrayOf } from 'normalizr';

export const rItem = new Schema('rItems');
export const arrayOfRItems = arrayOf(rItem);