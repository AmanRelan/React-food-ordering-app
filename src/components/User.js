import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="user-card p-4 m-4 bg-gray-200 rounded-lg">
      <h1>Count: {count}</h1>
      {/* <button onClick={incrementCount}>Increment Count</button> */}
      <h2>Name: {props.name}</h2>
      <h3>Location:{props.location}</h3>
      <h4>Contact: linkedin.com/aman-relan</h4>
    </div>
  );
};
export default User;
