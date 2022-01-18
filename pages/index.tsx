import Head from "next/head";
import Img from "react-optimized-image";
import { styled } from "@styles/styled";
import { Text, Stack, Spacer, Link } from "@components/common";
import SignupForm from "@components/SignupForm";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import teemuMilkaImg from "../images/teemu_milka.png";
import mapImg from "../images/map.png";
import branchImg from "../images/branch.png";
import coverImg from "../images/jaakkoJaJanniCover.jpg";
import { PAGE_WIDTH } from "../constants";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Jannin ja Jaakon häät</title>
      </Head>

      <Content>
        <Header>
          {/* <HeaderDecoration> */}
            <Img src={coverImg} />
          {/* </HeaderDecoration> */}

          <Stack
            align="center"
            spacing={{ initial: "xxlarge", md: "xlarge" }}
          >
            <Spacer size="xlarge" />
            <Navbar />
          </Stack>
        </Header>

        <Spacer size={{ initial: "xxlarge", md: "xxlarge" }} />

        <main>
          <Stack spacing="xxxlarge">
            <Section>
              <Stack spacing="xlarge">
                <Stack spacing="large" align="center">
                  <Text variant="title2" id="tervetuloa">
                    Tervetuloa
                  </Text>

                  <LeafDecoration />

                  <Stack spacing="medium">
                    <Text variant="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id leo eleifend iaculis. Etiam congue quis elit consectetur dignissim. Ut id convallis ipsum. Aenean vitae erat varius, dignissim lorem nec, tempus libero. Donec magna nunc, sollicitudin ut elementum in, tincidunt scelerisque eros. Aenean sit amet nulla in sem malesuada imperdiet vitae a enim. Maecenas eu dolor vitae erat tempus accumsan elementum at lectus. Integer porttitor, mauris eu volutpat aliquet, justo turpis suscipit ex, eu eleifend massa ante sed libero. Nunc feugiat sapien ex, ut elementum velit rhoncus in. Nullam mollis semper convallis. In vel velit dictum, placerat purus maximus, suscipit mauris. Nunc at sem hendrerit, sagittis ex vel, tincidunt neque.!
                    </Text>
                    <Text variant="body">Elokuussa juhlitaan!</Text>
                  </Stack>
                </Stack>
              </Stack>

              <Spacer size="xlarge" />

              <SignupFormWrapper>
                <SignupForm />
              </SignupFormWrapper>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="reittiohjeet">
                  Reittiohjeet
                </Text>

                <LeafDecoration />

                <MapImg>
                  <Img
                    src={mapImg}
                    alt="TBA"
                    width={PAGE_WIDTH}
                    height={0.33333 * PAGE_WIDTH}
                    webp
                  />
                </MapImg>

                <Text variant="title3">TBA</Text>

                <Spacer size="normal" />

                <Text variant="body">TBA TBA TBA</Text>

                <Link
                  href="https://goo.gl/maps/VwkK4n98yJjskrtR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TBA 56, 04680 TBA
                </Link>

                <Text variant="body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id leo eleifend iaculis. Etiam congue quis elit consectetur dignissim. Ut id convallis ipsum. Aenean vitae erat varius, dignissim lorem nec, tempus libero. Donec magna nunc, sollicitudin ut elementum in, tincidunt scelerisque eros. Aenean sit amet nulla in sem malesuada imperdiet vitae a enim. Maecenas eu dolor vitae erat tempus accumsan elementum at lectus. Integer porttitor, mauris eu volutpat aliquet, justo turpis suscipit ex, eu eleifend massa ante sed libero. Nunc feugiat sapien ex, ut elementum velit rhoncus in. Nullam mollis semper convallis. In vel velit dictum, placerat purus maximus, suscipit mauris. Nunc at sem hendrerit, sagittis ex vel, tincidunt neque.
                </Text>

                <Link
                  href="https://fi.wikipedia.org/wiki/Venetsia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Menomestan verkkosivut
                </Link>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="lisatietoja">
                  Lisätietoja
                </Text>

                <LeafDecoration />

                <div>
                  <Stack spacing="xlarge" align="center">
                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Aikataulu</Text>

                        <Text variant="body">
                          Vihkiminen alkaa <strong>klo TBA</strong>{" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id leo eleifend iaculis. Etiam congue quis elit consectetur dignissim. Ut id convallis ipsum.
                        </Text>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Majoitus</Text>

                        <Text variant="body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id leo eleifend iaculis. Etiam congue quis elit consectetur dignissim. Ut id convallis ipsum.
                        </Text>

                        <Text variant="body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris id leo eleifend iaculis. Etiam congue quis elit consectetur dignissim. Ut id convallis ipsum.
                        </Text>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="medium" align="center">
                        <Text variant="title3">Hääparin muistaminen</Text>

                        <Text variant="body">
                          Useiden yhdessä asuttujen vuosien jälkeen lusikat,
                          soppakauhat, leivänpaahtimet ja maljakot ovat jo
                          löytäneet tiensä kotiimme. Häälahjojen sijaan meille
                          tärkeintä onkin saada juhlia tätä ihanaa päivää
                          rakkaitten vieraittemme kanssa! Jos kuitenkin tahdot
                          muistaa meitä lahjalla, toivomme pientä lahjoitusta
                          häämatkaamme varten. Muistamiset voi osoittaa suoraan
                          häämatkatilillemme <em>TBA</em>.
                        </Text>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>

            <Section>
              <Stack spacing="large" align="center">
                <Text variant="title2" id="yhteystiedot">
                  Yhteystiedot
                </Text>

                <LeafDecoration />

                <Text variant="body">
                  Onko sinulla kysyttävää ilmoittautumisesta, aikataulusta tai
                  jostain muusta häihin liittyvästä asiasta? Meihin molempiin
                  voi olla yhteydessä sekä sähköpostitse että puhelimitse
                  WhatsAppissa, tekstarilla tai soittamalla.
                </Text>

                <Spacer size="xlarge" />

                <div>
                  <Stack axis={{ initial: "x", md: "y" }} spacing="xlarge">
                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Jaakko Kallio</Text>
                        <Link
                          href="mailto:teemu.taskula@taitounited.fi"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          tba@tba.fi
                        </Link>
                        <Link href="tel:+358400848728">+3580000000</Link>
                      </Stack>
                    </div>

                    <div>
                      <Stack spacing="small" align="center">
                        <Text variant="title3">Janica Tuominen</Text>
                        <Link
                          href="mailto:milkamarianne@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          tba@tba.fi
                        </Link>
                        <Link href="tel:+358445758980">+3580000000</Link>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </Section>

            <Section lang="en">
              <Stack spacing="large" align="center">
                <Text variant="title2" id="in-english">
                  In English
                </Text>

                <LeafDecoration />

                <Stack spacing="medium">
                  <Text variant="body">
                    Hey you international guest! We warmly welcome you to
                    celebrate our wedding on December 4 in Mäntsälä, Finland.
                    The wedding ceremony and reception will take place at{" "}
                    <Link
                      href="https://hirvihaarankartano.fi/en/glass-pavilion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hirvihaaran kartano Glass Pavilion
                    </Link>
                    . The ceremony will begin at <br />4 p.m. and the reception
                    and party will go on until we drop 🕺🏼💃🏼
                  </Text>

                  <Text variant="body">
                    Please confirm your attendance directly to either Teemu or
                    Milka by <strong>September 15</strong>, the latest.
                  </Text>

                  <Text variant="body">
                    Regarding your arrival to the venue and accommodation, don’t
                    worry – <br />
                    we've got you covered.
                  </Text>

                  <Text variant="body">Hope to see you in December!</Text>
                </Stack>
              </Stack>
            </Section>
          </Stack>
        </main>

        <Spacer size="xxxlarge" />

        <Footer />
      </Content>
    </Page>
  );
}

function LeafDecoration() {
  return (
    <Img
      src={branchImg}
      alt=""
      width={150}
      height={70}
      webp
      style={{ height: "auto" }}
    />
  );
}

const Page = styled("div", {
  width: "100%",
});

const Content = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: `${PAGE_WIDTH}px`,
  margingHorizontal: "auto",
  // paddingTop: "300px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 24px rgb(0, 0, 0, 0.05)",
  overflow: "hidden",
  // when: {
  //   md: {
  //     paddingTop: "200px",
  //   },
  //   sm: {
  //     paddingTop: "120px",
  //   },
  // },
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  paddingHorizontal: "$normal",
});

const HeaderDecoration = styled("div", {
  position: "absolute",
  top: "0px",
  left: "0px",
  right: "0px",
  "& > img": {
    width: "100%",
    objectFit: "contain",
  },
});

const SignupFormWrapper = styled("div", {
  margingHorizontal: "calc(-1 * $normal) !important",
});

const MapImg = styled("div", {
  margingHorizontal: "calc(-1 * $normal) !important",

  "& > picture, img": {
    width: "100%",
    height: "auto",
  },
});
