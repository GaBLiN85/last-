-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `ferstname` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_mobile_key`(`mobile`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
