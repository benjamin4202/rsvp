/**
 * Guest mutation resolvers
 */
const addGuest = (root, args, context, info) => {
  return context.prisma.createGuest({
      fullName: args.fullName,
      street: args.street,
      streetTwo: args.streetTwo,
      city: args.city,
      state: args.state,
      zip: args.zip,
      rsvp: args.rsvp,
  })
}

const updateGuest = (root, args, context, info) => {
  return context.prisma.updateGuest({
    data: {
      fullName: args.fullName,
      street: args.street,
      streetTwo: args.streetTwo,
      city: args.city,
      state: args.state,
      zip: args.zip,
      rsvp: args.rsvp,
    },
    where: {
      id: args.id,
    },
  })
}

const deleteGuest = (root, { id }, context, info) => {
  return context.prisma.deleteGuest({ id })
}

module.exports = {
    addGuest,
    updateGuest,
    deleteGuest,
}