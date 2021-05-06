import React, { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Store/ContextStore/UserData";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const HomePage = () => {
  const [User, setUser] = useContext(UserContext);
  useEffect(() => {
    setUser({
      ...User,
      isLoading: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser({
          ...User,
          user: res.data,
          filterUser: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        setUser({
          ...User,
          isLoading: false,
          errorMessage: err.message,
        });
      });
  }, []);
  return (
    <div>
      <div>
        {User.isLoading ? (
          <p>User.errorMessage</p>
        ) : (
          <div className="UsersFlex">
            {User.filterUser.map((data) => {
              return (
                <div>
                  <div className="UserFlexChild">
                    <AccountCircleIcon />
                    <h1>{data.name}</h1>
                    <p>{data.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
