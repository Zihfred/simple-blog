import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const Header = ({ title, history }) => {
  const handleBack = () => history.push("/");

  return (
    <HeaderWrapper>
      {history && (
        <Button variant="outlined" onClick={handleBack}>
          {"Go back"}
        </Button>
      )}
      <Typography variant="h1" component="h2" align="center">
        {title}
      </Typography>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  align-items: baseline;
`;

export default Header;
