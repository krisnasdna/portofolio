-- CreateTable
CREATE TABLE "Portofolio" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "description" TEXT[],
    "thumbnail" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "services" TEXT[],
    "technologies" TEXT[],
    "year" INTEGER NOT NULL,
    "link" TEXT NOT NULL DEFAULT '',
    "screenshots" TEXT[],

    CONSTRAINT "Portofolio_pkey" PRIMARY KEY ("id")
);
