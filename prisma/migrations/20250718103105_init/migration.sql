-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "services" TEXT[],
    "technologies" TEXT[],
    "year" INTEGER NOT NULL,
    "screenshots" TEXT[],

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);
