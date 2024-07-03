/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Soc` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Soc` table. All the data in the column will be lost.
  - You are about to alter the column `frequency` on the `cores_on_socs` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `updated_at` to the `Soc` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cores_on_socs" DROP CONSTRAINT "cores_on_socs_coreId_fkey";

-- DropForeignKey
ALTER TABLE "cores_on_socs" DROP CONSTRAINT "cores_on_socs_socId_fkey";

-- AlterTable
ALTER TABLE "Soc" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "vendor" DROP NOT NULL;

-- AlterTable
ALTER TABLE "cores_on_socs" ADD COLUMN     "number" INTEGER,
ALTER COLUMN "frequency" DROP NOT NULL,
ALTER COLUMN "frequency" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "Core"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_socId_fkey" FOREIGN KEY ("socId") REFERENCES "Soc"("id") ON DELETE CASCADE ON UPDATE CASCADE;
