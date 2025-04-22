/*
  Warnings:

  - You are about to drop the column `completed_at` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `completed_at`,
    DROP COLUMN `due_date`;
