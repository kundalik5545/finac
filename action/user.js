import prisma from "@/db/db.config";

export const getUser = async () => {
  try {
    const user = await prisma.user.findMany();
    return user;
  } catch (err) {
    throw new Error("Error while fetching user.");
  }
};
