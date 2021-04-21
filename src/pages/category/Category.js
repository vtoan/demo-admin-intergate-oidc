import React from "react";
import { Button } from "reactstrap";
import SplitLayout from "../../containers/SplitLayout";
import EditCategory from "./EditCategory";
import ListCategory from "./ListCategory";

import _cateSer from "../../services/cateService";

export default function Category() {
  const [listCates, setCates] = React.useState([]);
  const [itemSelected, setSelected] = React.useState(null);

  React.useEffect(() => {
    _fetchCateData();
  }, []);

  //handle
  const _fetchCateData = () => {
    _cateSer.getList().then(({ data }) => setCates(data));
  };

  const handleCreate = () => setSelected({ Name: "", TypeProductId: 0 });
  const handleEdit = (item) => setSelected(item);
  const handleCancel = () => setSelected(null);

  const handleDelete = (itemId) => {
    let result = window.confirm("Delete this item?");
    if (result) {
      _cateSer.delete(itemId).then(() => {
        setCates(_removeViewItem(listCates, itemId));
      });
    }
  };

  const handleSave = (data) => {
    let result = window.confirm("Save the changed items?");
    if (result) {
      if (!data.Id) {
        _cateSer.create(data).then(() => {
          _fetchCateData();
        });
      } else {
        _cateSer.edit(data.Id, data).then(() => {
          _fetchCateData();
        });
      }
      setSelected(null);
    }
  };

  //update view
  const _removeViewItem = (lists, itemIdDel) =>
    lists.filter((item) => item.Id !== Number(itemIdDel));
  //
  return (
    <SplitLayout
      title="Category"
      actions={
        <Button
          color="primary"
          children="New Category"
          onClick={() => handleCreate()}
        />
      }
      right={
        <ListCategory
          datas={listCates}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      }
      left={
        <EditCategory
          itemEdit={itemSelected}
          onCancel={handleCancel}
          onSave={handleSave}
        />
      }
    ></SplitLayout>
  );
}
