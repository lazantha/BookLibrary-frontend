import React from 'react';
import { useState } from 'react';
const BorrowPage = () => {

	const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

   const handleBorrow = () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }
    // Handle the borrow book logic
    console.log('Borrowing book with dates:', borrowDate, returnDate);
  };
	return (
			<div className="container mx-auto py-12">
      {/* Borrow Book Details Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum,
              nisi nec mollis cursus, nulla arcu pellentesque eros, nec mattis nunc
              lectus vitae metus.
            </p>
          </div>
        </div>
      </section>

      {/* Borrowing Form Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Borrow This Book</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Borrow Date</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg border border-gray-300"
            value={borrowDate}
            onChange={(e) => setBorrowDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Return Date</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg border border-gray-300"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label className="text-gray-700">
            I accept the <a href="#" className="text-blue-500 underline">terms and conditions</a>.
          </label>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          onClick={handleBorrow}
        >
          Confirm Borrow
        </button>
      </section>

      {/* Borrowing Terms Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Borrowing Terms</h3>
        <p className="text-gray-600 mb-4">
          Please ensure that the book is returned on or before the return date.
          A late fee will be charged for each day the book is overdue. Treat the
          book with care and avoid damage. By borrowing this book, you agree to
          the library's borrowing policies.
        </p>
        <p className="text-gray-600">
          If you have any questions about the borrowing process or terms, please
          contact our support team.
        </p>
      </section>
    </div>
		
	)
}

export default BorrowPage;