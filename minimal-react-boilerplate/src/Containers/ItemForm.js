import React from "react";
import { Form, Field } from "react-final-form";
import api from "../Services/api";
import {
  TextField as TextInput,
  FormControlLabel,
  Switch,
  Button,
  Grid,
  FormControl,
} from "@material-ui/core";

function TextField(props) {
  const input = props.input;
  const label = props.label;
  return (
    <TextInput
      fullWidth
      label={label}
      value={input.value}
      onChange={(event) => input.onChange(event.target.value)}
    />
  );
}

function SwitchField(props) {
  const input = props.input;
  const label = props.label;
  return (
    <FormControlLabel
      control={
        <Switch
          checked={input.value}
          onChange={(event) => input.onChange(event.target.checked)}
        />
      }
      label={label}
    />
  );
}
const SubmitButton = (props) => <button {...props} type="submit" />;

function ItemForm() {
  const handleSubmit = (formValues) => {
    return api
      .createItem(formValues)
      .then(() => alert("Salvo com sucesso!")) // comportamento de sucesso
      .catch((err) => alert(`Erro: ${err.message}`)); //comportamento de erro
  };
  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ codigo: "", descricao: "", ativo: true }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <Field name="codigo" label="Código" component={TextField} />
            </Grid>
            <Grid item xs={2}>
              <Field name="ativo" label="Ativo" component={SwitchField} />
            </Grid>
            <Grid item xs={12}>
              <Field name="descricao" label="Descrição" component={TextField} />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Salvar
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      )}
    ></Form>
  );
}
export default ItemForm;
