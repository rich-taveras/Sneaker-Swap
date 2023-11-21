const SearchBar = ()=>{
    return(
        <form className="d-flex w-100 " role="search">
          <button className="btn btn-outline-success me-2" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
    )
}
export default SearchBar