"use client";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white dark:bg-darkBlue p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent dark:focus:ring-accentDark focus:border-accent dark:focus:border-accentDark bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent dark:focus:ring-accentDark focus:border-accent dark:focus:border-accentDark bg-white dark:bg-gray-800"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent dark:focus:ring-accentDark focus:border-accent dark:focus:border-accentDark bg-white dark:bg-gray-800"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent dark:focus:ring-accentDark focus:border-accent dark:focus:border-accentDark bg-white dark:bg-gray-800"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
