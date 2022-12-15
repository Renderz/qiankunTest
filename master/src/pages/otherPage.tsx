import { loadMicroApp, MicroApp } from "qiankun";
import { useRef } from "react";

const OtherPage = () => {
  const slaveRef1 = useRef<MicroApp>();
  const slaveRef2 = useRef<MicroApp>();

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  const handleOpenSlave1 = () => {
    slaveRef1.current = loadMicroApp({
      name: "app",
      entry: "http://127.0.0.1:5555",
      container: containerRef1.current!,
      props: {
        a: 1,
        b: 2,
      },
    });
    console.log("mount slave1");
  };

  const handleOpenSlave2 = () => {
    slaveRef2.current = loadMicroApp({
      name: "app",
      entry: "http://127.0.0.1:5556",
      container: containerRef2.current!,
      props: {
        a: 3,
        b: 4,
      },
    });
    console.log("mount slave2");
  };

  const handleCloseSlave1 = () => {
    if (slaveRef1.current) {
      slaveRef1.current.unmount();
      console.log("unmount slave1");
    }
  };

  const handleCloseSlave2 = () => {
    if (slaveRef2.current) {
      slaveRef2.current.unmount();
      console.log("unmount slave2");
    }
  };

  return (
    <div>
      Other Page
      <div>
        <button onClick={handleOpenSlave1}>open slave1</button>
        <button onClick={handleOpenSlave2}>open slave2</button>
        <button onClick={handleCloseSlave1}>close slave1</button>
        <button onClick={handleCloseSlave2}>close slave2</button>
      </div>
      <div style={{ display: "flex" }}>
        <div ref={containerRef1} style={{ flex: 1 }}></div>
        <div ref={containerRef2} style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default OtherPage;
