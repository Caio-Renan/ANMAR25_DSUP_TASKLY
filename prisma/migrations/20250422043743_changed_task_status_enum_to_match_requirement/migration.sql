/*
  Warnings:

  - You are about to alter the column `status` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Task` MODIFY `status` ENUM('TODO', 'IN_PROGRESS', 'DONE', 'OVERDUE') NOT NULL DEFAULT 'TODO';
