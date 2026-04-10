import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProdukter = () => {
  const [produkter, setProdukter] = useState([]);
  const [laddad, setLaddad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Hämtar produkter från backend när knappen trycks
  const laddaProdukter = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:3000/api/produkter')
      .then((res) => {
        if (!res.ok) throw new Error('Kunde inte hämta produkter');
        return res.json();
      })
      .then((data) => {
        setProdukter(data);
        setLaddad(true);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <h2 style={{ margin: 0 }}>Produkter</h2>
        <button onClick={laddaProdukter} disabled={loading}>
          {loading ? 'Laddar...' : 'Ladda produkter'}
        </button>
        <button onClick={() => navigate('/admin/ny')}>Ny produkt</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {laddad && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px', border: '1px solid #ddd' }}>Namn</th>
              <th style={{ padding: '8px 12px', border: '1px solid #ddd' }}>SKU</th>
              <th style={{ padding: '8px 12px', border: '1px solid #ddd' }}>Pris</th>
            </tr>
          </thead>
          <tbody>
            {produkter.map((p) => (
              <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px 12px', border: '1px solid #ddd' }}>{p.namn}</td>
                <td style={{ padding: '8px 12px', border: '1px solid #ddd' }}>{p.sku}</td>
                <td style={{ padding: '8px 12px', border: '1px solid #ddd' }}>{p.pris}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminProdukter;

