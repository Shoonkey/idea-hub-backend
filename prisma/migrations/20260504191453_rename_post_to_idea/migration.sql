-- RenameTable
ALTER TABLE "Post" RENAME TO "Idea";

-- RenameConstraint
ALTER TABLE "Idea" RENAME CONSTRAINT "Post_authorId_fkey" TO "Idea_authorId_fkey";

-- RenamePrimaryKeyIndex
ALTER INDEX "Post_pkey" RENAME TO "Idea_pkey";
