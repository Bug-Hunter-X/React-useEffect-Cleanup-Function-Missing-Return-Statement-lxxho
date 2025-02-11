```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://api.example.com/data', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setCount(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      });

    return () => {
      controller.abort(); // Clean up the fetch request
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>Count: {count}</div>
  );
}
```