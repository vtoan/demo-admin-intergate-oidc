import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SelectCategory from "../../components/SelectCategory";

export default function EditProduct({ itemEdit, onSave, onCancel }) {
  console.log(itemEdit);
  const itemId = itemEdit?.Id ?? 0;
  const [inputName, setInputName] = React.useState("");
  const [inputPrice, setInputPrice] = React.useState("");
  const [inputDescription, setInputDescription] = React.useState("");
  const [inputCate, setInputCate] = React.useState(0);
  const [inputImage, setInputImage] = React.useState(null);

  React.useEffect(() => {
    setInputName(itemEdit?.Name);
    setInputCate(itemEdit?.CategoryId);
    setInputPrice(itemEdit?.Price);
    setInputDescription(itemEdit?.ProductDescription);
    console.log("Set initial value");
  }, [itemEdit]);

  //handle form
  const handleChangeName = (e) => setInputName(e.target.value);
  const handleChangePrice = (e) => setInputPrice(e.target.value);
  const handleChangeDescription = (e) => setInputDescription(e.target.value);
  const handleChangeCate = (val) => setInputCate(val);
  const handleChangeImage = (val) => setInputImage(val);

  //handle
  const handleSubmit = () => {
    if (inputName && inputPrice && inputCate)
      onSave &&
        onSave({
          Id: itemId,
          Name: inputName,
          Price: inputPrice,
          ProductDescription: inputDescription,
          CategoryId: inputCate,
          Image: inputImage,
        });
    else window.alert("Please fill the form below");
  };
  //
  return (
    <Form>
      <FormGroup>
        <Label for="Name">Product Name</Label>
        <Input
          invalid={!inputName}
          type="text"
          name="Name"
          onChange={handleChangeName}
          value={inputName}
        />
      </FormGroup>

      <FormGroup>
        <Label for="Price">Product Price</Label>
        <Input
          invalid={!inputPrice}
          type="text"
          name="Price"
          onChange={handleChangePrice}
          value={inputPrice}
        />
      </FormGroup>

      <FormGroup>
        <Label for="Type">Select Category</Label>
        <SelectCategory
          placeholder="Choose category"
          initalValue={inputCate}
          onChange={handleChangeCate}
        />
      </FormGroup>

      <FormGroup>
        <Label for="ProductDescription">Product Description</Label>
        <Input
          type="textarea"
          name="ProductDescription"
          onChange={handleChangeDescription}
          value={inputDescription}
        />
      </FormGroup>

      <FormGroup>
        <Label for="Image">Product Image</Label>
        <Input
          type="file"
          name="Image"
          onChange={handleChangeImage}
          value={inputImage}
        />
      </FormGroup>

      <div className="pt-3">
        <Button color="primary" className="mr-3" onClick={handleSubmit}>
          Save
        </Button>
        <Button color="danger" onClick={() => onCancel && onCancel()}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}
