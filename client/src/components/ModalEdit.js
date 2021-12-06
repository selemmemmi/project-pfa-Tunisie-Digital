import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@restart/ui/esm/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateUser } from "../JS/actions/user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: " space-around",
};

export default function ModalEdit({ user }) {
  const [open, setOpen] = React.useState(false);
  const [newUser, setNewUser] = React.useState({ product: user.product });

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => setNewUser({ product: e.target.value });

  return (
    <div style={{ display: "inline-block", marginLeft: "20px" }}>
      <Button className="btn-modif" onClick={handleOpen}>
        modifie
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            style={{ width: "160%" }}
            id="outlined-number"
            label="product"
            name="product"
            type="number"
            value={newUser.product}
            onChange={handleChange}
          />
          <Button
            className="btn-modif"
            onClick={() => {
              dispatch(updateUser(user._id, newUser));
              handleClose();
            }}
          >
            modifie
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
