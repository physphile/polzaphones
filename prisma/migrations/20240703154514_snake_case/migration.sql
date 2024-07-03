/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Core` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Core` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Smartphone` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Smartphone` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Core` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Smartphone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `cores_on_socs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Core" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Gpu" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Smartphone" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "cores_on_socs" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
