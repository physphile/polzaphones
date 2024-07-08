-- CreateEnum
CREATE TYPE "camera_mark" AS ENUM ('Leica', 'Zeiss', 'Hasselblad');

-- CreateEnum
CREATE TYPE "camera_position" AS ENUM ('Front', 'Rear');

-- CreateEnum
CREATE TYPE "camera_technology" AS ENUM ('ISOCELL', 'CMOS');

-- CreateEnum
CREATE TYPE "camera_type" AS ENUM ('Ultrawide', 'Wide', 'Telephoto', 'Macro', 'Zoom');

-- CreateEnum
CREATE TYPE "camera_vendor" AS ENUM ('Sony', 'Omnivision', 'Samsung', 'Apple', 'Hynix', 'Неизвестно');

-- CreateEnum
CREATE TYPE "core_series" AS ENUM ('Cortex', 'Kryo', 'Неизвестно');

-- CreateEnum
CREATE TYPE "core_vendor" AS ENUM ('Apple', 'ARM', 'Неизвестно');

-- CreateEnum
CREATE TYPE "display_aspect_ratio" AS ENUM ('16:9', '19:9', '19,5:9', '20:9', '20,5:9', '21x9');

-- CreateEnum
CREATE TYPE "display_type" AS ENUM ('AMOLED', 'OLED', 'IPS', 'POLED', 'IGZO', 'TFT');

-- CreateEnum
CREATE TYPE "fingerprint_position" AS ENUM ('Rear', 'Front', 'Display', 'Button');

-- CreateEnum
CREATE TYPE "fingerprint_type" AS ENUM ('Optical', 'Ultrasonic');

-- CreateEnum
CREATE TYPE "gpu_series" AS ENUM ('Adreno', 'Mali', 'Immortalis', 'Неизвестно');

-- CreateEnum
CREATE TYPE "gpu_vendor" AS ENUM ('Qualcomm', 'Apple', 'ARM', 'Неизвестно');

-- CreateEnum
CREATE TYPE "material" AS ENUM ('Алюминий', 'Сталь', 'Пластик', 'Титан', 'Стекло');

-- CreateEnum
CREATE TYPE "process_vendor" AS ENUM ('TSMC', 'Samsung');

-- CreateEnum
CREATE TYPE "ram_type" AS ENUM ('LPDDR3', 'LPDDR4', 'LPDDR4X', 'LPDDR5', 'LPDDR5X');

-- CreateEnum
CREATE TYPE "resistance" AS ENUM ('IP0x', 'IP1x', 'IP2x', 'IP3x', 'IP4x', 'IP5x', 'IP6x', 'IPx0', 'IPx1', 'IPx2', 'IPx3', 'IPx4', 'IPx5', 'IPx6', 'IPx7', 'IPx8', 'IPx9', 'IP10', 'IP20', 'IP30', 'IP40', 'IP50', 'IP60', 'IP11', 'IP21', 'IP31', 'IP41', 'IP12', 'IP22', 'IP32', 'IP42', 'IP23', 'IP33', 'IP43', 'IP34', 'IP44', 'IP54', 'IP55', 'IP65', 'IP66', 'IP67', 'IP68', 'IP69');

-- CreateEnum
CREATE TYPE "rom_type" AS ENUM ('eMMC 5.1', 'UFS 2.0', 'UFS 2.1', 'UFS 2.2', 'UFS 3.0', 'UFS 3.1', 'UFS 3.2', 'UFS 4.0');

-- CreateEnum
CREATE TYPE "sim_size" AS ENUM ('Full', 'Mini', 'Micro', 'Nano');

-- CreateEnum
CREATE TYPE "soc_series" AS ENUM ('Snapdragon', 'Exynos', 'Tensor', 'Dimensity', 'Неизвестно');

-- CreateEnum
CREATE TYPE "soc_vendor" AS ENUM ('Samsung', 'Qualcomm', 'Apple', 'Google', 'MediaTek', 'Неизвестно');

-- CreateEnum
CREATE TYPE "sound" AS ENUM ('Стерео', 'Полуторка', 'Моно');

-- CreateEnum
CREATE TYPE "stabilization" AS ENUM ('Оптическая', 'Электронная', 'Нет');

-- CreateEnum
CREATE TYPE "usb_type" AS ENUM ('Type-C', 'Type-A');

-- CreateEnum
CREATE TYPE "usb_version" AS ENUM ('1.0', '1.1', '2.0', '3.2 Gen 1', '3.2 Gen 2', '3.2 Gen 2x2', '4');

-- CreateEnum
CREATE TYPE "vendor" AS ENUM ('Неизвестно', '360', '3Q', '4Good', 'Acer', 'Aermoo', 'AG Mobile', 'AGM', 'Airis', 'Alcatel', 'AllCall', 'Amazon', 'Amigoo', 'Amoi', 'Ampe', 'AnyDATA', 'Apple', 'Archos', 'Arima', 'Ark', 'Artel', 'Assistant', 'Asus', 'Axgio', 'Balmuda', 'Bambook', 'Batl', 'BBK', 'Beidou', 'Benefon', 'BenQ', 'BenQ-Siemens', 'Billion', 'Black Fox', 'Black Shark', 'BlackBerry', 'Blackview', 'BLU', 'Bluboo', 'BQ', 'BQ-mobile', 'Bravis', 'Bylynd', 'Cagabi', 'Casio', 'Caterpillar', 'China Mobile', 'Cingular', 'CloudFone', 'Conquest', 'Coolpad', 'COWON', 'Cube', 'Cubot', 'Dell', 'DEX', 'DEXP', 'Digma', 'DNS', 'Doogee', 'Dopod', 'Eachine', 'Ecoo', 'Effire', 'Elari', 'Elephone', 'Energizer', 'Ergo', 'Essential', 'Estar', 'Etuline', 'Explay', 'F150', 'Fairphone', 'Finepower', 'Firefly Mobile', 'Fly', 'Flycat', 'Fog', 'F+', 'Fujitsu', 'Fujitsu-Siemens', 'Glofiish (E-Ten)', 'Garmin', 'Garmin-Asus', 'GeeksPhone', 'General Mobile', 'Geotel', 'Getac', 'Gfive', 'Gigabyte', 'Gigaset', 'Ginza', 'Ginzzu', 'Gionee', 'GoClever', 'GOME', 'Google', 'Gresso', 'Gretel', 'Guophone', 'Hafury', 'Haier', 'Hammer', 'Hasee', 'HDC', 'HEDY mobile', 'Highscreen', 'Hisense', 'HKC', 'HOFFMANN', 'HomTom', 'Honor', 'Hotwav', 'HOTWAV', 'HP', 'HTC', 'Huadoo', 'Huawei', 'Hummer', 'Hyundai', 'I-Mate', 'I-mobile', 'iconBIT', 'IIIF150', 'iLA', 'iMan', 'Impression', 'iNew', 'Infinix', 'InFocus', 'Innos', 'INOI', 'Intex', 'iOcean', 'Ioutdoor', 'IQM', 'iQOO', 'Irbis', 'iRU', 'iRulu', 'Itel', 'IUNI', 'Jesy', 'Jiake', 'Jiayu', 'Jinga', 'Jolla', 'Just5', 'K-Touch', 'Karbonn', 'Keneksi', 'Kingsing', 'Kingzone', 'Kodak', 'Kolina', 'Koolnee', 'Krome', 'Kyocera', 'Land Rover', 'Landvo', 'Laude', 'Leagoo', 'LeEco', 'Lenovo', 'LeRee', 'LeTV', 'Lexand', 'LG', 'Lumigon', 'M-Horse', 'Mann', 'Marshall', 'Maxon', 'Maze', 'Meizu', 'Micromax', 'Microsoft', 'Mijue', 'MiTAC', 'Mlais', 'Mobinnova', 'Motorola', 'MStar', 'NEC', 'Neken', 'Neo', 'Neomi', 'Neonode', 'Newman', 'Nextbit', 'No.1', 'Noa', 'Nobby', 'Nokia', 'Nomi', 'Nomu', 'Nothing', 'Nous', 'O2', 'OnePlus', 'Onext', 'Onkyo', 'OPPO', 'Orange', 'ORSiO', 'Oukitel', 'Own', 'Oysters', 'Palm', 'Panasonic', 'Pantech', 'Pharos', 'Phicomm', 'Philips', 'Pine64', 'Pixelphone', 'Pixus', 'POCO', 'Poptel', 'PPTV', 'Prestigio', 'Purism', 'PuzzlePhone', 'QiGi', 'Qiku', 'Qin', 'Qtek', 'QUMO', 'Ramos', 'Razer', 'Realme', 'Red', 'Redmi', 'Ritmix', 'Ritzviva', 'RoverPC', 'RugGear', 'Runbo', 'S-TELL', 'Samsung', 'Santin', 'Sanyo', 'SciPhone', 'Sendo', 'Senseit', 'SERVO', 'Sharp', 'Siemens', 'Sigma', 'Silent Circle', 'Siswoo', 'Sitronics', 'Smartisan', 'Snail', 'Sonim', 'Sony', 'Sony Ericsson', 'Star', 'Stark', 'Sugar', 'Sunno', 'T-Mobile', 'Tatop', 'TCL', 'Tecno', 'Tele2', 'Telefunken', 'Tesla', 'teXet', 'Thl', 'Timmy', 'Tonino', 'Tonino Lamborghini', 'Toshiba', 'TP-LINK', 'Trimble', 'Turbo', 'TurboPad', 'TurboPhone', 'Ubiquam', 'Uhans', 'UleFone', 'UMI', 'UMIDIGI', 'Unihertz', 'Vargo', 'Verne', 'Vernee', 'Vertex', 'Vertu', 'Viaan', 'ViewSonic', 'vivo', 'VKworld', 'Vodafone', 'Voxtel', 'VPhone', 'Vsmart', 'Wexler', 'Wieppo', 'Wigor', 'Wiko', 'Wileyfox', 'Xiaocai', 'Xiaomi', 'Yota Devices', 'Zeaplus', 'Zifro', 'ZOJI', 'Zopo', 'ZTE', 'ZUK', 'Билайн', 'МегаФон', 'МТС', 'Яндекс');

-- CreateEnum
CREATE TYPE "video_resolution" AS ENUM ('HD', 'Full HD', '4K', '8K');

-- CreateEnum
CREATE TYPE "wifi" AS ENUM ('5', '6', '6E', '7');

-- CreateTable
CREATE TABLE "cameras" (
    "id" SERIAL NOT NULL,
    "vendor" "camera_vendor" DEFAULT 'Неизвестно',
    "name" TEXT DEFAULT '',
    "resolution" DOUBLE PRECISION,
    "size" DOUBLE PRECISION,
    "technology" "camera_technology",
    "pixel_size" DOUBLE PRECISION,
    "binning" INTEGER,
    "link" TEXT,
    "release_date" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cameras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cameras_on_smartphones" (
    "camera_id" INTEGER NOT NULL,
    "smartphone_id" INTEGER NOT NULL,
    "min_aperture" DOUBLE PRECISION,
    "max_aperture" DOUBLE PRECISION,
    "position" "camera_position",
    "focal" INTEGER,
    "type" "camera_type",
    "stabilization" "stabilization",
    "laf" BOOLEAN,
    "max_video_resolution" "video_resolution",
    "max_video_framerate" INTEGER,
    "fov" INTEGER,
    "autofocus" BOOLEAN,
    "min_focus_distance" INTEGER,

    CONSTRAINT "cameras_on_smartphones_pkey" PRIMARY KEY ("camera_id","smartphone_id")
);

-- CreateTable
CREATE TABLE "cores" (
    "id" SERIAL NOT NULL,
    "vendor" "core_vendor" DEFAULT 'Неизвестно',
    "series" "core_series" DEFAULT 'Неизвестно',
    "name" TEXT DEFAULT '',
    "link" TEXT,
    "release_date" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cores_on_socs" (
    "core_id" INTEGER NOT NULL,
    "soc_id" INTEGER NOT NULL,
    "number" INTEGER,
    "frequency" INTEGER,

    CONSTRAINT "cores_on_socs_pkey" PRIMARY KEY ("core_id","soc_id")
);

-- CreateTable
CREATE TABLE "features" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features_on_smartphones" (
    "smartphone_id" INTEGER NOT NULL,
    "feature_id" INTEGER NOT NULL,

    CONSTRAINT "features_on_smartphones_pkey" PRIMARY KEY ("smartphone_id","feature_id")
);

-- CreateTable
CREATE TABLE "gpus" (
    "id" SERIAL NOT NULL,
    "vendor" "gpu_vendor" DEFAULT 'Неизвестно',
    "series" "gpu_series" DEFAULT 'Неизвестно',
    "name" TEXT DEFAULT '',
    "link" TEXT,
    "release_date" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gpus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smartphones" (
    "id" SERIAL NOT NULL,
    "vendor" "vendor" DEFAULT 'Неизвестно',
    "name" TEXT DEFAULT '',
    "series" TEXT DEFAULT '',
    "version" TEXT DEFAULT '',
    "ltpo" BOOLEAN,
    "resistance" "resistance",
    "pack_case" BOOLEAN,
    "pack_adapter_power" INTEGER,
    "pack_adapter_usb" "usb_type",
    "pack_film" BOOLEAN,
    "sim_number" INTEGER,
    "sim_size" "sim_size",
    "esim" BOOLEAN,
    "weight" INTEGER,
    "height" INTEGER,
    "width" INTEGER,
    "thickness" DOUBLE PRECISION,
    "color_name" TEXT,
    "color_hex" TEXT,
    "frame_material" "material",
    "rear_material" "material",
    "volume_on_the_left" BOOLEAN,
    "usb_type" "usb_type",
    "usb_version" "usb_version",
    "ram_size" INTEGER,
    "ram_type" "ram_type",
    "rom_size" INTEGER,
    "rom_type" "rom_type",
    "sound" "sound",
    "jack" BOOLEAN,
    "ir" BOOLEAN,
    "proximity" BOOLEAN,
    "haptic_engine" BOOLEAN,
    "codec_sbc" BOOLEAN,
    "codec_aac" BOOLEAN,
    "codec_aptx" BOOLEAN,
    "codec_aptx_adaptive" BOOLEAN,
    "codec_aptx_hd" BOOLEAN,
    "codec_ldac" BOOLEAN,
    "codec_lhdc" BOOLEAN,
    "codec_lc3" BOOLEAN,
    "bluetooth" DOUBLE PRECISION,
    "display_type" "display_type",
    "display_diagonal" DOUBLE PRECISION,
    "display_resolution_x" INTEGER,
    "display_resolution_y" INTEGER,
    "display_min_fps" INTEGER,
    "display_max_fps" INTEGER,
    "display_aspect_ratio" "display_aspect_ratio",
    "display_body_ratio" DOUBLE PRECISION,
    "display_srgb" INTEGER,
    "display_dci_p3" INTEGER,
    "hdr_10_plus" BOOLEAN,
    "ppi" INTEGER,
    "display_curved" BOOLEAN,
    "brightness_max" INTEGER,
    "multitouch" INTEGER,
    "pwm_frequency" INTEGER,
    "pwm_max_ratio" INTEGER,
    "aod" BOOLEAN,
    "fingerprint_position" "fingerprint_position",
    "fingerprint_type" "fingerprint_type",
    "fingerprint_repeat" BOOLEAN,
    "fingerprint_max_number" INTEGER,
    "face_unlock" BOOLEAN,
    "face_unlock_max_number" INTEGER,
    "android" DOUBLE PRECISION,
    "ios" DOUBLE PRECISION,
    "harmony" DOUBLE PRECISION,
    "firmware" TEXT,
    "russian" BOOLEAN,
    "preinstalled_apps_removable" BOOLEAN,
    "wifi" "wifi",
    "google_services" BOOLEAN,
    "fourpda" TEXT,
    "polza" TEXT,
    "website" TEXT,
    "kimovil" TEXT,
    "devdb" TEXT,
    "call_recording" BOOLEAN,
    "nfc" BOOLEAN,
    "battery_capacity" INTEGER,
    "pcmark" INTEGER,
    "workbench" INTEGER,
    "geekbench_single" INTEGER,
    "geekbench_multi" INTEGER,
    "geekbench_gpu" INTEGER,
    "antutu" INTEGER,
    "charge_power" INTEGER,
    "reverse_charge_power" INTEGER,
    "wireless_charge_power" INTEGER,
    "throttling_max" INTEGER,
    "throttling_avg" INTEGER,
    "throttling_min" INTEGER,
    "camera_mark" "camera_mark",
    "release_date" TEXT,
    "soc_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "smartphones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socs" (
    "id" SERIAL NOT NULL,
    "vendor" "soc_vendor" DEFAULT 'Неизвестно',
    "name" TEXT DEFAULT '',
    "series" "soc_series" DEFAULT 'Неизвестно',
    "nanometers" INTEGER,
    "process" TEXT,
    "gpu_frequency" DOUBLE PRECISION,
    "gpu_cores" INTEGER,
    "process_vendor" "process_vendor",
    "link" TEXT,
    "release_date" TEXT,
    "gpu_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "socs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "priority" INTEGER,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores_on_smartphones" (
    "smartphone_id" INTEGER NOT NULL,
    "store_id" INTEGER NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "stores_on_smartphones_pkey" PRIMARY KEY ("smartphone_id","store_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cameras_vendor_name_key" ON "cameras"("vendor", "name");

-- CreateIndex
CREATE UNIQUE INDEX "cores_vendor_series_name_key" ON "cores"("vendor", "series", "name");

-- CreateIndex
CREATE UNIQUE INDEX "features_name_key" ON "features"("name");

-- CreateIndex
CREATE UNIQUE INDEX "gpus_vendor_series_name_key" ON "gpus"("vendor", "series", "name");

-- CreateIndex
CREATE UNIQUE INDEX "smartphones_vendor_name_series_version_key" ON "smartphones"("vendor", "name", "series", "version");

-- CreateIndex
CREATE UNIQUE INDEX "socs_name_vendor_series_key" ON "socs"("name", "vendor", "series");

-- CreateIndex
CREATE UNIQUE INDEX "stores_name_key" ON "stores"("name");

-- CreateIndex
CREATE UNIQUE INDEX "stores_link_key" ON "stores"("link");

-- CreateIndex
CREATE UNIQUE INDEX "stores_priority_key" ON "stores"("priority");

-- AddForeignKey
ALTER TABLE "cameras_on_smartphones" ADD CONSTRAINT "cameras_on_smartphones_camera_id_fkey" FOREIGN KEY ("camera_id") REFERENCES "cameras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cameras_on_smartphones" ADD CONSTRAINT "cameras_on_smartphones_smartphone_id_fkey" FOREIGN KEY ("smartphone_id") REFERENCES "smartphones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_core_id_fkey" FOREIGN KEY ("core_id") REFERENCES "cores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cores_on_socs" ADD CONSTRAINT "cores_on_socs_soc_id_fkey" FOREIGN KEY ("soc_id") REFERENCES "socs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "features_on_smartphones" ADD CONSTRAINT "features_on_smartphones_smartphone_id_fkey" FOREIGN KEY ("smartphone_id") REFERENCES "smartphones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "features_on_smartphones" ADD CONSTRAINT "features_on_smartphones_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "smartphones" ADD CONSTRAINT "smartphones_soc_id_fkey" FOREIGN KEY ("soc_id") REFERENCES "socs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socs" ADD CONSTRAINT "socs_gpu_id_fkey" FOREIGN KEY ("gpu_id") REFERENCES "gpus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores_on_smartphones" ADD CONSTRAINT "stores_on_smartphones_smartphone_id_fkey" FOREIGN KEY ("smartphone_id") REFERENCES "smartphones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stores_on_smartphones" ADD CONSTRAINT "stores_on_smartphones_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
