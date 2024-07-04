-- CreateEnum
CREATE TYPE "camera_position" AS ENUM ('Front', 'Rear');

-- CreateEnum
CREATE TYPE "camera_technology" AS ENUM ('ISOCELL', 'CMOS');

-- CreateEnum
CREATE TYPE "CameraType" AS ENUM ('Ultrawide', 'Wide', 'Telephoto', 'Macro', 'Zoom');

-- CreateEnum
CREATE TYPE "camera_vendor" AS ENUM ('Sony', 'Omnivision', 'Samsung', 'Apple', 'Hynix', 'Неизвестно');

-- DropForeignKey
ALTER TABLE "cores_on_socs" DROP CONSTRAINT "cores_on_socs_coreId_fkey";

-- CreateTable
CREATE TABLE "camera" (
    "id" SERIAL NOT NULL,
    "vendor" "camera_vendor" NOT NULL,
    "name" TEXT DEFAULT '',
    "resolution" DOUBLE PRECISION,
    "size" DOUBLE PRECISION,
    "technology" "camera_technology" NOT NULL,
    "pixel_size" DOUBLE PRECISION,
    "binning" INTEGER,

    CONSTRAINT "camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cameras_on_smartphones" (
    "min_aperture" DOUBLE PRECISION,
    "max_aperture" DOUBLE PRECISION,
    "position" "camera_position",
    "focal" INTEGER,
    "type" "CameraType",
    "cameraId" INTEGER NOT NULL,
    "smartphoneId" INTEGER NOT NULL,

    CONSTRAINT "cameras_on_smartphones_pkey" PRIMARY KEY ("cameraId","smartphoneId")
);

-- CreateIndex
CREATE UNIQUE INDEX "camera_vendor_name_key" ON "camera"("vendor", "name");

-- AddForeignKey
ALTER TABLE "cameras_on_smartphones" ADD CONSTRAINT "cameras_on_smartphones_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "camera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cameras_on_smartphones" ADD CONSTRAINT "cameras_on_smartphones_smartphoneId_fkey" FOREIGN KEY ("smartphoneId") REFERENCES "smartphone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "core"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
