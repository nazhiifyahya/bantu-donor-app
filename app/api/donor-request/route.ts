import { NextResponse } from 'next/server';
import DonorRequest from '../../../lib/models/BloodRequest'; // Adjust path to your Sequelize model

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate data here if needed

    // Create a new record in the database
    const newRequest = await DonorRequest.create({
      patientName: data.patientName,
      bloodType: "${data.bloodType.value} ${data.rhesus.value}",
      quantity: data.quantity,
      hospitalName: data.hospitalName,
      email: data.email,
      contactNumber: data.contactNumber,
      location: {
        type: 'Point',
        coordinates: [parseFloat(data.location.longitude), parseFloat(data.location.latitude)],
      },
    });

    return NextResponse.json({ message: 'Request saved'}, { status: 201 });
  } catch (error) {
    console.error('Error saving donor request:', error);
    return NextResponse.json({ error: 'Failed to save request' }, { status: 500 });
  }
}