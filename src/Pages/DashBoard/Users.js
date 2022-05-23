import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("users", () =>
    fetch("https://secret-island-49254.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessstoken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>email</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
