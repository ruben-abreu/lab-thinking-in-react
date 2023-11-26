function SearchBar({
  onSearchInputChange,
  searchInput,
  onCheckBox,
  checkboxInput,
}) {
  // Handle input change and invoke the callback
  const handleInputChange = (event) => {
    onSearchInputChange(event.target.value);
  };

  const handleCheckBox = (event) => {
    onCheckBox(event.target.checked);
  };

  return (
    <div>
      <div>
        <div>
          <p>Search</p>
        </div>
        <input type="text" value={searchInput} onChange={handleInputChange} />
        <div />
        <input
          type="checkbox"
          checked={checkboxInput}
          onChange={handleCheckBox}
          id="checkbox-input"
        />
        <label for="checkbox" id="checkbox-text">
          {' '}
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
