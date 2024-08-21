/* eslint-disable react/prop-types */
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable(props) {
    const { products } = props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            );
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        );
        lastCategory = product.category;
        console.log(lastCategory);
    });

  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
  )
}
