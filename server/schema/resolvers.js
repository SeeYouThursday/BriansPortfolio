import Contact from '../models/Contact.js';

const resolvers = {
  Query: {
    messages: async (parent, args) => {
      const messages = await Contact.find({}).select('-__v');
    },
  },
  Mutation: {
    contactMe: async (parent, { email, name, message }) => {
      try {
        const contactMe = await Contact.create({ email, name, message });
      } catch (err) {
        console.error(`Error Sending Message ${err}`);
      }
    },
  },
};

export default resolvers;

//
