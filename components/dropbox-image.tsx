"use client";

import { IconButton } from "@material-tailwind/react";
import React from "react";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* Image */}
      <div>
        <img
          src="/images/dropbox_icon.png"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      {/* File Name */}
      <div>cutedog.jpeg</div>

      {/* Delete Button */}
      <div className="absolute top-4 right-4 rounded-full">
        <IconButton onClick={() => {}} color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
