import Hero from "../components/landing_page/hero";
import AITools from "../components/landing_page/AI_Tools/AITools";
import Mission from "../components/landing_page/mission";
import WorkingWithBusinesses from "../components/landing_page/workwithbusinesses";
import CallToAction from "../components/landing_page/calltoaction";
import {Flex, Heading, Text, VStack, HStack, Box, Wrap} from "@chakra-ui/layout"
import {Button, useToast} from "@chakra-ui/react"
import Head from "next/head"

function Index() {
  
  return (
    <>
      <Head>
        <title>GPT4SME: We seek to demystify the powers of AI for SMEs</title>

        <meta name="description" content="GPT4SME is an organization that seeks to demystify the powers of AI to smaller and medium sized enterprises" key="description" />
      </Head>
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

