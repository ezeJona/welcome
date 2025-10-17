import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '1rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        padding: '2.5rem',
        maxWidth: '400px',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          margin: '0 auto 1.5rem',
          backgroundColor: '#e0f7ec',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '32px', color: '#16a34a' }}>✔</span>
        </div>
        <h2 style={{
          fontSize: '1.4rem',
          color: '#111827',
          marginBottom: '1rem',
        }}>
          Tu cuenta ha sido confirmada
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#4b5563',
          lineHeight: '1.5',
        }}>
          Vuelve a la app e ingresa con tus datos.
        </p>
      </div>
    </div>
  )
}

export default App
