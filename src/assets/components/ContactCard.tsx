import { type User } from "../types";
import { Card, CardContent, CardMedia, Button } from "@mui/material";

interface Props {
  user: User;
  setShowDetail: (show: boolean) => void;
  setUser: (user: User) => void;
}

const ContactCard: React.FC<Props> = ({ user, setShowDetail, setUser }) => {
  const handleShowDetail = (user: User) => {
    setUser(user);
    setShowDetail(true);
  };

  return (
    <>
      <div style={{ width: "25%", margin: 10 }}>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia sx={{ height: 160 }} image={user?.picture?.large} />
          <CardContent>
            <h3>{`${user?.name?.first} ${user?.name?.last}`} </h3>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => handleShowDetail(user)}
              >
                +
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactCard;
