import { useLocation } from "@umijs/max";

const Test = () => {
  const location = useLocation();

  console.log(location);

  return <div>slave2 test page</div>;
};

export default Test;
