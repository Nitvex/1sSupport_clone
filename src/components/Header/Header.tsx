import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OCSTabs from "./OCSTabs";
import OCSTab from "./OCSTab";

import "./style.css";

import { pagesConfig } from "utils/pagesConfig";

const mapStateToProps = (state: any) => {
  return {
    roleType: state.signIn.userData.roleType
  };
};
const mapDispatchToProps = () => {};

function Header(props: any) {
  const pages = pagesConfig[props.roleType];
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const change = (link: string) => props.history.push(link);
  return (
    <header className="header">
      <OCSTabs value={value} onChange={handleChange} centered>
        {pages.map(page => {
          return (
            <OCSTab
              label={page.caption}
              key={page.link}
              className="tab"
              onClick={change.bind(null, page.link)}
            />
          );
        })}
      </OCSTabs>
    </header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
