/* eslint-disable react/prop-types */

export default function SearchBar(props) {
  const { filterText, inStockOnly } = props;

  return (
    <form>
        <input type="text" value={filterText} placeholder="Search..." />
        <br />
        <label>
            <input type="checkbox" checked={inStockOnly} />
            {" "}
            Only show products in stock
        </label>
    </form>
  )
}
