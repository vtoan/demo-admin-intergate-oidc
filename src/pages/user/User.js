import React from "react";
import { Table } from "reactstrap";
import SingleLayout from "../../containers/SingleLayout";

import _userSer from "../../services/userService";

export default function User(props) {
  const [listUsers, setUsers] = React.useState([]);

  React.useEffect(() => {
    _userSer.getList().then(({ data }) => setUsers(data));
  }, []);

  return (
    <SingleLayout
      title="List User"
      content={
        <>
          {(!listUsers || listUsers.length < 1) && (
            <p className="py-5 text-center text-uppercase text-secondary">
              No data
            </p>
          )}
          {listUsers.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {listUsers.map((item, index) => (
                  <tr key={+index}>
                    <th>{item.Id}</th>
                    <td>{item.CustomerName ?? "unknown"}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone ?? "no"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      }
    />
  );
}
