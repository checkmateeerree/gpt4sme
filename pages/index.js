import Hero from "../components/landing_page/hero";
import AITools from "../components/landing_page/AI_Tools/AITools";
import Mission from "../components/landing_page/mission";
import WorkingWithBusinesses from "../components/landing_page/workwithbusinesses";
import CallToAction from "../components/landing_page/calltoaction";
import {Flex, Heading, Text, VStack, HStack, Box, Wrap} from "@chakra-ui/layout"
import {Button, useToast} from "@chakra-ui/react"
import Head from "next/head"
import Testimonials from "../components/landing_page/testimonials/Testimonials";
import Progress from "../components/landing_page/progress";

function Index() {
  
  return (
    <>
      <Head>
        <title>GPT4SME: Helping businesses learn to use Artificial Intelligence Services</title>

        <meta name="description" content="GPT4SME is an organization teaches small and medium enterprises to learn how to use Artificial Integllience services to streamline their business operations." key="description" />
      </Head>
      {true && (
          <>
            <Hero />
            <Mission />
            <WorkingWithBusinesses />
            <Testimonials />
            <Progress />
            <AITools />
            <CallToAction />
          </>
        )
      }
    </>
  );
}

export default Index;

