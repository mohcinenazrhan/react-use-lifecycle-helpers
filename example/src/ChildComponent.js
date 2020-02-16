import React from "react";
import useLifecycleMethods from 'react-use-lifecycle-helpers'

const ChildComponent = () => {
  const { useWillUnmount } = useLifecycleMethods();

  useWillUnmount(() => {
    console.log("useWillUnmount: ChildComponent");
  });

  return <div>ChildComponent Content</div>;
};

export default ChildComponent;
