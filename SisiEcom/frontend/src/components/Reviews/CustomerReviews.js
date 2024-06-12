import React, { useState } from 'react';

const CustomerReviews = () => {
  // État pour les avis
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Sarah Doe',
      comment: 'Great product! I love it.',
      rating: 5, // Note sur 5 étoiles
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Excellent service and fast delivery.',
      rating: 4, // Note sur 5 étoiles
    },
    {
      id: 3,
      name: 'Alice Johnson',
      comment: 'Highly recommended! Will definitely buy again.',
      rating: 5, // Note sur 5 étoiles
    },
  ]);

  // État pour le nouveau avis
  const [newReview, setNewReview] = useState({
    name: '',
    comment: '',
    rating: 0,
  });

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      setReviews([
        ...reviews,
        { ...newReview, id: reviews.length + 1 },
      ]);
      setNewReview({ name: '', comment: '', rating: 0 }); // Réinitialiser le formulaire
    }
  };

  // Fonction pour générer des étoiles en fonction de la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    }
    return stars;
  };

  // Fonction pour mettre à jour l'état du nouveau avis
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Fonction pour supprimer un avis
  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <section className="bg-pink-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {/* Mapping through reviews */}
              {reviews.map(review => (
                <div key={review.id} className="bg-white p-4 shadow-md rounded-lg relative">
                  <p className="font-semibold mb-2">{review.name}</p>
                  {/* Appeler la fonction renderStars pour afficher les étoiles */}
                  <div className="flex mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Add a Review</h3>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Comment</label>
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
