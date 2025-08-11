// const { PrismaClient } = require("@/generated/prisma");

// const prisma = new PrismaClient();

// export default prisma;

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
