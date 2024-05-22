import React from 'react';

const CustomerReviews = () => {
  // Simuler des commentaires clients avec des notes
  const reviews = [
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
    {
        id: 3,
        name: 'Angelica Johnson',
        comment: 'Highly recommended!',
        rating: 5, // Note sur 5 étoiles
      },
  ];

  // Fonction pour générer des étoiles en fonction de la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    }
    return stars;
  };

  return (
    <section className="bg-pink-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mapping through reviews */}
          {reviews.map(review => (
            <div key={review.id} className="bg-white p-4 shadow-md rounded-lg">
              <p className="font-semibold mb-2">{review.name}</p>
              {/* Appeler la fonction renderStars pour afficher les étoiles */}
              <div className="flex mb-2">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;