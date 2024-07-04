/*
  Warnings:

  - Added the required column `updated_at` to the `camera` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `cameras_on_smartphones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "camera" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "vendor" DROP NOT NULL,
ALTER COLUMN "vendor" SET DEFAULT 'Неизвестно';

-- AlterTable
ALTER TABLE "cameras_on_smartphones" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "core" ADD COLUMN     "link" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DEFAULT '';

-- AlterTable
ALTER TABLE "gpu" ADD COLUMN     "link" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DEFAULT '';

-- AlterTable
ALTER TABLE "soc" ADD COLUMN     "link" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DEFAULT '';
