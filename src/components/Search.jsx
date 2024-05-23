import { useState } from "react";
import { Button } from "react-bootstrap";

function Search({ handleUserSearch, queryStr }) {
  // const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    // setQuery(e.target.value);
    handleUserSearch(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserSearch(query.trim().toLowerCase());
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-auto">
        <input
          onChange={handleQueryChange}
          value={queryStr}
          // value={query}
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
      <div className="col-auto">
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default Search;
