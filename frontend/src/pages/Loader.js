import React from 'react';
import { useState, useEffect } from 'react';
import '../pages/Loader.css';

const delay = 10;

const Loader = () => {
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [],
  );

  return show ? (
    <div className="DataNotFound text-center mt-5">
      <h2> No Data Found </h2>
    </div>
  ) : (
    <div>
      <div className="MyLoader">
        <div className="MyMyLoaderOuter" />
        <div className="MyMyLoaderMiddle" />
        <div className="MyMyLoaderInner" />
      </div>
    </div>
  );
};

export default Loader;
