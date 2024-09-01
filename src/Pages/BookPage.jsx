import React from 'react';

const BookPage = () => {
	return (
		<div className="container mx-auto py-12">
      {/* Book Details Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start mb-12">
        {/* Book Cover */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/300x450"
            alt="Book Cover"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        {/* Book Information */}
        <div className="w-full md:w-2/3 md:pl-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Title</h1>
          <h2 className="text-xl text-gray-600 mb-4">by Author Name</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum, nisi nec mollis cursus, nulla arcu pellentesque eros,
            nec mattis nunc lectus vitae metus. Duis sit amet sollicitudin elit.
          </p>
          <div className="flex items-center mb-6">
            <span className="text-xl font-bold text-gray-800 mr-2">4.5</span>
            <span className="text-yellow-400">
              {/* Example of using stars for ratings */}
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <span className="ml-2 text-gray-600">(150 reviews)</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              Add to Wishlist
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Read Sample
            </button>
          </div>
        </div>
      </section>

      {/* Book Description and Details */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Description</h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus
          tincidunt nisi, sed vestibulum nulla fermentum at. Proin ut tincidunt
          nisi. Phasellus vehicula purus ut ante auctor, nec bibendum libero
          ultrices.
        </p>
        <p className="text-gray-600 mb-4">
          Cras eu eros eget nisl ultrices vestibulum. Nulla facilisi. Sed non
          nulla vehicula, convallis nulla id, bibendum felis. Quisque vitae
          lacus nec risus auctor congue.
        </p>
        <p className="text-gray-600">
          Suspendisse potenti. Nulla facilisi. Cras in nisi ut ligula aliquet
          malesuada. Mauris vehicula, risus eget luctus pharetra, sapien nisi
          volutpat orci, vel tempor elit justo a leo.
        </p>
      </section>

      {/* Reviews Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">User Reviews</h3>
        {/* Example Review */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h4 className="text-lg font-bold text-gray-800">Reviewer Name</h4>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-2">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
            <span className="text-gray-600">4.0</span>
          </div>
          <p className="text-gray-600">
            Great book! I really enjoyed the character development and plot
            twists. Highly recommend to fans of the genre.
          </p>
        </div>
        {/* Add more reviews as needed */}

        {/* Review Form */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Write a Review</h4>
          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 mb-4"
            placeholder="Write your review here..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Submit Review
          </button>
        </div>
      </section>
    </div>
	)
}

export default BookPage;