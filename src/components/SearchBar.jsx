/* eslint-disable react/prop-types */

export default function SearchBar(props) {
  const { filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } = props;

  return (
    <form>
        <input type="text" value={filterText} placeholder="Search..." onChange={e => onFilterTextChange(e.target.value)} />
        <br />
        <label>
            <input type="checkbox" checked={inStockOnly} onChange={e => onInStockOnlyChange(e.target.checked)} />
            {" "}
            Only show products in stock
        </label>
    </form>
  )
}
