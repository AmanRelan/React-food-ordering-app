import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //Check if Online and return onlineStatus
  // use Event listener: onOnline event listener

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //Return Boolean Status
  return onlineStatus;
};

export default useOnlineStatus;
