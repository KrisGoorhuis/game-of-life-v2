import React, { useEffect } from 'react';
import './App.css';
import { Provider, connect } from 'react-redux'

import store from './redux/store.js'
import Header from 'components/header/header.js'
import Board from 'components/board/board.js'
import Controls from 'components/controls/controls.js'
import Footer from 'components/footer/footer.js'


function App(props) {

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <main>
          <div id="main_subcontainer">
            <Board />
            <Controls />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}

export default App
