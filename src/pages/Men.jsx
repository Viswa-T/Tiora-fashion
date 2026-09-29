import React from 'react';
import CollectionPage from './CollectionPage';

export default function Men({ products = [], onNavigate }) {
  return (
    <CollectionPage
      category="men"
      products={products}
      onNavigate={onNavigate}
    />
  );
}
