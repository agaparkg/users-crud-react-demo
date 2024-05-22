import { Button } from "react-bootstrap";

function Search() {
  return (
    <form className="row">
      <div className="col-auto">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <div className="col-auto">
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default Search;
