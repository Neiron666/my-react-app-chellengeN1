import Button from "../UI/Button";
import styles from "./UserForm.module.css";
import React from "react";

const UserForm = () => {
  return (
    <div>
      <form>
        <div className={styles["new-user_form"]}>
          <div className={styles["new-user_input_form"]}>
            <label>Имя</label>
            <input type="text" />
          </div>
          <div className={styles["new-user_input_form"]}>
            <label>Имя</label>
            <input type="number" min="1" step="1" />
          </div>
          <div>
            <Button type="submit" style={{ color: "white", fontSize: "1rem" }}>
              Добавить пользователя
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
