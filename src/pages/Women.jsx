import React from 'react';
import CollectionPage from './CollectionPage';

export default function Women({ products = [], onNavigate }) {
  return (
    <CollectionPage
      category="women"
      products={products}
      onNavigate={onNavigate}
    />
  );
}
