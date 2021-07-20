import React, { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import postsData from './mock-posts-data.json'

import ThemeContext from './ThemeContext'

function App() {

  const postCategory = useState('business')
  return (
    <ThemeContext.Provider value={postCategory}>
      <div className="App">
        <Header />
        <Main postsData={postsData}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
