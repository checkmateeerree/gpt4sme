import Hero from "../components/landing_page/hero";
import AITools from "../components/landing_page/AI_Tools/AITools";
import Mission from "../components/landing_page/mission";
import WorkingWithBusinesses from "../components/landing_page/workwithbusinesses";
import CallToAction from "../components/landing_page/calltoaction";
import {Flex, Heading, Text, VStack, HStack, Box, Wrap} from "@chakra-ui/layout"
import {Button, useToast} from "@chakra-ui/react"
import Link from 'next/link'
import NewsletterModal from "../components/newsletter_modal";
function Index() {
  
  return (
    <>
      {true && (
          <>
            <Hero />
            <AITools />
            <Mission />
            <WorkingWithBusinesses />
            <CallToAction />
          </>
        )
      }
    </>
  );
}

export default Index;

