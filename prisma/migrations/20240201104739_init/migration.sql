-- CreateEnum
CREATE TYPE "Group" AS ENUM ('beginners', 'amateurs', 'advanced', 'professionals');

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "group" "Group" NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);
