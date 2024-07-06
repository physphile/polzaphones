/*
  Warnings:

  - You are about to drop the column `reverse_charging` on the `smartphones` table. All the data in the column will be lost.
  - You are about to drop the column `wireless_charging` on the `smartphones` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "smartphones" DROP COLUMN "reverse_charging",
DROP COLUMN "wireless_charging",
ADD COLUMN     "reverse_charging_power" INTEGER,
ADD COLUMN     "wireless_charging_power" INTEGER;
