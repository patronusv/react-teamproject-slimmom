import React from 'react';
import Loader from 'react-loader-spinner';
import LoaderSpinnerStyled from './LoaderStyled';

const LoaderSpinner = () => {
  return (
    <LoaderSpinnerStyled>
      <div className="loader">
        <Loader type="ThreeDots" color="#FC842D" height={80} width={80} />
      </div>
    </LoaderSpinnerStyled>
  );
};

export default LoaderSpinner;
