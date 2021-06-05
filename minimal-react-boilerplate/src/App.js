import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Configuration from "./Containers/Configuration";
import ItemForm from "./Containers/ItemForm";
import Items from "./Containers/ItemList";
import api from "./Services/api";
import { Box, Tab, Tabs, AppBar } from "@material-ui/core";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#478BC9",
    },
    secondary: {
      main: "#80F1D3",
    },
  },
});

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [itens, setItens] = useState([]);
  const [proximoId, setProximoId] = useState(1);

  function handleTabSelection(event, newValue) {
    setSelectedTab(newValue);
  }

  return (
    <div className="app">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleTabSelection}>
            <Tab label="Configuração" />
            <Tab label="Novo item" />
            <Tab label="Itens" />
          </Tabs>
        </AppBar>
        <Box p={3}>
          {selectedTab == 0 ? <Configuration /> : null}
          {selectedTab == 1 ? (
            <ItemForm
              itens={itens}
              setItens={setItens}
              proximoId={proximoId}
              setProximoId={setProximoId}
            />
          ) : null}
          {selectedTab == 2 ? <Items itens={itens} /> : null}
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
