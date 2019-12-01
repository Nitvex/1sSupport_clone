import React from "react";
import { connect } from "react-redux";
import { articleType } from "utils/models/searchResult";
import "./style.css";

import OCSLoader from "components/OCSLoader";
const mapStateToProps = ({ searchReducer }: any) => {
  return {
    searchResults: searchReducer.searchData,
    isLoading: searchReducer.isLoading
  };
};

const searchResults = (props: any) => {
  const hasArticlesToShow: boolean =
    props.searchResults && props.searchResults.articles;
  const noArticlesFound: boolean =
    !props.isLoading &&
    hasArticlesToShow &&
    props.searchResults.articles.length === 0;
  return (
    <div className="mt-4 flex-column">
      {props.isLoading ? (
        <OCSLoader className="search-results-loader" />
      ) : (
        hasArticlesToShow && (
          <>
            <div>Всего результатов: {props.searchResults.totalCount}</div>
            {props.searchResults.articles.map((article: articleType) => {
              return <div key={article.id}>{article.title}</div>;
            })}
          </>
        )
      )}
      {noArticlesFound && (
        <div>К сожалению, по вашему запросу ничего не найдено</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(searchResults);
