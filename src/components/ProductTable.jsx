import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow products={products} />
      </table>
    </div>
  );
}

export default ProductTable;
