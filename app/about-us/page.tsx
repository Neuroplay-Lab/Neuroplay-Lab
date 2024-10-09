import React from 'react'
import { AboutUs } from '../sections'
import { Metadata } from 'next';

const AboutUsPage = () => {
  return (
    <AboutUs />
  )
}

export const metadata: Metadata = {
  title: "About Us",
  description:
      "Background and current research interests of Psychologists Dr Gray Atherton and Dr Liam Cross.",
  openGraph: {
      description: "Background and current research interests of Psychologists Dr Gray Atherton and Dr Liam Cross.",
  },
};

export default AboutUsPage