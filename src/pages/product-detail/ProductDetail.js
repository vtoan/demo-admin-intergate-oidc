import React from "react";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router";
import SingleLayout from "../../containers/SingleLayout";
import EditProduct from "./EditProduct";

import _proSer from "../../services/productService";

export default function ProductDetail() {
  let { id } = useParams();
  const history = useHistory();
  const [itemEdit, setEdit] = React.useState(null);

  React.useEffect(() => {
    if (id > 0)
      _proSer.get(id).then((resp) => {
        console.log(resp);
        setEdit(resp.data);
      });
  }, [id]);

  const handleDelelte = () => {
    let result = window.confirm("Delete this item?");
    if (result) {
      _proSer.delete(id).then((resp) => {
        history.goBack();
      });
    }
  };

  const handleSave = (data) => {
    let result = window.confirm("Save the changed items?");
    if (result) {
      if (!data.Id) {
        _proSer.create(data).then(() => {
          history.goBack();
        });
      } else {
        _proSer.edit(data.Id, data).then(() => {
          history.goBack();
        });
      }
    }
  };

  return (
    <SingleLayout
      title="Product Detail"
      actions={
        <Button color="danger" children="Delete" onClick={handleDelelte} />
      }
      content={<EditProduct itemEdit={itemEdit} onSave={handleSave} />}
    ></SingleLayout>
  );
}
