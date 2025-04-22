/*
  Warnings:

  - You are about to alter the column `status` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- DropForeignKey
ALTER TABLE `Note` DROP FOREIGN KEY `Note_taskId_fkey`;

-- AlterTable
ALTER TABLE `Task` MODIFY `status` ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED') NOT NULL;

-- CreateIndex
CREATE INDEX `Task_status_idx` ON `Task`(`status`);

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Note` RENAME INDEX `Note_taskId_fkey` TO `Note_taskId_idx`;
