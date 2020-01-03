import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => (
  <LoadingWrapper>
    <CircularProgress />
  </LoadingWrapper>
);
const LoadingWrapper = styled.div`
  text-align: center;
`;

export default Spinner;
