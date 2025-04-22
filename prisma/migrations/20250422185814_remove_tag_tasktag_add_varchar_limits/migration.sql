/*
  Warnings:

  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `title` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `TaskTag` DROP FOREIGN KEY `TaskTag_tagId_fkey`;

-- DropForeignKey
ALTER TABLE `TaskTag` DROP FOREIGN KEY `TaskTag_taskId_fkey`;

-- AlterTable
ALTER TABLE `Category` MODIFY `name` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `Note` MODIFY `content` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `Task` MODIFY `title` VARCHAR(100) NOT NULL,
    MODIFY `description` VARCHAR(500) NULL;

-- DropTable
DROP TABLE `Tag`;

-- DropTable
DROP TABLE `TaskTag`;
