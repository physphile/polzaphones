/*
  Warnings:

  - You are about to drop the column `reverse_charging_power` on the `smartphones` table. All the data in the column will be lost.
  - You are about to drop the column `wireless_charging_power` on the `smartphones` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "smartphones" DROP COLUMN "reverse_charging_power",
DROP COLUMN "wireless_charging_power",
ADD COLUMN     "charge_power" INTEGER,
ADD COLUMN     "reverse_charge_power" INTEGER,
ADD COLUMN     "wireless_charge_power" INTEGER;
