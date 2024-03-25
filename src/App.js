import React from 'react';

import styles from './App.module.scss';
function App() {
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <div className={styles.parent}>
      <h1 className={styles.zac}>Registration 😌</h1>

      <div className={styles.block__input}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="Password"
          className={styles.input}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <button className={styles.button}>Click</button>
    </div>
  );
}

export default App;
