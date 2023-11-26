import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchInput, setSearchInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState('');

  const handleSearchInputChange = (input) => {
    setSearchInput(input);
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleCheckBox = (isChecked) => {
    setCheckboxInput(isChecked);
    const filteredProducts = isChecked
      ? jsonData.filter((product) => product.inStock)
      : jsonData;
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
        onCheckBox={handleCheckBox}
        checkboxInput={checkboxInput}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
