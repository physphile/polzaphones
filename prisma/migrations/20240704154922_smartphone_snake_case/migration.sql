/*
  Warnings:

  - The primary key for the `cameras_on_smartphones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cameraId` on the `cameras_on_smartphones` table. All the data in the column will be lost.
  - You are about to drop the column `smartphoneId` on the `cameras_on_smartphones` table. All the data in the column will be lost.
  - The primary key for the `cores_on_socs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `coreId` on the `cores_on_socs` table. All the data in the column will be lost.
  - You are about to drop the column `socId` on the `cores_on_socs` table. All the data in the column will be lost.
  - You are about to drop the column `socId` on the `smartphones` table. All the data in the column will be lost.
  - You are about to drop the column `gpuId` on the `socs` table. All the data in the column will be lost.
  - Added the required column `camera_id` to the `cameras_on_smartphones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smartphone_id` to the `cameras_on_smartphones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `core_id` to the `cores_on_socs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soc_id` to the `cores_on_socs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soc_id` to the `smartphones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cameras_on_smartphones" DROP CONSTRAINT "cameras_on_smartphones_cameraId_fkey";

-- DropForeignKey
ALTER TABLE "cameras_on_smartphones" DROP CONSTRAINT "cameras_on_smartphones_smartphoneId_fkey";

-- DropForeignKey
ALTER TABLE "cores_on_socs" DROP CONSTRAINT "cores_on_socs_coreId_fkey";

-- DropForeignKey
ALTER TABLE "cores_on_socs" DROP CONSTRAINT "cores_on_socs_socId_fkey";

-- DropForeignKey
ALTER TABLE "smartphones" DROP CONSTRAINT "smartphones_socId_fkey";

-- DropForeignKey
ALTER TABLE "socs" DROP CONSTRAINT "socs_gpuId_fkey";

-- AlterTable
ALTER TABLE "cameras_on_smartphones" DROP CONSTRAINT "cameras_on_smartphones_pkey",
DROP COLUMN "cameraId",
DROP COLUMN "smartphoneId",
ADD COLUMN     "camera_id" INTEGER NOT NULL,
ADD COLUMN     "smartphone_id" INTEGER NOT NULL,
ADD CONSTRAINT "cameras_on_smartphones_pkey" PRIMARY KEY ("camera_id", "smartphone_id");

-- AlterTable
ALTER TABLE "cores_on_socs" DROP CONSTRAINT "cores_on_socs_pkey",
DROP COLUMN "coreId",
DROP COLUMN "socId",
ADD COLUMN     "core_id" INTEGER NOT NULL,
ADD COLUMN     "soc_id" INTEGER NOT NULL,
ADD CONSTRAINT "cores_on_socs_pkey" PRIMARY KEY ("core_id", "soc_id");

-- AlterTable
ALTER TABLE "smartphones" DROP COLUMN "socId",
ADD COLUMN     "soc_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "socs" DROP COLUMN "gpuId",
ADD COLUMN     "gpu_id" INTEGER;

-- AddForeignKey
ALTER TABLE "cameras_on_smartphones" ADD CONSTRAINT "cameras_on_smartphones_camera_id_fkey" FOREIGN KEY ("camera_id") REFERENCES "cameras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cameras_on_smartphones" ADD CONSTRAINT "cameras_on_smartphones_smartphone_id_fkey" FOREIGN KEY ("smartphone_id") REFERENCES "smartphones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_core_id_fkey" FOREIGN KEY ("core_id") REFERENCES "cores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_soc_id_fkey" FOREIGN KEY ("soc_id") REFERENCES "socs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "smartphones" ADD CONSTRAINT "smartphones_soc_id_fkey" FOREIGN KEY ("soc_id") REFERENCES "socs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socs" ADD CONSTRAINT "socs_gpu_id_fkey" FOREIGN KEY ("gpu_id") REFERENCES "gpus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
