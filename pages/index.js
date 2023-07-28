import Hero from "../components/landing_page/hero";
import SummerPrograms from "../components/landing_page/AI_Tools/AITools";
import Mission from "../components/landing_page/mission";
import WorkingWithTeachers from "../components/landing_page/workwithteachers";
import WorkingWithStudents from "../components/landing_page/workingwithstudents";
import CallToAction from "../components/landing_page/calltoaction";
import {Flex, Heading, Text, VStack, HStack, Box, Wrap} from "@chakra-ui/layout"
import {Button, useToast} from "@chakra-ui/react"
import Link from 'next/link'
function Index() {
  
  return (
    <>
      {true && (
          <>
            <Hero />
            <SummerPrograms />
            <Mission />
            <WorkingWithTeachers />
            <WorkingWithStudents />
            <CallToAction />
          </>
        )
      }
    </>
  );
}

export default Index;

