import React from "react";
import { Modal, Card, CardContent, CardMedia, Button } from "@mui/material";
import { type User } from "../types";

interface Props {
  user: User;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleClose: () => void;
}

const DetailModal: React.FC<Props> = ({ user, showModal, handleClose }) => {
  return (
    <Modal open={showModal} onClose={handleClose}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "50%",
          width: "50%",
        }}
      >
        <Card sx={{ maxWidth: "80%" }}>
          <CardMedia sx={{ height: 160 }} image={user?.picture?.large} />
          <CardContent>
            <h3>{`Nombre: ${user?.name?.first} ${user?.name?.last}`} </h3>
            <h4>{`Correo: ${user?.email}`} </h4>
            <h4>{`Teléfono: ${user?.phone}`} </h4>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                x
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
};

export default DetailModal;
