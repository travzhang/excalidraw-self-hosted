-- CreateTable
CREATE TABLE "excalidraw_user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "settings" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "excalidraw_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "excalidraw_scene" (
    "id" SERIAL NOT NULL,
    "creator" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "workspaceID" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "excalidraw_scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "excalidraw_workspace" (
    "id" SERIAL NOT NULL,
    "creator" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "members" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "excalidraw_workspace_pkey" PRIMARY KEY ("id")
);
