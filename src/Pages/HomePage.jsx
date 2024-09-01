import React from 'react';

const HomePage = () => {
	return (
		<div>
			{/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Online Book Library
          </h1>
          <p className="text-gray-600 mb-8">
            Discover a world of books at your fingertips.
          </p>
          <a
            href="/books"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
          >
            Browse Books
          </a>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Book Card */}

          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">Book Title</h3>
            <p className="text-gray-600">by Author Name</p>
            <a
              href="/book/1"
              className="text-blue-500 hover:text-blue-600 mt-2 inline-block"
            >
              View Details
            </a>
          </div>

          
          {/* Repeat similar cards for other featured books */}
        </div>
      </section>
		</div>
	)
}

export default HomePage;