import React from 'react'; /* STEP 0 */
import { useState } from 'react';

export default function Dondurucu() {
  /* ADIM 1 */
  const [döndürücüAçık, setDöndürücüAçık] = useState(true);
  const toggleDondurucu = () => {
    /* ADIM 4 */
    setDöndürücüAçık(!döndürücüAçık);
  };

  return (
    <div className="widget-spinner container">
      <h2>Döndürücü</h2>
      {
        döndürücüAçık && (
          <div id="döndürücü" className="spinner">
            --+--
          </div>
        )
        /* ADIM 2 */
      }
      <button id="toggleDondurucu" onClick={toggleDondurucu}>
        {/* STEP 3 */ döndürücüAçık ? 'Gizle' : 'Göster'}
      </button>
    </div>
  );
}
