/* eslint-disable react/prop-types */
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable(props) {
  const { products } = props;
  
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
