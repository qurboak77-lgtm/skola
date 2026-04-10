import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNyProdukt = () => {
  // Ett state-objekt för hela formuläret
  const [formData, setFormData] = useState({
    namn: '',
    beskrivning: '',
    image: '',
    sku: '',
    pris: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Uppdaterar rätt fält i formData när användaren skriver
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Skickar formulärdata till backend med ett POST-anrop (Fetch API)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    fetch('http://localhost:3000/api/produkter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((d) => { throw new Error(d.error); });
        return res.json();
      })
      .then(() => {
        // Produkten sparades — navigera tillbaka till produktlistan
        navigate('/admin');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <h2>Ny produkt</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
        <div>
          <label><strong>Namn</strong></label><br />
          <input
            type="text"
            name="namn"
            value={formData.namn}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
        </div>

        <div>
          <label><strong>Beskrivning</strong></label><br />
          <textarea
            name="beskrivning"
            value={formData.beskrivning}
            onChange={handleChange}
            rows={5}
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
        </div>

        <div>
          <label><strong>Bild</strong></label><br />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="URL till bild."
            style={{ width: '100%', padding: '6px', marginTop: '4px' }}
          />
        </div>

        <div>
          <label><strong>SKU</strong></label><br />
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            style={{ width: '160px', padding: '6px', marginTop: '4px' }}
          />
        </div>

        <div>   
          <label><strong>Pris</strong></label><br />
          <input
            type="number"
            name="pris"
            value={formData.pris}
            onChange={handleChange}
            required
            style={{ width: '160px', padding: '6px', marginTop: '4px' }}
          />
        </div>

        <div>
          <button type="submit">Lägg till</button>
        </div>
      </form>
    </div>
  );
};

export default AdminNyProdukt;

