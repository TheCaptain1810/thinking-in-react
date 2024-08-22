/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable(props) {
  const { products } = props;
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(true);
  
  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  )
}
