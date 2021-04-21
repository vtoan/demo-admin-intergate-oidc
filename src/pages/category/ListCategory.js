import React from "react";
import { Button, Table } from "reactstrap";

export default function ListCategory({ datas, onEdit, onDelete }) {
  return (
    <>
      {(!datas || datas.length < 1) && (
        <p className="py-5 text-center text-uppercase text-secondary">
          No data
        </p>
      )}
      {datas.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => (
              <tr key={+index}>
                <th scope="row">{index + 1}</th>
                <td>{item.Name}</td>
                <td className="text-right">
                  <Button onClick={() => onEdit && onEdit(item)} color="link">
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete && onDelete(item.Id)}
                    color="link"
                    className="text-danger"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
