const Contact = () => {
    return (
        
      <div className="form-container">
        <h1 className="text-3xl font-bold mb-4">Зворотній зв'язок </h1>
        <div className="input-group flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label htmlFor="first-name" className="form-label">Ім'я *</label>
            <input type="text" className="form-control w-full" id="first-name" placeholder="Your First Name here.." required />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="last-name" className="form-label">Прізвище *</label>
            <input type="text" className="form-control w-full" id="last-name" placeholder="Your Last Name here..." required />
          </div>
        </div>
        <div className="input-group px-3 mb-4">
          <label htmlFor="email" className="form-label">Email *</label>
          <input type="email" className="form-control w-full" id="email" required />
        </div>
        <div className="input-group px-3 mb-4">
          <label htmlFor="message" className="form-label">Повідомлення *</label>
          <textarea id="message" className="form-control w-full" rows="4" placeholder="Drop Your message here..." required></textarea>
        </div>
        <div className="input-group px-3">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Відправити</button>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
  
