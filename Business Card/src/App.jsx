// App.js
import React from 'react';
import Card from './components/card';


function App() {
  return (
    <div className="App">
      <Card
        name="John Doe"
        description="Full-stack Developer passionate about creating web applications."
        twitter="https://twitter.com/johndoe"
        interests={['React', 'JavaScript', 'Node.js']}
      />
      <Card
        name="John Doe"
        description="Full-stack Developer passionate about creating web applications."
        linkedin="https://www.linkedin.com/in/johndoe/"
        twitter="https://twitter.com/johndoe"
        interests={['React', 'JavaScript', 'Node.js']}
      />
    </div>
  );
}

export default App;
