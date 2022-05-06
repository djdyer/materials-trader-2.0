const { AuthenticationError } = require('apollo-server-express');
const { User, Listing, Comment } = require('../models');

const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate('winingauctions').populate('watchlistauctions');

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return await User.find({}).populate('winingAuctions').populate('watchlistAuctions').populate({
                path: 'auctions', populate: 'bidsHistory'
            }).populate({
                path: 'auctions.bidsHistory', populate: 'bidUser'
            });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id }).populate('winingAuctions')
                .populate('watchlistAuctions');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        listings: async () => {
            return await Listing.find({}).populate("materials_Id")
            .populate("comments_Id")
            .populate({path: "comments_Id", populate: {path: "user_Id"}})
            .populate("user_Id"); 
        },
        listing: async (parent, args) => {
            return await Listing.findOne({ _id: args._id }).populate("materials_Id")
            .populate("comments_Id")
            .populate("user_Id");
        },
        comments: async (parent, args) => {
            return await Comment.find({}).populate("user_Id");
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;
