import Hero from "../components/landing_page/hero";
import Mission from "../components/landing_page/mission";
import WorkingWithBusinesses from "../components/landing_page/workwithbusinesses";
import CallToAction from "../components/landing_page/calltoaction";
import Head from "next/head"
import Testimonials from "../components/landing_page/testimonials/Testimonials";
import Progress from "../components/landing_page/progress";

function Index() {
  
  return (
    <>
      <Head>
        <title>GPT4SME: Enterprise AI Solutions & Strategic Implementation</title>

        <meta name="description" content="GPT4SME delivers enterprise-grade AI solutions and strategic implementation services to transform business operations and drive competitive advantage." key="description" />
      </Head>
      {true && (
          <>
            <Hero />
            <Mission />
            <WorkingWithBusinesses />
            <Testimonials />
            <Progress />
            <CallToAction />
          </>
        )
      }
    </>
  );
}

export default Index;

