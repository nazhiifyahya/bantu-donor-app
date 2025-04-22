'use client';

import React from 'react'

interface Applicant {
  nama: string;
  lokasi: string;
  "golongan darah": string;
  urgensi: string;
  "jumlah kantong darah": number;
} 

const DonorRequestsList = async () => {
  const res = await fetch('/permohonan_darah.json');
  const applicants: Applicant[] = await res.json();
  
  return (
    <div>
      <h2>Data Permohonan Donor</h2>
      <table cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Lokasi</th>
            <th>Golongan Darah</th>
            <th>Urgensi</th>
            <th>Jumlah Kantong Darah</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant,index) => (
            <tr key={index}>
              <td>{applicant.nama}</td>
              <td>{applicant.lokasi}</td>
              <td>{applicant['golongan darah']}</td>
              <td>{applicant.urgensi}</td>
              <td>{applicant['jumlah kantong darah']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DonorRequestsList;