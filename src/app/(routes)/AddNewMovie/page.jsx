"use client";
import { useState } from 'react';
import axios from 'axios';

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [publishingYear, setPublishingYear] = useState('');

  const handleAddMovie = async () => {
    try {
      const response = await axios.post('/api/movies/add', { title, publishingYear });
      console.log('Movie added successfully:', response.data);
      // You can add additional logic, such as resetting form fields or updating state
    } catch (error) {
      console.error('Error adding movie:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Publishing Year:</label>
      <input type="text" value={publishingYear} onChange={(e) => setPublishingYear(e.target.value)} />
      <br />
      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
};

export default AddMovieForm;
