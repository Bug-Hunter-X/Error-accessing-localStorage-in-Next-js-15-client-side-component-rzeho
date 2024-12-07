```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the about page. {user?.name}</p>
    </div>
  );
}
```