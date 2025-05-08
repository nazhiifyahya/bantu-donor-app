"use client";

import { useState, useEffect } from "react";
import MapComponent from "../components/DonorRequestsMap";

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: '',
    quantity: '',
    hospitalName: '',
    email: '',
    contactNumber: '',
    location: {
      latitude: '',
      longitude: '',
    },
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setFormData(prev => ({
          ...prev,
          location: {
            ...prev.location,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          },
        }));
      },
      err => {
        return
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/donor-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // your form data state
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit request');
      }
  
      const result = await response.json();
      alert('Request submitted successfully!');
      // Optionally reset form or update UI
    } catch (error: any) {
      console.error(error);
      alert(`Error submitting request: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="patientName" 
          value={formData.patientName} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Golongan Darah:
        <select defaultValue="Pilih Golongan Darah" name="bloodType" onChange={handleSelectChange} required>
          <option disabled={true}>Pilih Golongan Darah</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='AB'>AB</option>
          <option value='O'>O</option>
        </select>
      </label>
      <label>
        Rhesus:
        <select defaultValue="Pilih Rhesus" name="rhesus" onChange={handleSelectChange} required>
          <option disabled={true}>Pilih Rhesus</option>
          <option value='Positif'>Positif</option>
          <option value='Negatif'>Negatif</option>
        </select>
      </label>
      <br />
      <label>
        Jumlah Donor:
        <input 
          type="number" 
          name="quantity" 
          value={formData.quantity} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Rumah Sakit:
        <input 
          type="text" 
          name="hospitalName" 
          value={formData.hospitalName} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Nomor Kontak:
        <input 
          type="number" 
          name="contactNumber" 
          value={formData.contactNumber} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Lokasi:
        <input 
          type="text" 
          name="location" 
          value={formData.location.latitude + ', ' + formData.location.longitude} 
          onChange={handleChange} 
          disabled
        />
      </label>
      <br />
      <MapComponent 
          center = {[-2.5489, 118.0149]}
          zoom = {4}
          markerPosition={formData.location.latitude && formData.location.longitude ? [parseFloat(formData.location.latitude), parseFloat(formData.location.longitude)] : undefined}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}