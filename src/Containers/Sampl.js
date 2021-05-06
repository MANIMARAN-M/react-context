import React, { useContext } from "react";
import { UserContext } from "../Store/ContextStore/UserData";

const Sampl = () => {
  const [User, setUser] = useContext(UserContext);
  return (
    <div>
      <div className="UsersFlex">
        {User.filterUser.map((data) => {
          return (
            <div>
              <div className="UserFlexChild">
                <h1>{data.name}</h1>
                <p>{data.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sampl;
