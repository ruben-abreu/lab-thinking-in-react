const ProductRow = ({ products }) => {
  const stock = (inStock) => {
    return inStock ? 'none' : 'red';
  };
  return (
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td className={stock(product.inStock)}>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductRow;
