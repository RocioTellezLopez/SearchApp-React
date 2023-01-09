import SearchResultsItems from "./SearchResultsItem";

export default function SearchResults({ results, isSearching }) {
  return (
    <div style={{
        width: '100%',
        padding: '0rem 2rem 0 rem 2rem'
    }}>
      {!results?.length &&  isSearching && <p>No existe resultados</p>}
      {results?.map((value) => {
        return (
          <SearchResultsItems key={value.id} {...value} />
          // operador spread - value tiene todas las propiedades que necesita el componente (name, email ... etc)
          // <SearchResultsItems key={value.id} name={value.name} email={value.email}/>
        );
      })}
    </div>
  )
};