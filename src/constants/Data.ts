import Metaverse from "@/components/assests/images/metaverse.webp";
import AI from "@/components/assests/images/ai.webp";
import Ambient from "@/components/assests/images/ambient.webp";
import NetworkProgram from "@/components/assests/images/network.webp";
import Genomics from "@/components/assests/images/genomics.webp";
import Cloud from "@/components/assests/images/cloud.webp";

export const coreTracksData = [
  {
    header: "Quarter I",
    description: `CS-101: Object-Oriented Programming using TypeScript`,
    number: "1",
  },
  {
    header: "Quarter II ",
    description: ` description:W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform`,
    number: "2",
  },
  {
    header: "Quarter III",
    description: `$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development`,
    number: "3",
  },
];

export const specializedTracksData = [
  {
    header: "Quarter IV",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "4",
  },
  {
    header: "Quarter V",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "5",
  },
];

export const ProgramData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    images: Metaverse,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: "4",
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: "5",
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    images: AI,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: "4",
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: "5",
      },
    ],
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    images: Cloud,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: "4",
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: "5",
      },
    ],
  },
  {
    slug: "iot",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    images: Ambient,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: "5",
      },
    ],
  },
  {
    slug: "genomics",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    images: Genomics,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: "5",
      },
    ],
  },
  {
    slug: "npa",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    images: NetworkProgram,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: "4",
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: "5",
      },
    ],
  },
];
