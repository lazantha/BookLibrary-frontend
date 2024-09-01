import React from 'react';
import { useState } from 'react';

const ProfilePage = () => {

	 const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    borrowedBooks: [
      { id: 1, title: 'The Great Gatsby', returnDate: '2024-09-15' },
      { id: 2, title: '1984', returnDate: '2024-10-01' },
    ],
    wishlist: [
      { id: 3, title: 'To Kill a Mockingbird' },
      { id: 4, title: 'Moby-Dick' },
    ],
  });

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Logic to save updated profile info
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
	return (
		<div>
			<div className="container mx-auto py-12">
      {/* Profile Information Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          ) : (
            <p className="text-gray-600">{userInfo.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          ) : (
            <p className="text-gray-600">{userInfo.email}</p>
          )}
        </div>
        {editMode ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={handleSave}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            onClick={handleEditToggle}
          >
            Edit Profile
          </button>
        )}
      </section>

      {/* Borrowed Books Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Borrowed Books</h3>
        {userInfo.borrowedBooks.length > 0 ? (
          <ul className="list-disc pl-5">
            {userInfo.borrowedBooks.map((book) => (
              <li key={book.id} className="mb-2">
                {book.title} (Return by {book.returnDate})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No books currently borrowed.</p>
        )}
      </section>

      {/* Wishlist Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Wishlist</h3>
        {userInfo.wishlist.length > 0 ? (
          <ul className="list-disc pl-5">
            {userInfo.wishlist.map((book) => (
              <li key={book.id} className="mb-2">
                {book.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Your wishlist is empty.</p>
        )}
      </section>
    </div>
		</div>
	)
}

export default ProfilePage;