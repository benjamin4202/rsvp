/**
 * Guest query resolver
 */

const guests = async (root, args, context, info) => {
    return context.prisma.guests()
}

const guest = async (root, args, context, info) => {
    return context.prisma.guest({ id: args.id})
}

module.exports = {
    guests,
    guest,
}