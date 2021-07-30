import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import clearAction from "./clearAction";

const Step3 = (props) => {
  const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(clearAction);
    const history = useHistory();

  const onSubit = (data) => {
    action(data);
    history.push("./resultFinal");
    console.log(state, action);
    action();
  };

  return (
    <form onSubmit={handleSubmit(onSubit)}>
      <h2>Clear Data</h2>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step3);