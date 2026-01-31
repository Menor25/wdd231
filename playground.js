// in storage.mjs - handles data management
export function getData() { /* implementation */ }
export total;
export default class StorageManager { /* implementation */ }

// in output.mjs - handles UI rendering
export default function renderProductCard() { }

// in app.mjs - imports and uses both modules
import { getData, total } from './storage.mjs';
import StorageManager from './storage.mjs';
import renderProductCard from './output.mjs';