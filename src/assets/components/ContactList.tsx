import React, { useState, useEffect } from "react";
import { Pagination, Card, Box } from "@mui/material";
import { type User } from "../types";
import ContactCard from "./ContactCard";
import { getUsers } from "../api";
import DetailModal from "./DetailModal";

const ContactList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const fetchUsers = async () => {
    try {
      const users = await getUsers(page, 12);
      if (users?.length) setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h1 style={{ textAlign: "left", marginLeft: 40, color: "#005b96" }}>
        Contactos
      </h1>
      <DetailModal
        showModal={showDetail}
        user={user}
        handleClose={() => setShowDetail(false)}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {users &&
          users.map((user) => (
            <ContactCard
              key={user?.login?.uuid}
              user={user}
              setShowDetail={setShowDetail}
              setUser={setUser}
            />
          ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </div>
    </div>
  );
};

export default ContactList;
