-- CreateEnum
CREATE TYPE "core_series" AS ENUM ('Cortex', 'Kryo', 'Неизвестно');

-- CreateEnum
CREATE TYPE "core_vendor" AS ENUM ('Apple', 'ARM', 'Неизвестно');

-- CreateEnum
CREATE TYPE "gpu_series" AS ENUM ('Adreno', 'Mali', 'Immortalis', 'Неизвестно');

-- CreateEnum
CREATE TYPE "gpu_vendor" AS ENUM ('Qualcomm', 'Apple', 'ARM', 'Неизвестно');

-- CreateEnum
CREATE TYPE "process_vendor" AS ENUM ('TSMC', 'Samsung');

-- CreateEnum
CREATE TYPE "resistance" AS ENUM ('IP0x', 'IP1x', 'IP2x', 'IP3x', 'IP4x', 'IP5x', 'IP6x', 'IPx0', 'IPx1', 'IPx2', 'IPx3', 'IPx4', 'IPx5', 'IPx6', 'IPx7', 'IPx8', 'IPx9', 'IP10', 'IP20', 'IP30', 'IP40', 'IP50', 'IP60', 'IP11', 'IP21', 'IP31', 'IP41', 'IP12', 'IP22', 'IP32', 'IP42', 'IP23', 'IP33', 'IP43', 'IP34', 'IP44', 'IP54', 'IP55', 'IP65', 'IP66', 'IP67', 'IP68', 'IP69');

-- CreateEnum
CREATE TYPE "soc_series" AS ENUM ('Snapdragon', 'Exynos', 'Tensor', 'Dimensity', 'Неизвестно');

-- CreateEnum
CREATE TYPE "soc_vendor" AS ENUM ('Samsung', 'Qualcomm', 'Apple', 'Google', 'MediaTek', 'Неизвестно');

-- CreateEnum
CREATE TYPE "vendor" AS ENUM ('360', '3Q', '4Good', 'Acer', 'Aermoo', 'AG Mobile', 'AGM', 'Airis', 'Alcatel', 'AllCall', 'Amazon', 'Amigoo', 'Amoi', 'Ampe', 'AnyDATA', 'Apple', 'Archos', 'Arima', 'Ark', 'Artel', 'Assistant', 'Asus', 'Axgio', 'Balmuda', 'Bambook', 'Batl', 'BBK', 'Beidou', 'Benefon', 'BenQ', 'BenQ-Siemens', 'Billion', 'Black Fox', 'Black Shark', 'BlackBerry', 'Blackview', 'BLU', 'Bluboo', 'BQ', 'BQ-mobile', 'Bravis', 'Bylynd', 'Cagabi', 'Casio', 'Caterpillar', 'China Mobile', 'Cingular', 'CloudFone', 'Conquest', 'Coolpad', 'COWON', 'Cube', 'Cubot', 'Dell', 'DEX', 'DEXP', 'Digma', 'DNS', 'Doogee', 'Dopod', 'Eachine', 'Ecoo', 'Effire', 'Elari', 'Elephone', 'Energizer', 'Ergo', 'Essential', 'Estar', 'Etuline', 'Explay', 'F150', 'Fairphone', 'Finepower', 'Firefly Mobile', 'Fly', 'Flycat', 'Fog', 'F+', 'Fujitsu', 'Fujitsu-Siemens', 'Glofiish (E-Ten)', 'Garmin', 'Garmin-Asus', 'GeeksPhone', 'General Mobile', 'Geotel', 'Getac', 'Gfive', 'Gigabyte', 'Gigaset', 'Ginza', 'Ginzzu', 'Gionee', 'GoClever', 'GOME', 'Google', 'Gresso', 'Gretel', 'Guophone', 'Hafury', 'Haier', 'Hammer', 'Hasee', 'HDC', 'HEDY mobile', 'Highscreen', 'Hisense', 'HKC', 'HOFFMANN', 'HomTom', 'Honor', 'Hotwav', 'HOTWAV', 'HP', 'HTC', 'Huadoo', 'Huawei', 'Hummer', 'Hyundai', 'I-Mate', 'I-mobile', 'iconBIT', 'IIIF150', 'iLA', 'iMan', 'Impression', 'iNew', 'Infinix', 'InFocus', 'Innos', 'INOI', 'Intex', 'iOcean', 'Ioutdoor', 'IQM', 'iQOO', 'Irbis', 'iRU', 'iRulu', 'Itel', 'IUNI', 'Jesy', 'Jiake', 'Jiayu', 'Jinga', 'Jolla', 'Just5', 'K-Touch', 'Karbonn', 'Keneksi', 'Kingsing', 'Kingzone', 'Kodak', 'Kolina', 'Koolnee', 'Krome', 'Kyocera', 'Land Rover', 'Landvo', 'Laude', 'Leagoo', 'LeEco', 'Lenovo', 'LeRee', 'LeTV', 'Lexand', 'LG', 'Lumigon', 'M-Horse', 'Mann', 'Marshall', 'Maxon', 'Maze', 'Meizu', 'Micromax', 'Microsoft', 'Mijue', 'MiTAC', 'Mlais', 'Mobinnova', 'Motorola', 'MStar', 'NEC', 'Neken', 'Neo', 'Neomi', 'Neonode', 'Newman', 'Nextbit', 'No.1', 'Noa', 'Nobby', 'Nokia', 'Nomi', 'Nomu', 'Nothing', 'Nous', 'O2', 'OnePlus', 'Onext', 'Onkyo', 'OPPO', 'Orange', 'ORSiO', 'Oukitel', 'Own', 'Oysters', 'Palm', 'Panasonic', 'Pantech', 'Pharos', 'Phicomm', 'Philips', 'Pine64', 'Pixelphone', 'Pixus', 'POCO', 'Poptel', 'PPTV', 'Prestigio', 'Purism', 'PuzzlePhone', 'QiGi', 'Qiku', 'Qin', 'Qtek', 'QUMO', 'Ramos', 'Razer', 'Realme', 'Red', 'Redmi', 'Ritmix', 'Ritzviva', 'RoverPC', 'RugGear', 'Runbo', 'S-TELL', 'Samsung', 'Santin', 'Sanyo', 'SciPhone', 'Sendo', 'Senseit', 'SERVO', 'Sharp', 'Siemens', 'Sigma', 'Silent Circle', 'Siswoo', 'Sitronics', 'Smartisan', 'Snail', 'Sonim', 'Sony', 'Sony Ericsson', 'Star', 'Stark', 'Sugar', 'Sunno', 'T-Mobile', 'Tatop', 'TCL', 'Tecno', 'Tele2', 'Telefunken', 'Tesla', 'teXet', 'Thl', 'Timmy', 'Tonino', 'Tonino Lamborghini', 'Toshiba', 'TP-LINK', 'Trimble', 'Turbo', 'TurboPad', 'TurboPhone', 'Ubiquam', 'Uhans', 'UleFone', 'UMI', 'UMIDIGI', 'Unihertz', 'Vargo', 'Verne', 'Vernee', 'Vertex', 'Vertu', 'Viaan', 'ViewSonic', 'vivo', 'VKworld', 'Vodafone', 'Voxtel', 'VPhone', 'Vsmart', 'Wexler', 'Wieppo', 'Wigor', 'Wiko', 'Wileyfox', 'Xiaocai', 'Xiaomi', 'Yota Devices', 'Zeaplus', 'Zifro', 'ZOJI', 'Zopo', 'ZTE', 'ZUK', 'Билайн', 'МегаФон', 'МТС', 'Яндекс');

-- CreateTable
CREATE TABLE "core" (
    "id" SERIAL NOT NULL,
    "vendor" "core_vendor" DEFAULT 'Неизвестно',
    "series" "core_series" DEFAULT 'Неизвестно',
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "core_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cores_on_socs" (
    "coreId" INTEGER NOT NULL,
    "socId" INTEGER NOT NULL,
    "number" INTEGER,
    "frequency" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cores_on_socs_pkey" PRIMARY KEY ("coreId","socId")
);

-- CreateTable
CREATE TABLE "gpu" (
    "id" SERIAL NOT NULL,
    "vendor" "gpu_vendor" DEFAULT 'Неизвестно',
    "series" "gpu_series" DEFAULT 'Неизвестно',
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smartphone" (
    "id" SERIAL NOT NULL,
    "resistance" "resistance",
    "vendor" "vendor" NOT NULL,
    "name" TEXT NOT NULL,
    "series" TEXT DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "smartphone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soc" (
    "id" SERIAL NOT NULL,
    "vendor" "soc_vendor" DEFAULT 'Неизвестно',
    "name" TEXT NOT NULL,
    "series" "soc_series" DEFAULT 'Неизвестно',
    "nanometers" INTEGER,
    "process" TEXT,
    "gpuId" INTEGER,
    "gpu_frequency" DOUBLE PRECISION,
    "gpu_cores" INTEGER,
    "process_vendor" "process_vendor",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "soc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "core_vendor_series_name_key" ON "core"("vendor", "series", "name");

-- CreateIndex
CREATE UNIQUE INDEX "gpu_vendor_series_name_key" ON "gpu"("vendor", "series", "name");

-- CreateIndex
CREATE UNIQUE INDEX "smartphone_vendor_name_series_key" ON "smartphone"("vendor", "name", "series");

-- CreateIndex
CREATE UNIQUE INDEX "soc_name_vendor_series_key" ON "soc"("name", "vendor", "series");

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_coreId_fkey" FOREIGN KEY ("coreId") REFERENCES "core"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_socId_fkey" FOREIGN KEY ("socId") REFERENCES "soc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soc" ADD CONSTRAINT "soc_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "gpu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
