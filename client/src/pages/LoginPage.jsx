import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  current,
  getAllUsers,
  deleteUser,
  updateUser,
  logout,
} from "../JS/actions/user";
import ModalEdit from "../components/ModalEdit";
export const LoginPage = ({ history }) => {
  const users = useSelector((state) => state.userReducer.users);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {user.role === "admin" && (
        <Link to="/add">
          <Button className="btn-ajou">ajouter</Button>
        </Link>
      )}
      <Table striped bordered hover style={{ marginLeft: "60px" }}>
        <thead>
          <tr>
            <th># id</th>
            <th>societe</th>
            <th>commende</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((e) =>
              user.role === "admin" ? e._id != user._id : e._id === user._id
            )
            .map((societe) => (
              <tr>
                <td className="id">{societe._id}</td>
                <td>{societe.name}</td>
                <td className="commende">{`${societe.product}%`}</td>
                {user.role === "admin" && (
                  <td className="td-btn">
                    <ModalEdit user={societe} />
                    <Button
                      className="btn-sup"
                      onClick={() => dispatch(deleteUser(societe._id))}
                    >
                      supprime
                    </Button>{" "}
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
      <Button
        className="btn-déco"
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        déconnecter
      </Button>{" "}
    </div>
  );
};
