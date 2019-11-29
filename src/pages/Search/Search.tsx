import React, { SyntheticEvent, useState } from "react";
import { connect } from "react-redux";
import "./style.css";
import { TextField } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { search } from "store/actions/search";

import OCSButton from "components/OCSButton";
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    search: (query: string, offset = 0) => dispatch(search(query, offset))
  };
};

const Search = (props: any) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchValueChange = (event: SyntheticEvent): void => {
    setSearchValue((event.target as HTMLInputElement).value);
  };

  const onSubmit = (event: SyntheticEvent): any => {
    event.preventDefault();
    props.search(searchValue);
    console.log(searchValue);
  };

  return (
    <div className="search-padding">
      <h1>Введите ключевые слова, описывающие проблему</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <TextField
          placeholder="Поиск"
          className="search-field"
          onChange={onSearchValueChange}
        />
        <OCSButton type="submit">
          <SearchIcon />
        </OCSButton>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
