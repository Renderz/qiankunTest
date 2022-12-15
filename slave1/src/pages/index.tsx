import { useNavigate } from "@umijs/max";

const Index = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test");
  };

  return (
    <div>
      Slave1 Index
      <button onClick={handleClick}>go test page</button>
    </div>
  );
};

export default Index;
