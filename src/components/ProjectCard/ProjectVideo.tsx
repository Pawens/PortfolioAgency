"use client";

import React from "react";
import ReactPlayer from "react-player";

interface ProjectVideoProps {
  videoUrl: string;
}

export default function ProjectVideo({ videoUrl }: ProjectVideoProps) {
  return <ReactPlayer url={videoUrl} width="100%" height="500px" controls />;
}
