-- CreateEnum
CREATE TYPE "CoreSeries" AS ENUM ('Cortex', 'Kryo');

-- CreateEnum
CREATE TYPE "CoreVendor" AS ENUM ('Apple', 'ARM');

-- CreateEnum
CREATE TYPE "GpuSeries" AS ENUM ('Adreno', 'Mali', 'Immortalis');

-- CreateEnum
CREATE TYPE "GpuVendor" AS ENUM ('Qualcomm', 'Apple', 'ARM');

-- CreateEnum
CREATE TYPE "ProcessVendor" AS ENUM ('TSMC', 'Samsung');

-- CreateEnum
CREATE TYPE "Resistance" AS ENUM ('IP0x', 'IP1x', 'IP2x', 'IP3x', 'IP4x', 'IP5x', 'IP6x', 'IPx0', 'IPx1', 'IPx2', 'IPx3', 'IPx4', 'IPx5', 'IPx6', 'IPx7', 'IPx8', 'IPx9', 'IP10', 'IP20', 'IP30', 'IP40', 'IP50', 'IP60', 'IP11', 'IP21', 'IP31', 'IP41', 'IP12', 'IP22', 'IP32', 'IP42', 'IP23', 'IP33', 'IP43', 'IP34', 'IP44', 'IP54', 'IP55', 'IP65', 'IP66', 'IP67', 'IP68', 'IP69');

-- CreateEnum
CREATE TYPE "SocSeries" AS ENUM ('Snapdragon', 'Exynos', 'Tensor', 'Dimensity');

-- CreateEnum
CREATE TYPE "SocVendor" AS ENUM ('Samsung', 'Qualcomm', 'Apple', 'Google', 'MediaTek');

-- CreateEnum
CREATE TYPE "Vendor" AS ENUM ('360', '3Q', '4Good', 'Acer', 'Aermoo', 'AG Mobile', 'AGM', 'Airis', 'Alcatel', 'AllCall', 'Amazon', 'Amigoo', 'Amoi', 'Ampe', 'AnyDATA', 'Apple', 'Archos', 'Arima', 'Ark', 'Artel', 'Assistant', 'Asus', 'Axgio', 'Balmuda', 'Bambook', 'Batl', 'BBK', 'Beidou', 'Benefon', 'BenQ', 'BenQ-Siemens', 'Billion', 'Black Fox', 'Black Shark', 'BlackBerry', 'Blackview', 'BLU', 'Bluboo', 'BQ', 'BQ-mobile', 'Bravis', 'Bylynd', 'Cagabi', 'Casio', 'Caterpillar', 'China Mobile', 'Cingular', 'CloudFone', 'Conquest', 'Coolpad', 'COWON', 'Cube', 'Cubot', 'Dell', 'DEX', 'DEXP', 'Digma', 'DNS', 'Doogee', 'Dopod', 'Eachine', 'Ecoo', 'Effire', 'Elari', 'Elephone', 'Energizer', 'Ergo', 'Essential', 'Estar', 'Etuline', 'Explay', 'F150', 'Fairphone', 'Finepower', 'Firefly Mobile', 'Fly', 'Flycat', 'Fog', 'F+', 'Fujitsu', 'Fujitsu-Siemens', 'Glofiish (E-Ten)', 'Garmin', 'Garmin-Asus', 'GeeksPhone', 'General Mobile', 'Geotel', 'Getac', 'Gfive', 'Gigabyte', 'Gigaset', 'Ginza', 'Ginzzu', 'Gionee', 'GoClever', 'GOME', 'Google', 'Gresso', 'Gretel', 'Guophone', 'Hafury', 'Haier', 'Hammer', 'Hasee', 'HDC', 'HEDY mobile', 'Highscreen', 'Hisense', 'HKC', 'HOFFMANN', 'HomTom', 'Honor', 'Hotwav', 'HOTWAV', 'HP', 'HTC', 'Huadoo', 'Huawei', 'Hummer', 'Hyundai', 'I-Mate', 'I-mobile', 'iconBIT', 'IIIF150', 'iLA', 'iMan', 'Impression', 'iNew', 'Infinix', 'InFocus', 'Innos', 'INOI', 'Intex', 'iOcean', 'Ioutdoor', 'IQM', 'iQOO', 'Irbis', 'iRU', 'iRulu', 'Itel', 'IUNI', 'Jesy', 'Jiake', 'Jiayu', 'Jinga', 'Jolla', 'Just5', 'K-Touch', 'Karbonn', 'Keneksi', 'Kingsing', 'Kingzone', 'Kodak', 'Kolina', 'Koolnee', 'Krome', 'Kyocera', 'Land Rover', 'Landvo', 'Laude', 'Leagoo', 'LeEco', 'Lenovo', 'LeRee', 'LeTV', 'Lexand', 'LG', 'Lumigon', 'M-Horse', 'Mann', 'Marshall', 'Maxon', 'Maze', 'Meizu', 'Micromax', 'Microsoft', 'Mijue', 'MiTAC', 'Mlais', 'Mobinnova', 'Motorola', 'MStar', 'NEC', 'Neken', 'Neo', 'Neomi', 'Neonode', 'Newman', 'Nextbit', 'No.1', 'Noa', 'Nobby', 'Nokia', 'Nomi', 'Nomu', 'Nothing', 'Nous', 'O2', 'OnePlus', 'Onext', 'Onkyo', 'OPPO', 'Orange', 'ORSiO', 'Oukitel', 'Own', 'Oysters', 'Palm', 'Panasonic', 'Pantech', 'Pharos', 'Phicomm', 'Philips', 'Pine64', 'Pixelphone', 'Pixus', 'POCO', 'Poptel', 'PPTV', 'Prestigio', 'Purism', 'PuzzlePhone', 'QiGi', 'Qiku', 'Qin', 'Qtek', 'QUMO', 'Ramos', 'Razer', 'Realme', 'Red', 'Redmi', 'Ritmix', 'Ritzviva', 'RoverPC', 'RugGear', 'Runbo', 'S-TELL', 'Samsung', 'Santin', 'Sanyo', 'SciPhone', 'Sendo', 'Senseit', 'SERVO', 'Sharp', 'Siemens', 'Sigma', 'Silent Circle', 'Siswoo', 'Sitronics', 'Smartisan', 'Snail', 'Sonim', 'Sony', 'Sony Ericsson', 'Star', 'Stark', 'Sugar', 'Sunno', 'T-Mobile', 'Tatop', 'TCL', 'Tecno', 'Tele2', 'Telefunken', 'Tesla', 'teXet', 'Thl', 'Timmy', 'Tonino', 'Tonino Lamborghini', 'Toshiba', 'TP-LINK', 'Trimble', 'Turbo', 'TurboPad', 'TurboPhone', 'Ubiquam', 'Uhans', 'UleFone', 'UMI', 'UMIDIGI', 'Unihertz', 'Vargo', 'Verne', 'Vernee', 'Vertex', 'Vertu', 'Viaan', 'ViewSonic', 'vivo', 'VKworld', 'Vodafone', 'Voxtel', 'VPhone', 'Vsmart', 'Wexler', 'Wieppo', 'Wigor', 'Wiko', 'Wileyfox', 'Xiaocai', 'Xiaomi', 'Yota Devices', 'Zeaplus', 'Zifro', 'ZOJI', 'Zopo', 'ZTE', 'ZUK', 'Билайн', 'МегаФон', 'МТС', 'Яндекс');

-- CreateTable
CREATE TABLE "Core" (
    "id" SERIAL NOT NULL,
    "vendor" "CoreVendor",
    "series" "CoreSeries",
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Core_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cores_on_socs" (
    "coreId" INTEGER NOT NULL,
    "socId" INTEGER NOT NULL,
    "frequency" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cores_on_socs_pkey" PRIMARY KEY ("coreId","socId")
);

-- CreateTable
CREATE TABLE "Gpu" (
    "id" SERIAL NOT NULL,
    "vendor" "GpuVendor",
    "series" "GpuSeries",
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Smartphone" (
    "id" SERIAL NOT NULL,
    "resistance" "Resistance",
    "vendor" "Vendor" NOT NULL,
    "name" TEXT NOT NULL,
    "series" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Smartphone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soc" (
    "id" SERIAL NOT NULL,
    "vendor" "SocVendor" NOT NULL,
    "name" TEXT NOT NULL,
    "nanometers" INTEGER,
    "process" TEXT,
    "gpuId" INTEGER,
    "gpu_frequency" DOUBLE PRECISION,
    "gpu_cores" INTEGER,
    "process_vendor" "ProcessVendor",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Soc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Core_vendor_series_name_key" ON "Core"("vendor", "series", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Gpu_vendor_series_name_key" ON "Gpu"("vendor", "series", "name");

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "Core"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_socId_fkey" FOREIGN KEY ("socId") REFERENCES "Soc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soc" ADD CONSTRAINT "Soc_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "Gpu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
